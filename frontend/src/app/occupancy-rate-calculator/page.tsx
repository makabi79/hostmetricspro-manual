export const metadata = {
  title: "Occupancy Rate Calculator | HostMetricsPro",
  description:
    "Calculate short-term rental occupancy rate, break-even occupancy, Airbnb revenue, and investment performance.",
};

export default function OccupancyRateCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Occupancy Rate Calculator</h1>

        <p className="text-lg text-gray-300 mb-8">
          Calculate occupancy rate and break-even occupancy to understand whether your Airbnb deal can be profitable.
        </p>

        <a href="/" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Analyze Occupancy
        </a>
      </div>
    </main>
  );
}