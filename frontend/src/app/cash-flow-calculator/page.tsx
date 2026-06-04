export const metadata = {
  title: "Cash Flow Calculator | Airbnb & Rental Property Cash Flow",
  description:
    "Use the Cash Flow Calculator to analyze Airbnb and rental property income, expenses, mortgage payments, occupancy, profit, ROI, and investment performance.",
};

export default function CashFlowCalculatorPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        Cash Flow Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Calculate Airbnb and rental property cash flow, monthly profit,
        operating expenses, occupancy, and investment performance before buying.
      </p>

      <a
        href="/signup"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "#ffffff",
          padding: "16px 28px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "18px",
          marginBottom: "48px",
        }}
      >
        Start Free Cash Flow Analysis
      </a>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "64px",
        }}
      >
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Monthly Cash Flow</h3>
          <p>Estimate rental income, monthly expenses, and net cash flow.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Expense Analysis</h3>
          <p>Include mortgage, taxes, insurance, utilities, cleaning, repairs, and fees.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Investment Performance</h3>
          <p>Compare cash flow with ROI, cap rate, occupancy, and deal quality.</p>
        </div>
      </div>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is Rental Property Cash Flow?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Cash flow is the money left after rental income pays for all property
          expenses. For Airbnb and short-term rentals, cash flow depends on
          nightly rate, occupancy, cleaning costs, platform fees, utilities,
          repairs, mortgage payments, taxes, insurance, and management costs.
        </p>
      </section>

      <section style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          How to Calculate Airbnb Cash Flow
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Airbnb cash flow is calculated by subtracting all monthly expenses from
          monthly rental income. Positive cash flow means the property earns more
          than it costs to operate. Negative cash flow means the property may
          require additional cash from the investor each month.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          A complete cash flow analysis should include income assumptions,
          occupancy rate, average daily rate, mortgage payments, taxes,
          insurance, utilities, maintenance, supplies, cleaning, platform fees,
          and property management expenses.
        </p>
      </section>

      <section style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why Use HostMetricsPro?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          HostMetricsPro helps Airbnb and rental property investors analyze cash
          flow, ROI, cap rate, break-even occupancy, expenses, and deal quality
          in one focused dashboard before making an investment decision.
        </p>
      </section>

      <section style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Cash Flow Calculator FAQ
        </h2>

        <h3>What is good cash flow for a rental property?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Good cash flow depends on the market, property price, financing, and
          risk. Many investors look for consistent positive monthly cash flow
          after all expenses.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          What expenses should be included?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Include mortgage, property taxes, insurance, utilities, maintenance,
          cleaning, supplies, platform fees, management fees, repairs, and
          vacancy risk.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Is cash flow more important than ROI?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Both are important. Cash flow shows monthly performance, while ROI
          shows return compared with invested capital. Strong deals usually need
          both positive cash flow and attractive ROI.
        </p>
      </section>
    </main>
  );
}