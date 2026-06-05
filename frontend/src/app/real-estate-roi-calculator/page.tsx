export const metadata = {
  title: "Real Estate ROI Calculator | Rental Property Return Analysis",
  description:
    "Calculate real estate ROI, rental property returns, cash flow, cap rate, NOI, and investment performance before buying your next property.",
};

export default function RealEstateRoiCalculatorPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        Real Estate ROI Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Calculate real estate ROI, cash flow, net operating income, cap rate,
        rental income, expenses, and overall investment performance before
        purchasing a property.
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
        Calculate ROI Free
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
          <h3>ROI Analysis</h3>
          <p>Measure annual return on investment for rental properties.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Cash Flow Tracking</h3>
          <p>Analyze rental income, expenses, and monthly profitability.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Investment Decisions</h3>
          <p>Compare multiple properties using objective performance metrics.</p>
        </div>
      </div>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is Real Estate ROI?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Return on Investment (ROI) measures how much profit a real estate
          investment generates relative to the amount of money invested.
          Investors use ROI to compare properties and evaluate long-term
          profitability.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          How to Calculate ROI
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          ROI is calculated by dividing annual profit by total cash invested and
          multiplying by 100.
        </p>

        <div
          style={{
            background: "#f3f4f6",
            padding: "24px",
            borderRadius: "12px",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "24px",
          }}
        >
          ROI = Annual Profit ÷ Total Cash Invested × 100
        </div>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Investors often use ROI together with cash flow, NOI, cap rate, and
          occupancy analysis to evaluate property performance.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why ROI Matters
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          ROI helps investors compare opportunities objectively. A property may
          generate strong revenue but require a large investment, resulting in a
          lower ROI than a smaller property with stronger cash returns.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          ROI for Airbnb and Rental Properties
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Airbnb investors frequently compare ROI against traditional rental
          properties. While short-term rentals can produce higher revenue, they
          often involve higher operating costs and occupancy fluctuations.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Understanding ROI helps investors evaluate whether higher revenue
          justifies additional risk and management effort.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Real Estate ROI Calculator FAQ
        </h2>

        <h3>What is a good ROI for real estate?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          A good ROI depends on market conditions, financing, risk tolerance,
          and investment strategy. Investors typically compare ROI across
          similar properties.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Is ROI better than cap rate?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          ROI and cap rate measure different aspects of performance. Many
          investors use both metrics together when evaluating deals.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Does ROI include financing?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          ROI often includes the impact of financing and cash invested, making
          it useful for understanding actual investor returns.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Start Analyzing Real Estate Returns
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps investors analyze ROI, cap rate, NOI, occupancy,
          cash flow, Airbnb revenue, expenses, and investment quality in one
          platform.
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