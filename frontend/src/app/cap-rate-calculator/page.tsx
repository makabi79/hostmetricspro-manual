export default function CapRateCalculatorPage() {
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
        Cap Rate Calculator
      </h1>

      <p
        style={{
          fontSize: "24px",
          lineHeight: "1.6",
          marginBottom: "48px",
        }}
      >
        Analyze Airbnb and short-term rental property profitability using cap
        rate analysis tools from HostMetricsPro.
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
          <h3>Cap Rate Analysis</h3>
          <p>
            Calculate Airbnb property cap rate and investment profitability.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Investment Metrics</h3>
          <p>Track NOI, expenses, occupancy, and annual return metrics.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>STR Profitability</h3>
          <p>Evaluate short-term rental investment opportunities faster.</p>
        </div>
      </div>

      <section>
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "24px",
          }}
        >
          Why Use HostMetricsPro?
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          HostMetricsPro helps Airbnb investors analyze cap rate, occupancy,
          cash flow, and short-term rental profitability before purchasing
          properties.
        </p>
      </section>
    </main>
  );
}