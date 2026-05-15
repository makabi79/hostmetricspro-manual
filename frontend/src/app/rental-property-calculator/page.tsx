export const metadata = {
  title: "Rental Property Calculator | HostMetricsPro",
  description:
    "Analyze rental property ROI, cash flow, cap rate, and investment performance with HostMetricsPro.",
};

export default function RentalPropertyCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Rental Property Calculator
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Analyze rental property cash flow, ROI, cap rate, and break-even occupancy instantly.
        </p>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">
            Why Use HostMetricsPro?
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✔ ROI calculation</li>
            <li>✔ Cap rate analysis</li>
            <li>✔ Cash flow forecasting</li>
            <li>✔ Airbnb investment scoring</li>
            <li>✔ Break-even occupancy analysis</li>
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="/"
            className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Analyze Your Property
          </a>
        </div>
      </div>
    </main>
  );
}