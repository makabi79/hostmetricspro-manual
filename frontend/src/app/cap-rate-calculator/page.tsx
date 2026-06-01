export const metadata = {
  title: "Cap Rate Calculator | Airbnb & STR Property Analysis",
  description:
    "Calculate Airbnb and short-term rental property cap rate, NOI, cash flow, expenses, and investment profitability with HostMetricsPro.",
};

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

      <section
        style={{
          marginTop: "64px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "24px",
          }}
        >
          How to Calculate Cap Rate
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "24px",
          }}
        >
          Cap rate is calculated by dividing a property's annual net operating
          income (NOI) by its current market value or purchase price. Real
          estate investors use cap rate to compare investment opportunities and
          evaluate potential returns.
        </p>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          A strong cap rate depends on market conditions, property type,
          occupancy, operating expenses, and rental income. HostMetricsPro helps
          Airbnb and short-term rental investors analyze cap rate alongside cash
          flow, ROI, and other key investment metrics.
        </p>
      </section>
    </main>
  );
}