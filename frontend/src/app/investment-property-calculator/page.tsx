export const metadata = {
  title: "Investment Property Calculator | Rental Property Analysis",
  description:
    "Analyze investment properties using cash flow, ROI, cap rate, NOI, occupancy, expenses, and rental income before buying real estate.",
};

export default function InvestmentPropertyCalculatorPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        Investment Property Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Analyze rental property investments, cash flow, ROI, cap rate, NOI,
        occupancy, and profitability before purchasing your next real estate
        investment.
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
        Analyze Investment Properties
      </a>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is an Investment Property Calculator?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          An investment property calculator helps real estate investors evaluate
          rental income, operating expenses, cash flow, ROI, and long-term
          profitability before purchasing a property.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Analyze Cash Flow and Profitability
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Successful real estate investing requires understanding more than
          purchase price. Investors should evaluate rental income, vacancies,
          operating costs, maintenance expenses, taxes, insurance, and
          financing.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          HostMetricsPro helps investors understand true property performance
          before making investment decisions.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Key Metrics Investors Should Track
        </h2>

        <ul
          style={{
            fontSize: "22px",
            lineHeight: "1.9",
            paddingLeft: "30px",
          }}
        >
          <li>Cash Flow</li>
          <li>Return on Investment (ROI)</li>
          <li>Cap Rate</li>
          <li>Net Operating Income (NOI)</li>
          <li>Occupancy Rate</li>
          <li>Expense Ratio</li>
          <li>Break-Even Occupancy</li>
        </ul>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Investment Property Calculator FAQ
        </h2>

        <h3>How do investors evaluate rental properties?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Investors analyze rental income, cash flow, expenses, ROI, cap rate,
          financing terms, and market conditions before purchasing a property.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          What is the most important investment metric?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Most investors use several metrics together, including cash flow, ROI,
          NOI, and cap rate.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Can this calculator be used for Airbnb?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Yes. Investment property analysis can be applied to both traditional
          rental properties and short-term rental investments.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why Investment Analysis Matters
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Many investment properties look attractive based on gross rental
          income alone. Proper analysis helps investors understand actual
          profitability after expenses, vacancies, maintenance, taxes, and
          financing costs are included.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Start Analyzing Investment Properties
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps investors analyze investment properties using
          cash flow, NOI, ROI, cap rate, occupancy, expenses, and long-term
          return projections.
        </p>

        <a
          href="/signup"
          style={{
            display: "inline-block",
            background: "#111827",
            color: "#ffffff",
            padding: "16px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          Try HostMetricsPro Free
        </a>
      </section>
    </main>
  );
}