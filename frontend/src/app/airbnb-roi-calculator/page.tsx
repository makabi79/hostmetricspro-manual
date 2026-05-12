export const metadata = {
  title: "Airbnb ROI Calculator | HostMetricsPro",
  description:
    "Analyze Airbnb and short-term rental investments with ROI, cash flow, cap rate, occupancy, and risk analysis.",
};

export default function AirbnbRoiCalculatorPage() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "24px",
        }}
      >
        Airbnb ROI Calculator
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.7",
          marginBottom: "32px",
        }}
      >
        Analyze Airbnb and short-term rental investment properties with
        HostMetricsPro.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>ROI Analysis</h3>
          <p>Calculate return on investment for Airbnb properties.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Cash Flow</h3>
          <p>Estimate monthly and yearly rental cash flow.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Cap Rate</h3>
          <p>Measure Airbnb property profitability with cap rate analysis.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Break-even Occupancy</h3>
          <p>Understand the occupancy needed to stay profitable.</p>
        </div>
      </div>

      <h2
        style={{
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Why Use HostMetricsPro?
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "24px",
        }}
      >
        HostMetricsPro helps Airbnb and STR investors analyze deals before
        buying properties. Calculate ROI, cash flow, cap rate, expenses,
        occupancy, and investment risk in seconds.
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "48px",
        }}
      >
        Whether you are investing in vacation rentals, Airbnb apartments, or
        short-term rental homes, HostMetricsPro gives you fast underwriting and
        investment analysis tools.
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
        }}
      >
        Start Free Analysis
      </a>
    </div>
  );
}