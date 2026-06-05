export const metadata = {
  title: "Rental Property Calculator | ROI, Cash Flow & Cap Rate Analysis",
  description:
    "Analyze rental property ROI, cash flow, cap rate, expenses, occupancy, and investment performance with HostMetricsPro.",
};

export default function RentalPropertyCalculatorPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        Rental Property Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Analyze rental property ROI, cash flow, cap rate, operating expenses,
        occupancy, and long-term investment performance before buying your next
        rental property.
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
        Analyze Rental Deals Free
      </a>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is a Rental Property Calculator?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          A rental property calculator helps real estate investors estimate
          profitability before purchasing a property. By analyzing rental
          income, expenses, financing costs, and occupancy assumptions,
          investors can identify strong opportunities and avoid poor-performing
          investments.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Calculate Cash Flow, ROI, and Cap Rate
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps investors calculate monthly cash flow, annual
          return on investment (ROI), net operating income (NOI), and cap rate
          for rental properties and short-term rentals.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Understanding these metrics helps investors compare properties,
          estimate risk, and make data-driven real estate investment decisions.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why Rental Property Analysis Matters
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Many properties appear profitable at first glance but generate weak
          cash flow after accounting for maintenance, vacancies, taxes,
          insurance, and management costs. Proper analysis helps investors
          identify realistic returns and avoid costly mistakes.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Rental Property Calculator FAQ
        </h2>

        <h3>How do I calculate rental property ROI?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          ROI is typically calculated by dividing annual profit by total cash
          invested. Investors use ROI to compare the performance of different
          rental properties.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          What is good cash flow for a rental property?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Positive monthly cash flow is generally considered desirable. The
          amount depends on market conditions, financing structure, and
          investment goals.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Should investors track cap rate?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Yes. Cap rate is one of the most widely used metrics for comparing
          rental property investments and evaluating property-level
          profitability.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Rental Property vs Airbnb Investment Analysis
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Investors often compare traditional rental properties with Airbnb and
          short-term rentals. While Airbnb properties can generate higher gross
          revenue, they may also experience higher operating expenses and
          occupancy fluctuations.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          HostMetricsPro helps investors compare both strategies using the same
          financial framework, making it easier to identify the best investment
          opportunity.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Start Analyzing Rental Property Deals
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Use HostMetricsPro to analyze rental properties, compare investment
          opportunities, estimate cash flow, and make smarter real estate
          investment decisions.
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