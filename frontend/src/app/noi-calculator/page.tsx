export const metadata = {
  title: "NOI Calculator | Net Operating Income for Real Estate",
  description:
    "Use the NOI Calculator to calculate net operating income for rental properties, Airbnb investments, short-term rentals, and real estate deals.",
};

export default function NoiCalculatorPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "700", marginBottom: "24px" }}>
        NOI Calculator
      </h1>

      <p style={{ fontSize: "24px", lineHeight: "1.6", marginBottom: "48px" }}>
        Calculate Net Operating Income (NOI), rental income, operating expenses,
        Airbnb profitability, and property-level investment performance before
        buying your next real estate deal.
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
        Calculate NOI Free
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
          <h3>NOI Analysis</h3>
          <p>Calculate net operating income from rental revenue and expenses.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Expense Tracking</h3>
          <p>Review property management, repairs, utilities, insurance, and taxes.</p>
        </div>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <h3>Investment Performance</h3>
          <p>Use NOI to evaluate cap rate, property value, and profitability.</p>
        </div>
      </div>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What Is NOI?
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Net Operating Income, or NOI, is a key real estate investment metric
          that measures how much income a property generates after operating
          expenses are deducted from gross rental income.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          How to Calculate NOI
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          NOI is calculated by subtracting total operating expenses from gross
          income. This gives investors a clear view of property-level operating
          performance before financing costs.
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
          NOI = Gross Rental Income − Operating Expenses
        </div>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Operating expenses may include property management, repairs,
          maintenance, utilities, insurance, property taxes, HOA fees, platform
          fees, cleaning costs, and other recurring expenses.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Why NOI Matters for Real Estate Investors
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          NOI helps investors compare properties based on operating performance,
          not financing structure. It is widely used to calculate cap rate,
          estimate property value, compare rental investments, and evaluate
          whether a deal can generate strong returns.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          NOI for Airbnb and Short-Term Rentals
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          Airbnb and short-term rental investors use NOI to understand true
          property profitability after accounting for operating costs such as
          cleaning, utilities, repairs, supplies, management fees, platform fees,
          and seasonal occupancy changes.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Because short-term rental revenue can fluctuate by season, market, and
          occupancy rate, analyzing NOI helps investors avoid overestimating
          income and make better acquisition decisions.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          What NOI Does Not Include
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          NOI does not include mortgage payments, loan principal, interest,
          income taxes, depreciation, or major one-time capital improvements.
          This makes NOI useful for comparing properties before considering
          financing choices.
        </p>

        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          To understand final investor cash flow, NOI should be analyzed
          together with debt service, financing terms, cash invested, occupancy,
          and expected maintenance reserves.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          NOI Calculator FAQ
        </h2>

        <h3>Is NOI the same as profit?</h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Not exactly. NOI measures operating profit before financing costs,
          taxes, depreciation, and major capital expenses.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Does NOI include mortgage payments?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          No. Mortgage payments are not included in NOI because NOI focuses only
          on property operations.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Is higher NOI better?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Generally, higher NOI can indicate stronger property performance, but
          investors should compare NOI with purchase price, cap rate, cash flow,
          risk, and market conditions.
        </p>

        <h3 style={{ marginTop: "24px" }}>
          Why is NOI important for cap rate?
        </h3>
        <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
          Cap rate is calculated using NOI and property value, so accurate NOI
          analysis is essential for comparing rental property investments.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
          Start Analyzing NOI and Rental Property Returns
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "24px" }}>
          HostMetricsPro helps real estate investors analyze NOI, cap rate, cash
          flow, ROI, occupancy, Airbnb revenue, expenses, and overall investment
          quality in one place.
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