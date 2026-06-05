import Link from "next/link";

export const metadata = {
  title: "Cash on Cash Return vs ROI | Real Estate Investor Guide",
  description:
    "Learn the difference between cash on cash return and ROI, how each metric is calculated, and when real estate investors should use them.",
};

export default function CashOnCashReturnVsRoiPage() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "56px", fontWeight: "700", marginBottom: "24px" }}>
        Cash on Cash Return vs ROI: What Is the Difference?
      </h1>

      <p style={{ fontSize: "22px", lineHeight: "1.8", marginBottom: "40px" }}>
        Cash on cash return and ROI are both important real estate investment
        metrics, but they measure returns in different ways. Understanding the
        difference helps investors compare rental properties more accurately.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        What Is Cash on Cash Return?
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        Cash on cash return measures annual cash flow compared with the actual
        cash invested in a property. It is especially useful for investors who
        use financing.
      </p>

      <div
        style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "12px",
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "32px",
        }}
      >
        Cash on Cash Return = Annual Cash Flow ÷ Total Cash Invested × 100
      </div>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        What Is ROI?
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        ROI, or return on investment, measures overall investment performance.
        It can include cash flow, appreciation, resale value, and total return
        depending on how the investor calculates it.
      </p>

      <div
        style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "12px",
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "32px",
        }}
      >
        ROI = Annual Profit ÷ Total Cash Invested × 100
      </div>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Key Difference
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        Cash on cash return focuses mainly on annual cash flow from invested
        cash. ROI can be broader and may include total profit, appreciation, or
        long-term investment performance.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Which Metric Should Investors Use?
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "32px" }}>
        Investors should usually use both. Cash on cash return is useful for
        understanding annual cash income, while ROI helps evaluate overall
        investment performance.
      </p>

      <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
        Analyze Cash Return and ROI
      </h2>

      <p style={{ fontSize: "20px", lineHeight: "1.8", marginBottom: "24px" }}>
        Use HostMetricsPro to analyze cash on cash return, ROI, cash flow, cap
        rate, NOI, occupancy, expenses, and Airbnb investment performance.
      </p>

      <Link
        href="/cash-on-cash-return-calculator"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "700",
          marginRight: "12px",
        }}
      >
        Open Cash on Cash Return Calculator
      </Link>

      <Link
        href="/real-estate-roi-calculator"
        style={{
          display: "inline-block",
          background: "#111827",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "700",
        }}
      >
        Open Real Estate ROI Calculator
      </Link>
    </main>
  );
}