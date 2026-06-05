import Link from "next/link";

export const metadata = {
  title: "NOI vs Cash Flow | Real Estate Investor Guide",
  description:
    "Learn the difference between net operating income and cash flow, how each metric is calculated, and why both matter for rental property investors.",
};

export default function NoiVsCashFlowPage() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px" }}>
        NOI vs Cash Flow: What Real Estate Investors Should Know
      </h1>

      <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "40px" }}>
        Net Operating Income and cash flow are two important real estate
        investment metrics, but they do not measure the same thing. Understanding
        the difference helps investors evaluate rental properties more clearly.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        What Is NOI?
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        NOI measures property-level operating performance before debt payments.
        It is calculated by subtracting operating expenses from gross rental
        income.
      </p>

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
        NOI = Gross Income − Operating Expenses
      </div>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        What Is Cash Flow?
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        Cash flow measures how much money remains after operating expenses and
        debt payments are paid. This is the money investors may actually keep
        each month or year.
      </p>

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
        Cash Flow = NOI − Debt Service
      </div>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Key Difference Between NOI and Cash Flow
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        NOI excludes financing, while cash flow includes financing. That means
        two investors can buy the same property and have the same NOI, but very
        different cash flow depending on loan terms and debt payments.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Why Both Metrics Matter
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        NOI is useful for comparing property performance, cap rate, and market
        value. Cash flow is useful for understanding whether the investment can
        produce positive income after financing.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Analyze NOI and Cash Flow
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "24px" }}>
        Use HostMetricsPro to analyze NOI, cash flow, cap rate, ROI, Airbnb
        revenue, occupancy, expenses, and overall investment quality.
      </p>

      <Link
        href="/noi-calculator"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "700",
          marginRight: "12px",
        }}
      >
        Open NOI Calculator
      </Link>

      <Link
        href="/cash-flow-calculator"
        style={{
          display: "inline-block",
          background: "#111827",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "700",
        }}
      >
        Open Cash Flow Calculator
      </Link>
    </main>
  );
}