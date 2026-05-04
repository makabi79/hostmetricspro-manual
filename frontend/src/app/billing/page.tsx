"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchBillingStatus, type BillingStatus } from "@/lib/billing";

export default function BillingPage() {
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBillingStatus()
      .then((data) => setStatus(data))
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Failed to load billing");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="section-block">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Billing</span>
          <h2>Manage your plan</h2>
          <p>
            Upgrade manually with Wise or Payoneer. After payment confirmation,
            Pro will be activated by admin.
          </p>
        </div>

        {loading ? (
          <div className="billing-card">Loading billing status...</div>
        ) : null}

        {error ? <div className="billing-error-box">{error}</div> : null}

        {status ? (
          <div className="billing-card">
            <div className="billing-row">
              <span>Current plan</span>
              <strong>{status.current_plan.toUpperCase()}</strong>
            </div>

            <div className="billing-row">
              <span>Subscription status</span>
              <strong>{status.subscription_status}</strong>
            </div>

            <div className="billing-row">
              <span>Deals used</span>
              <strong>
                {status.deals_used}
                {status.max_deals === null
                  ? " / unlimited"
                  : ` / ${status.max_deals}`}
              </strong>
            </div>

            <div className="billing-actions">
              {!status.is_pro ? (
                <Link href="/upgrade" className="primary-button">
                  Upgrade to Pro
                </Link>
              ) : (
                <Link href="/dashboard" className="secondary-button">
                  Go to Dashboard
                </Link>
              )}
            </div>

            {!status.is_pro ? (
              <div className="locked-feature-list">
                <h3>Locked on Free</h3>
                <ul>
                  <li>Unlimited deals</li>
                  <li>PDF export</li>
                  <li>Premium feature access</li>
                  <li>Manual payment via Wise or Payoneer</li>
                </ul>
              </div>
            ) : (
              <div className="locked-feature-list">
                <h3>Pro active</h3>
                <ul>
                  <li>Unlimited deals unlocked</li>
                  <li>PDF export unlocked</li>
                  <li>Premium feature access unlocked</li>
                </ul>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </main>
  );
}