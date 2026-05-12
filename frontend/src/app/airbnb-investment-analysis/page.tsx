export default function AirbnbInvestmentAnalysisPage() {
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
        Airbnb Investment Analysis
      </h1>

      <p
        style={{
          fontSize: "24px",
          lineHeight: "1.6",
          marginBottom: "48px",
        }}
      >
        Analyze Airbnb and short-term rental investment opportunities with
        HostMetricsPro.
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
          <h3>ROI Analysis</h3>
          <p>Calculate Airbnb return on investment and deal profitability.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Risk Analysis</h3>
          <p>Evaluate investment risk, occupancy, and cash flow stability.</p>
        </div>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3>Short-Term Rental Metrics</h3>
          <p>
            Analyze cap rate, monthly income, yearly profit, and expenses.
          </p>
        </div>
      </div>

      <section>
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "24px",
          }}
        >
          Airbnb Property Analysis Tools
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          HostMetricsPro helps Airbnb investors analyze STR properties with ROI,
          cash flow, occupancy, cap rate, and profitability metrics before
          buying investment properties.
        </p>
      </section>
    </main>
  );
}