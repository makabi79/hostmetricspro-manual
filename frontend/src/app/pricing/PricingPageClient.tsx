"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth";
import {
  fetchBillingStatus,
  fetchManualPaymentInstructions,
  submitManualPayment,
  type BillingStatus,
  type ManualPaymentInstructions,
} from "@/lib/billing";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Best for testing the product and screening a few properties.",
    features: [
      "Up to 3 deals",
      "Core STR metrics",
      "Dashboard access",
      "Basic property analysis",
      "Deal score and verdict",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29 / €29",
    period: "/month",
    description:
      "Stop guessing your Airbnb deal profitability. Know your real cash flow, ROI, and risk BEFORE you buy. Built for serious STR investors.",
    features: [
      "Unlimited deals",
      "PDF export",
      "Advanced analytics",
      "PayPal manual payment in USD",
      "Wise manual payment in EUR",
      "Manual Pro activation after payment review",
    ],
    highlighted: true,
  },
];

const comparisonRows = [
  { feature: "Deals", free: "Up to 3", pro: "Unlimited" },
  { feature: "Cash flow analysis", free: "Included", pro: "Included" },
  { feature: "Cap rate and ROI", free: "Included", pro: "Included" },
  { feature: "Deal score and verdict", free: "Included", pro: "Included" },
  { feature: "PDF export", free: "Not included", pro: "Included" },
  {
    feature: "Payment",
    free: "No payment required",
    pro: "PayPal USD or Wise EUR",
  },
];

export default function PricingPageClient() {
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [instructions, setInstructions] =
    useState<ManualPaymentInstructions | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [hasToken, setHasToken] = useState(false);

  const isPendingManualPayment =
    status?.subscription_status === "pending_manual_payment";

  useEffect(() => {
    const token = getToken();

    setHasToken(Boolean(token));

    if (!token) {
      setLoading(false);
      return;
    }

    async function loadBillingData() {
      try {
        setLoading(true);
        setError("");

        const [billingStatus, manualInstructions] = await Promise.all([
          fetchBillingStatus(),
          fetchManualPaymentInstructions(),
        ]);

        setStatus(billingStatus);
        setInstructions(manualInstructions);
      } catch (err) {
        setStatus(null);
        setInstructions(null);
        setError(
          err instanceof Error ? err.message : "Failed to load billing status"
        );
      } finally {
        setLoading(false);
      }
    }

    void loadBillingData();
  }, []);

  async function handleSubmitManualPayment(paymentMethod: string) {
    const token = getToken();

    if (!token) {
      window.location.href = "/signup";
      return;
    }

    try {
      setSubmitLoading(paymentMethod);
      setError("");
      setSuccessMessage("");

      const response = await submitManualPayment(paymentMethod);

      setStatus((previous) =>
        previous
          ? {
              ...previous,
              current_plan: response.current_plan,
              subscription_status: response.subscription_status,
              is_pro: response.is_pro,
            }
          : previous
      );

      setSuccessMessage(response.message);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit manual payment"
      );
    } finally {
      setSubmitLoading("");
    }
  }

  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="container pricing-hero-inner">
          <span className="badge">Manual payment</span>
          <h1>Choose the plan that fits your investing workflow</h1>
          <p>
            Start free, validate the product, and upgrade manually with PayPal
            in USD or Wise in EUR.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          {!loading && status ? (
            <div className="billing-status-banner">
              <div>
                <span className="section-label">Current Plan</span>
                <h2>
                  {status.current_plan.toUpperCase()} ·{" "}
                  {status.subscription_status}
                </h2>
                <p>
                  Deals used: {status.deals_used}
                  {status.max_deals === null
                    ? " / unlimited"
                    : ` / ${status.max_deals}`}
                </p>
              </div>

              <div className="billing-status-actions">
                {status.is_pro ? (
                  <Link href="/dashboard" className="secondary-button">
                    Go to Dashboard
                  </Link>
                ) : isPendingManualPayment ? (
                  <button type="button" className="secondary-button" disabled>
                    Payment pending review
                  </button>
                ) : (
                  <a href="#manual-payment" className="primary-button">
                    View payment instructions
                  </a>
                )}
              </div>
            </div>
          ) : null}

          {error ? <div className="billing-error-box">{error}</div> : null}

          {successMessage ? (
            <div className="dashboard-banner dashboard-banner-success">
              {successMessage}
            </div>
          ) : null}

          <div className="pricing-grid">
            {plans.map((plan) => {
              const isProCard = plan.name === "Pro";
              const isCurrentPlan =
                status?.current_plan.toLowerCase() ===
                  plan.name.toLowerCase() &&
                status?.subscription_status !== "canceled" &&
                !isPendingManualPayment;

              return (
                <article
                  key={plan.name}
                  className={
                    plan.highlighted ? "pricing-card featured" : "pricing-card"
                  }
                >
                  {plan.highlighted ? (
                    <div className="pricing-badge">Most Popular</div>
                  ) : null}

                  <h2>{plan.name}</h2>
                  <p className="pricing-description">{plan.description}</p>

                  <div className="pricing-price-row">
                    <span className="pricing-price">{plan.price}</span>
                    <span className="pricing-period">{plan.period}</span>
                  </div>

                  <ul className="pricing-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  {isCurrentPlan ? (
                    <div className="current-plan-badge">Current plan</div>
                  ) : isProCard ? (
                    <>
                      {status?.is_pro ? (
                        <Link href="/dashboard" className="secondary-button">
                          Go to Dashboard
                        </Link>
                      ) : isPendingManualPayment ? (
                        <button
                          type="button"
                          className="secondary-button"
                          disabled
                        >
                          Payment pending review
                        </button>
                      ) : (
                        <a
                          href="https://www.paypal.com/ncp/payment/EGAMPSU62XY6L"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary-button"
                        >
                          Pay with PayPal
                        </a>
                      )}
                      <p
                        style={{
                          fontSize: "12px",
                          marginTop: "8px",
                          color: "#666",
                        }}
                      >
                        PayPal: $29/month. Wise: €29/month. Pro is activated
                        after admin review.
                      </p>
                    </>
                  ) : (
                    <Link
                      href={status ? "/dashboard" : "/signup"}
                      className="secondary-button"
                    >
                      {status ? "Go to Dashboard" : "Start Free"}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="manual-payment"
        className="section-block section-alt"
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Manual payment instructions</span>
            <h2>Upgrade to Pro with PayPal or Wise.</h2>
            <p>
              Pay manually, click I Paid, and Pro will be activated after admin
              confirmation.
            </p>
          </div>

          <div className="surface-card">
            {!hasToken ? (
              <>
                <h3>Sign up or log in first</h3>
                <p>
                  You need an account before submitting a manual payment review.
                </p>
                <div className="hero-actions">
                  <Link href="/signup" className="primary-button">
                    Create account
                  </Link>
                  <Link href="/login" className="secondary-button">
                    Log in
                  </Link>
                </div>
              </>
            ) : instructions ? (
              <>
                <h3>{instructions.plan_name}</h3>

                <div className="feature-grid" style={{ marginTop: "18px" }}>
                  {instructions.payment_options.map((option) => (
                    <article key={option.method} className="feature-card">
                      <h3>{option.method}</h3>

                      <p>
                        <strong>Amount:</strong> {option.price}
                      </p>

                      <p>
                        <strong>Currency:</strong> {option.currency}
                      </p>

                      <p>
                        <strong>Recipient:</strong> {option.recipient}
                      </p>

                      <p>
                        <strong>Payment email:</strong>{" "}
                        <a href={`mailto:${option.payment_email}`}>
                          {option.payment_email}
                        </a>
                      </p>

                      <p>{option.note}</p>

                      <button
                        type="button"
                        className="primary-button"
                        onClick={() => handleSubmitManualPayment(option.method)}
                        disabled={
                          Boolean(submitLoading) ||
                          status?.is_pro ||
                          isPendingManualPayment
                        }
                      >
                        {submitLoading === option.method
                          ? "Submitting..."
                          : `I Paid with ${option.method}`}
                      </button>
                    </article>
                  ))}
                </div>

                <ul className="pricing-features" style={{ marginTop: "18px" }}>
                  {instructions.instructions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="hero-actions">
                  {status?.is_pro ? (
                    <Link href="/dashboard" className="secondary-button">
                      Go to Dashboard
                    </Link>
                  ) : isPendingManualPayment ? (
                    <button type="button" className="secondary-button" disabled>
                      Payment pending review
                    </button>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <h3>Payment instructions unavailable</h3>
                <p>Please log in again and reload this page.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section-block section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Compare plans</span>
            <h2>Free for testing. Pro for serious STR investing.</h2>
            <p>
              One bad deal can cost far more than a monthly subscription. Pro
              helps you review cash flow, ROI, risk, and deal quality before you
              make a buying decision.
            </p>
          </div>

          <div className="feature-grid">
            {comparisonRows.map((row) => (
              <article key={row.feature} className="feature-card">
                <h3>{row.feature}</h3>
                <p>
                  <strong>Free:</strong> {row.free}
                </p>
                <p>
                  <strong>Pro:</strong> {row.pro}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="section-label">Upgrade path</span>
              <h2>Start free. Upgrade manually when ready.</h2>
              <p>
                Pay with PayPal or Wise, click I Paid, then Pro will be
                activated after admin review.
              </p>
            </div>

            <div className="cta-actions">
              {!status ? (
                <>
                  <Link href="/signup" className="primary-button">
                    Start Free
                  </Link>
                  <Link href="/dashboard" className="secondary-button">
                    View Dashboard
                  </Link>
                </>
              ) : status.is_pro ? (
                <Link href="/dashboard" className="secondary-button">
                  Go to Dashboard
                </Link>
              ) : isPendingManualPayment ? (
                <button type="button" className="secondary-button" disabled>
                  Payment pending review
                </button>
              ) : (
                <a href="#manual-payment" className="primary-button">
                  View payment instructions
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}