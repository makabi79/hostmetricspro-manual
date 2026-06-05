export const metadata = {
  title: "Rental Yield Calculator | Property Investment Yield Analysis",
  description:
    "Calculate rental yield, gross yield, net yield, rental income, expenses, cash flow, ROI, and real estate investment performance.",
};

export default function RentalYieldCalculatorPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        Rental Yield Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Calculate rental yield, gross yield, net yield, rental income, expenses,
        cash flow, and investment performance before buying your next property.
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
        Calculate Rental Yield Free
      </a>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is Rental Yield?
        </h2>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Rental yield measures how much rental income a property generates
          compared with its purchase price or market value.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Gross Rental Yield vs Net Rental Yield
        </h2>
        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Gross rental yield uses total rental income before expenses. Net
          rental yield gives a more realistic picture because it includes
          operating expenses.
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
          Rental Yield = Annual Rental Income ÷ Property Value × 100
        </div>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Rental Yield Calculator FAQ
        </h2>

        <h3>What is a good rental yield?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          A good rental yield depends on the market, property type, financing,
          operating expenses, and investor risk tolerance.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Is net rental yield better than gross yield?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Net rental yield is usually more useful because it accounts for
          expenses and gives a clearer view of real profitability.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Analyze Rental Yield with HostMetricsPro
        </h2>
        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps investors analyze rental yield, cash flow, ROI,
          cap rate, NOI, occupancy, expenses, and Airbnb investment performance.
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