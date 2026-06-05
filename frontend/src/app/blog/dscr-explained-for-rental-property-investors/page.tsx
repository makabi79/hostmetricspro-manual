import Link from "next/link";

export const metadata = {
  title: "DSCR Explained for Rental Property Investors | HostMetricsPro",
  description:
    "Learn what DSCR means, how it is calculated, and why lenders and real estate investors use debt service coverage ratio.",
};

export default function DscrGuidePage() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px" }}>
        DSCR Explained for Rental Property Investors
      </h1>

      <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "40px" }}>
        Debt Service Coverage Ratio (DSCR) is one of the most important metrics
        used by lenders and investors to evaluate rental property financing.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        What Is DSCR?
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        DSCR measures whether a property's income can cover its debt payments.
        Lenders frequently use this metric when approving real estate loans.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        DSCR Formula
      </h2>

      <div
        style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "12px",
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "32px",
        }}
      >
        DSCR = Net Operating Income ÷ Annual Debt Service
      </div>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        What Is a Good DSCR?
      </h2>

      <ul style={{ fontSize: "20px", lineHeight: "2", marginBottom: "32px" }}>
        <li>Below 1.0 — Higher financing risk.</li>
        <li>1.0 to 1.25 — Acceptable in some situations.</li>
        <li>1.25+ — Common lender target.</li>
        <li>1.50+ — Strong coverage ratio.</li>
      </ul>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Why Investors Track DSCR
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        DSCR helps investors understand whether rental income can comfortably
        support mortgage payments while maintaining positive cash flow.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Calculate DSCR Instantly
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "24px" }}>
        Use our free DSCR Calculator to evaluate rental property financing and
        debt coverage.
      </p>

      <Link
        href="/dscr-calculator"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "700",
        }}
      >
        Open DSCR Calculator
      </Link>
    </main>
  );
}