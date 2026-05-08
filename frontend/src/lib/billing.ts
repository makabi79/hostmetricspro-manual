import { api } from "@/lib/api";
import type {
  BillingStatus,
  ManualPaymentInstructions,
  SubmitManualPaymentResponse,
} from "@/lib/api";

export type { BillingStatus, ManualPaymentInstructions, SubmitManualPaymentResponse };

export async function fetchBillingStatus(): Promise<BillingStatus> {
  return api.getBillingStatus();
}

export async function fetchManualPaymentInstructions(): Promise<ManualPaymentInstructions> {
  return api.getManualPaymentInstructions();
}

export async function submitManualPayment(
  note?: string
): Promise<SubmitManualPaymentResponse> {
  return api.submitManualPayment({ note: note || null });
}