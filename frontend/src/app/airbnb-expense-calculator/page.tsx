export const metadata = {
  title: "Airbnb Expense Calculator | HostMetricsPro",
  description:
    "Calculate Airbnb operating expenses, cleaning fees, utilities, management fees, maintenance costs, and short-term rental cash flow.",
};

export default function AirbnbExpenseCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Airbnb Expense Calculator
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Estimate Airbnb expenses, operating costs, cleaning fees, utilities,
          maintenance, and management fees before investing in a short-term rental.
        </p>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">
            What Can You Calculate?
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Cleaning fees</li>
            <li>✔ Utilities</li>
            <li>✔ Management fees</li>
            <li>✔ Maintenance costs</li>
            <li>✔ Total Airbnb operating expenses</li>
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="/"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Analyze Your Airbnb Deal
          </a>
        </div>
      </div>
    </main>
  );
}