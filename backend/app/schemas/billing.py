from pydantic import BaseModel, EmailStr


class BillingStatusResponse(BaseModel):
    current_plan: str
    subscription_status: str
    can_create_more_deals: bool
    max_deals: int | None
    deals_used: int
    is_pro: bool


class ManualPaymentInstructionsResponse(BaseModel):
    plan_name: str
    price: str
    recipient: str
    payment_email: str
    instructions: list[str]


class SubmitManualPaymentRequest(BaseModel):
    note: str | None = None


class SubmitManualPaymentResponse(BaseModel):
    message: str
    current_plan: str
    subscription_status: str
    is_pro: bool


class AdminActivateProRequest(BaseModel):
    email: EmailStr


class AdminActivateProResponse(BaseModel):
    message: str
    email: EmailStr
    current_plan: str
    subscription_status: str
    is_pro: bool