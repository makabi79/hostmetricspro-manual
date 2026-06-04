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
          color: "#ffffff",
          padding: "16px 28px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "18px",
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
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "24px",
          }}
        >
          What Is Cap Rate?
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            marginBottom: "24px",
          }}
        >
          Cap rate, or capitalization rate, is one of the most important real
          estate investment metrics. Investors use cap rate to compare rental
          properties, evaluate risk, and estimate expected returns.
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
          Cap rate is calculated by dividing annual net operating income (NOI)
          by the property value or purchase price. Real estate investors use cap
          rate to compare investment opportunities and evaluate potential
          returns.
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
          Cap Rate Calculator FAQ
        </h2>

        <h3>What is a good cap rate?</h3>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          A good cap rate depends on the market, property type, financing
          strategy, and risk tolerance. Investors usually compare cap rates
          between similar properties.
        </p>

        <h3
          style={{
            marginTop: "24px",
          }}
        >
          Does a higher cap rate mean a better investment?
        </h3>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          Not always. Higher cap rates may indicate higher returns, but they can
          also reflect higher risk, lower demand, or weaker market conditions.
        </p>

        <h3
          style={{
            marginTop: "24px",
          }}
        >
          Should Airbnb investors use cap rate?
        </h3>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          Yes. Cap rate is one of the most common metrics used to evaluate
          Airbnb and short-term rental investments, especially when combined
          with cash flow and ROI analysis.
        </p>
      </section>
    </main>
  );
}