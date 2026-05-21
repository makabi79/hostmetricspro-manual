import os

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.deal import Deal
from app.models.subscription import Subscription
from app.models.user import User
from app.schemas.billing import (
    AdminActivateProRequest,
    AdminActivateProResponse,
    BillingStatusResponse,
    ManualPaymentInstructionsResponse,
    ManualPaymentOption,
    SubmitManualPaymentRequest,
    SubmitManualPaymentResponse,
)

router = APIRouter(prefix="/billing", tags=["billing"])

FREE_PLAN_MAX_DEALS = 3
PRO_PLAN_PRICE_USD = "$29/month"
PRO_PLAN_PRICE_EUR = "€29/month"
PENDING_MANUAL_PAYMENT_STATUS = "pending_manual_payment"


def get_or_create_subscription(db: Session, user_id: int) -> Subscription:
    subscription = db.query(Subscription).filter(Subscription.user_id == user_id).first()
    if subscription:
        return subscription

    subscription = Subscription(
        user_id=user_id,
        current_plan="free",
        subscription_status="inactive",
    )
    db.add(subscription)
    db.commit()
    db.refresh(subscription)
    return subscription


def is_pro_subscription(subscription: Subscription) -> bool:
    return (
        subscription.current_plan == "pro"
        and subscription.subscription_status in {"active", "trialing"}
    )


def env_value(key: str, default: str = "") -> str:
    return os.getenv(key, default).strip()


@router.get("/status", response_model=BillingStatusResponse)
def get_billing_status(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> BillingStatusResponse:
    subscription = get_or_create_subscription(db, current_user.id)
    deals_used = db.query(Deal).filter(Deal.owner_id == current_user.id).count()
    is_pro = is_pro_subscription(subscription)

    return BillingStatusResponse(
        current_plan=subscription.current_plan,
        subscription_status=subscription.subscription_status,
        can_create_more_deals=True if is_pro else deals_used < FREE_PLAN_MAX_DEALS,
        max_deals=None if is_pro else FREE_PLAN_MAX_DEALS,
        deals_used=deals_used,
        is_pro=is_pro,
    )


@router.get("/manual-payment-instructions", response_model=ManualPaymentInstructionsResponse)
def get_manual_payment_instructions(
    current_user: User = Depends(get_current_user),
) -> ManualPaymentInstructionsResponse:
    paypal_email = env_value("MANUAL_PAYPAL_EMAIL", "support@hostmetricpro.com")
    wise_email = env_value("MANUAL_WISE_EMAIL", "support@hostmetricpro.com")
    wise_recipient = env_value("MANUAL_WISE_RECIPIENT", "HostMetricsPro")
    paypal_recipient = env_value("MANUAL_PAYPAL_RECIPIENT", "HostMetricsPro")

    return ManualPaymentInstructionsResponse(
        plan_name="HostMetricsPro Pro",
        instructions=[
            "Choose PayPal or Wise manual payment.",
            f"PayPal amount: {PRO_PLAN_PRICE_USD}.",
            f"Wise amount: {PRO_PLAN_PRICE_EUR}.",
            f"Use your HostMetricsPro account email as payment reference: {current_user.email}.",
            "After payment, click the I Paid button.",
            "Your account will remain pending until admin review.",
            "After confirmation, admin will activate Pro manually.",
        ],
        payment_options=[
            ManualPaymentOption(
                method="PayPal",
                currency="USD",
                price=PRO_PLAN_PRICE_USD,
                recipient=paypal_recipient,
                payment_email=paypal_email,
                note=f"Use your HostMetricsPro account email as payment reference: {current_user.email}.",
            ),
            ManualPaymentOption(
                method="Wise",
                currency="EUR",
                price=PRO_PLAN_PRICE_EUR,
                recipient=wise_recipient,
                payment_email=wise_email,
                note=f"Use your HostMetricsPro account email as payment reference: {current_user.email}.",
            ),
        ],
    )


@router.post("/manual-payment/submit", response_model=SubmitManualPaymentResponse)
def submit_manual_payment(
    payload: SubmitManualPaymentRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> SubmitManualPaymentResponse:
    subscription = get_or_create_subscription(db, current_user.id)

    if is_pro_subscription(subscription):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="You already have an active Pro plan.",
        )

    subscription.current_plan = "free"
    subscription.subscription_status = PENDING_MANUAL_PAYMENT_STATUS

    db.add(subscription)
    db.commit()
    db.refresh(subscription)

    return SubmitManualPaymentResponse(
        message="Payment submitted for manual review.",
        current_plan=subscription.current_plan,
        subscription_status=subscription.subscription_status,
        is_pro=is_pro_subscription(subscription),
    )


@router.post("/admin/activate-pro", response_model=AdminActivateProResponse)
def activate_pro_admin(
    payload: AdminActivateProRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> AdminActivateProResponse:
    admin_email = env_value("ADMIN_EMAIL").lower()

    if not admin_email:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="ADMIN_EMAIL is not configured.",
        )

    if current_user.email.lower() != admin_email:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required.",
        )

    user = db.query(User).filter(User.email == payload.email).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found.",
        )

    subscription = get_or_create_subscription(db, user.id)
    subscription.current_plan = "pro"
    subscription.subscription_status = "active"

    db.add(subscription)
    db.commit()
    db.refresh(subscription)

    return AdminActivateProResponse(
        message="Pro activated successfully.",
        email=user.email,
        current_plan=subscription.current_plan,
        subscription_status=subscription.subscription_status,
        is_pro=is_pro_subscription(subscription),
    )