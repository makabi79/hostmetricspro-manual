export const metadata = {
  title: "Occupancy Rate Calculator | HostMetricsPro",
  description:
    "Calculate short-term rental occupancy rate, break-even occupancy, Airbnb revenue, and investment performance.",
};

export default function OccupancyRateCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Occupancy Rate Calculator
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Calculate occupancy rate and break-even occupancy to understand
          whether your Airbnb deal can be profitable.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Analyze Occupancy
        </a>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            What Is an Occupancy Rate Calculator?
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            An Occupancy Rate Calculator helps Airbnb hosts and real estate
            investors determine how often a property is booked during a given
            period.
          </p>

          <p className="text-gray-300 leading-8">
            Occupancy rate is one of the most important metrics for evaluating
            short-term rental performance because it directly impacts revenue,
            cash flow, and profitability.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Why Occupancy Rate Matters
          </h2>

          <ul className="space-y-4 text-gray-300 leading-8">
            <li>
              <strong>Revenue Forecasting:</strong> Estimate potential monthly
              and annual income.
            </li>

            <li>
              <strong>Break-Even Analysis:</strong> Understand the minimum
              occupancy needed to cover expenses.
            </li>

            <li>
              <strong>Investment Decisions:</strong> Compare different Airbnb
              opportunities.
            </li>

            <li>
              <strong>Cash Flow Planning:</strong> Predict profitability under
              different occupancy scenarios.
            </li>

            <li>
              <strong>Market Comparison:</strong> Benchmark property performance
              against local competitors.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}