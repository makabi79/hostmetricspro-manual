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
          maintenance, and management fees before investing in a short-term
          rental.
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

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            What Is an Airbnb Expense Calculator?
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            An Airbnb Expense Calculator helps hosts and investors estimate the
            true operating costs of a short-term rental property before making
            an investment decision.
          </p>

          <p className="text-gray-300 leading-8">
            Understanding expenses such as cleaning fees, utilities,
            maintenance, insurance, property management, and platform fees is
            essential for calculating accurate cash flow and profitability.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Airbnb Expense Calculator FAQ
          </h2>

          <div className="space-y-6 text-gray-300 leading-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                What are the biggest Airbnb expenses?
              </h3>
              <p>
                The largest Airbnb expenses often include mortgage payments,
                cleaning fees, utilities, maintenance, insurance, and platform
                fees.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Why is expense tracking important?
              </h3>
              <p>
                Tracking expenses helps investors calculate accurate cash flow,
                profitability, ROI, and long-term investment performance.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Common Airbnb Operating Expenses
          </h2>

          <p className="text-gray-300 leading-8 mb-4">
            Airbnb operating expenses can include cleaning, repairs, utilities,
            property management, insurance, taxes, supplies, software tools,
            guest amenities, and platform fees.
          </p>

          <p className="text-gray-300 leading-8">
            A strong Airbnb investment should leave enough profit after all
            recurring expenses are paid. Estimating these costs before buying a
            property helps investors avoid negative cash flow.
          </p>
        </section>
      </div>
    </main>
  );
}