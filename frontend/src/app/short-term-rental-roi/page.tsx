export const metadata = {
  title: "Short-Term Rental ROI Calculator | HostMetricsPro",
  description:
    "Analyze short-term rental ROI, Airbnb cash flow, cap rate, expenses, and break-even occupancy.",
};

export default function ShortTermRentalRoiPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Short-Term Rental ROI Calculator</h1>

        <p className="text-lg text-gray-300 mb-8">
          Analyze STR ROI, Airbnb cash flow, cap rate, expenses, and break-even occupancy before buying a property.
        </p>

        <a href="/" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Calculate STR ROI
        </a>
      </div>
    </main>
  );
}