```tsx
export const metadata = {
  title: "Cap Rate Calculator | Real Estate & Airbnb Investment Analysis",
  description:
    "Use the Cap Rate Calculator to analyze Airbnb and rental property profitability, NOI, cash flow, expenses, occupancy, and investment returns.",
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
        Calculate cap rate, net operating income (NOI), cash flow, occupancy,
        and profitability for Airbnb and rental property investments.
      </p>

      <a
        href="/signup"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "#fff",
          padding: "16px 28px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
          marginBottom: "48px",
        }}
      >
        Start Free Property Analysis
      </a>

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
          <p>Calculate Airbnb property cap rate and investment profitability.</p>
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
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is Cap Rate?
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "24px",
          }}
        >
          Cap rate, or capitalization rate, is one of the most common real
          estate investment metrics. Investors use cap rate to compare rental
          properties, evaluate risk, and estimate expected returns.
        </p>
      </section>

      <section style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          How to Calculate Cap Rate
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "24px",
          }}
        >
          Cap rate is calculated by dividing annual net operating income (NOI)
          by property value. Investors use cap rate to compare investment
          opportunities and determine whether a property meets their return
          requirements.
        </p>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          A strong cap rate depends on location, occupancy, expenses, rental
          demand, and market conditions. HostMetricsPro helps investors analyze
          cap rate together with cash flow, ROI, and profitability metrics.
        </p>
      </section>

      <section style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why Use HostMetricsPro?
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          HostMetricsPro helps Airbnb and short-term rental investors analyze
          deals before purchasing properties. Estimate cap rate, NOI, cash flow,
          occupancy risk, and profitability in one platform.
        </p>
      </section>

      <section style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Cap Rate Calculator FAQ
        </h2>

        <h3>What is a good cap rate?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          A good cap rate depends on market conditions, property type, and risk.
          Investors often compare cap rates across similar properties within the
          same market.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Does a higher cap rate mean a better investment?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Not always. Higher cap rates can indicate higher returns, but they may
          also reflect higher risk or weaker market conditions.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Should Airbnb investors use cap rate?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Yes. Cap rate is a useful metric for comparing Airbnb and short-term
          rental opportunities, especially when combined with ROI and cash flow
          analysis.
        </p>
      </section>
    </main>
  );
}
```
