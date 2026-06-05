export const metadata = {
  title: "Airbnb Revenue Calculator | HostMetricsPro",
  description:
    "Calculate Airbnb revenue, nightly rate, occupancy rate, monthly income, and short-term rental investment performance.",
};

export default function AirbnbRevenueCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Airbnb Revenue Calculator
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Estimate Airbnb revenue based on nightly rate, occupancy rate,
          booked nights, and monthly short-term rental income.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Analyze Airbnb Revenue
        </a>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            What Is an Airbnb Revenue Calculator?
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            An Airbnb Revenue Calculator helps hosts and investors estimate
            potential rental income based on nightly rates, occupancy levels,
            and booking demand.
          </p>

          <p className="text-gray-300 leading-8">
            Revenue projections are one of the most important factors when
            evaluating the profitability of a short-term rental investment.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Airbnb Revenue Calculator FAQ
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                How is Airbnb revenue calculated?
              </h3>
              <p>
                Airbnb revenue is typically calculated by multiplying the
                average nightly rate by the number of booked nights during a
                month or year.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                What affects Airbnb revenue?
              </h3>
              <p>
                Revenue is influenced by occupancy rate, nightly pricing,
                seasonality, location, reviews, competition, and local demand.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Why Revenue Matters
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            Revenue is the foundation of every Airbnb investment analysis.
            Higher occupancy and optimized pricing can significantly improve
            overall profitability.
          </p>

          <p className="text-gray-300 leading-8">
            Investors often compare projected revenue against expenses,
            financing costs, and operating costs to determine expected cash
            flow and return on investment.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Common Airbnb Revenue Factors
          </h2>

          <ul className="space-y-4 text-gray-300 leading-8">
            <li>✔ Average nightly rate</li>
            <li>✔ Occupancy rate</li>
            <li>✔ Seasonal demand</li>
            <li>✔ Property location</li>
            <li>✔ Guest reviews and ratings</li>
            <li>✔ Local competition</li>
          </ul>
        </section>
      </div>
    </main>
  );
}