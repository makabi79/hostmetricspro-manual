export default function CashFlowCalculatorPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "700",
          marginBottom: "24px",
        }}
      >
        Cash Flow Calculator
      </h1>

      <p
        style={{
          fontSize: "24px",
          lineHeight: "1.6",
          marginBottom: "48px",
        }}
      >
        Analyze Airbnb and short-term rental cash flow with HostMetricsPro.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "64px",
        }}
      >
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Monthly Cash Flow</h3>
          <p>
            Estimate Airbnb monthly income, expenses, and rental profitability.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Expense Tracking</h3>
          <p>Analyze mortgage, utilities, taxes, and STR operating costs.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Investment Analysis</h3>
          <p>Understand Airbnb property profitability before investing.</p>
        </div>
      </div>

      <section>
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "24px",
          }}
        >
          Airbnb Cash Flow Analysis
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          HostMetricsPro helps Airbnb investors calculate monthly cash flow,
          expenses, occupancy, ROI, and STR profitability using fast property
          analysis tools.
        </p>
      </section>
    </main>
  );
}