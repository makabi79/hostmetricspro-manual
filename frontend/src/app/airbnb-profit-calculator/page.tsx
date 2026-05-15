export const metadata = {
  title: "Airbnb Profit Calculator | HostMetricsPro",
  description:
    "Calculate Airbnb profit, monthly cash flow, ROI, cap rate, and break-even occupancy for short-term rental investments.",
};

export default function AirbnbProfitCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Airbnb Profit Calculator</h1>

        <p className="text-lg text-gray-300 mb-8">
          Estimate Airbnb profit, revenue, expenses, cash flow, ROI, and break-even occupancy before investing.
        </p>

        <a href="/" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Analyze Your Airbnb Deal
        </a>
      </div>
    </main>
  );
}