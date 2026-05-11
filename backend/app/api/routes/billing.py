import os
from typing import Any

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
    SubmitManualPaymentRequest,
    SubmitManualPaymentResponse,
)

router = APIRouter(prefix="/billing", tags=["billing"])

FREE_PLAN_MAX_DEALS = 3
PRO_PLAN_PRICE = "$29/month"
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


def get_manual_payment_email() -> str:
    return os.getenv("MANUAL_PAYMENT_EMAIL", "support@hostmetricpro.com").strip()


def get_manual_payment_recipient() -> str:
    return os.getenv("MANUAL_PAYMENT_RECIPIENT", "HostMetricsPro").strip()


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
    payment_email = get_manual_payment_email()
    recipient = get_manual_payment_recipient()

    return ManualPaymentInstructionsResponse(
        plan_name="HostMetricsPro Pro",
        price=PRO_PLAN_PRICE,
        recipient=recipient,
        payment_email=payment_email,
        instructions=[
            "Send the Pro plan payment manually.",
            f"Amount: {PRO_PLAN_PRICE}.",
            f"Use your HostMetricsPro account email as payment reference: {current_user.email}.",
            "After payment, click the I Paid button.",
            "Your account will remain pending until admin review.",
            "After confirmation, admin will activate Pro manually.",
        ],
    )


@router.post("/manual-payment/submit", response_model=SubmitManualPaymentResponse)
def submit_manual_payment(
    payload: SubmitManualPaymentRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> SubmitManualPaymentResponse:
    _ = payload

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
    admin_email = os.getenv("ADMIN_EMAIL", "").strip().lower()

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