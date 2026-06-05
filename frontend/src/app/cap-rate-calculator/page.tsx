export const metadata = {
  title: "Cap Rate Calculator | Rental Property Investment Analysis",
  description:
    "Use the Cap Rate Calculator to estimate rental property capitalization rate, net operating income, property value, and investment return before buying.",
};

export default function CapRateCalculatorPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "24px" }}>
        Cap Rate Calculator
      </h1>

      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "32px" }}>
        Use the Cap Rate Calculator to estimate the capitalization rate of a
        rental property based on net operating income and property value. This
        helps investors quickly compare rental deals and understand potential
        investment returns.
      </p>

      <a
        href="/signup"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "white",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "600",
          marginBottom: "50px",
        }}
      >
        Start Analyzing Deals
      </a>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
          What Is Cap Rate?
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Cap rate, or capitalization rate, is a real estate investment metric
          used to measure the relationship between a property&apos;s net operating
          income and its market value or purchase price.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
          How to Calculate Cap Rate
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Cap rate is calculated by dividing annual net operating income by the
          property purchase price, then multiplying the result by 100.
        </p>

        <div
          style={{
            background: "#f3f4f6",
            padding: "24px",
            borderRadius: "12px",
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Cap Rate = Annual NOI ÷ Property Value × 100
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
          Why Cap Rate Matters
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Cap rate helps investors compare different rental properties using a
          simple percentage. A higher cap rate may suggest stronger income
          potential, while a lower cap rate may indicate a more expensive or
          lower-yield investment.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
          Cap Rate for Airbnb and Rental Properties
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          For Airbnb and short-term rental investors, cap rate can be useful
          when comparing properties across different markets. However, investors
          should also consider occupancy rate, nightly rate, operating expenses,
          mortgage payments, seasonality, and cash flow.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
          Analyze More Than Cap Rate
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps investors analyze cap rate, cash flow, Airbnb
          revenue, expenses, occupancy, ROI, and overall deal performance in one
          place.
        </p>

        <a
          href="/signup"
          style={{
            display: "inline-block",
            background: "#111827",
            color: "white",
            padding: "14px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Try HostMetricsPro
        </a>
      </section>
    </div>
  );
}