export const metadata = {
  title: "DSCR Calculator | Debt Service Coverage Ratio for Real Estate",
  description:
    "Use the DSCR Calculator to calculate debt service coverage ratio for rental properties, Airbnb investments, cash flow, NOI, and real estate financing analysis.",
};

export default function DscrCalculatorPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        DSCR Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Calculate Debt Service Coverage Ratio (DSCR), net operating income,
        annual debt payments, rental property cash flow, and financing strength
        before buying your next investment property.
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
        Calculate DSCR Free
      </a>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "64px",
        }}
      >
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>DSCR Analysis</h3>
          <p>Calculate whether property income can cover annual debt payments.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>NOI & Debt Service</h3>
          <p>Compare net operating income against mortgage and loan payments.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Financing Strength</h3>
          <p>Evaluate rental property loan risk and investment cash flow quality.</p>
        </div>
      </div>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is DSCR?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          DSCR, or Debt Service Coverage Ratio, is a real estate financing
          metric that compares a property&apos;s net operating income to its debt
          payments. Investors and lenders use DSCR to understand whether a
          rental property generates enough income to cover its loan obligations.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          How to Calculate DSCR
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          DSCR is calculated by dividing annual net operating income by annual
          debt service.
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
          DSCR = Net Operating Income ÷ Annual Debt Service
        </div>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Annual debt service usually includes total yearly loan payments,
          including principal and interest. A DSCR above 1.0 means the property
          produces more operating income than required debt payments.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why DSCR Matters for Real Estate Investors
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          DSCR helps investors evaluate whether a rental property can support
          its financing. A stronger DSCR may indicate lower loan risk, healthier
          cash flow, and better ability to handle vacancies, repairs, and market
          changes.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          DSCR for Airbnb and Short-Term Rentals
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Airbnb and short-term rental investors can use DSCR to understand
          whether seasonal rental income can safely cover loan payments. Because
          short-term rental income may fluctuate by occupancy, nightly rate, and
          season, DSCR analysis is especially useful for measuring financing
          risk.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          HostMetricsPro helps investors analyze DSCR alongside occupancy,
          Airbnb revenue, expenses, cap rate, ROI, and cash flow to get a fuller
          view of investment quality.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is a Good DSCR?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          A DSCR of 1.0 means the property generates just enough operating
          income to cover debt payments. A DSCR below 1.0 means the property may
          not generate enough income to cover the loan from operations alone.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Many investors prefer a DSCR above 1.25 because it may provide a
          stronger safety margin. However, the ideal DSCR depends on the lender,
          property type, market, financing terms, and investor risk tolerance.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          DSCR Calculator FAQ
        </h2>

        <h3>What does DSCR mean in real estate?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          DSCR means Debt Service Coverage Ratio. It measures whether a
          property&apos;s net operating income can cover its loan payments.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Is a higher DSCR better?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Generally, yes. A higher DSCR may indicate stronger cash flow and a
          larger safety margin between income and debt payments.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Does DSCR include operating expenses?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Yes. DSCR uses NOI, and NOI is calculated after deducting operating
          expenses from gross income.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Can Airbnb income be used for DSCR?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Airbnb income can be used in investment analysis, but investors should
          account for occupancy changes, seasonality, expenses, and lender
          requirements.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Analyze DSCR, Cash Flow, and Financing Risk
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps real estate investors calculate DSCR, NOI, cap
          rate, cash flow, Airbnb revenue, expenses, occupancy, ROI, and overall
          property performance in one place.
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