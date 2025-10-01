// pages/pricing.js
export default function Pricing() {
  const plans = [
    { name: "Starter", price: "£200", blurb: "Great for new pages and consistent presence.",
      features: ["12 posts / month", "Captions & hashtags", "Basic creatives", "Monthly report"] },
    { name: "Growth", price: "£400", blurb: "For growing brands that want momentum.",
      features: ["20 posts / month", "Reels + stories", "Community replies", "Bi-weekly report"] },
    { name: "Custom", price: "Let’s talk", blurb: "Scaled content, ads, and influencers.",
      features: ["Paid ads", "UGC & influencers", "A/B testing", "Weekly reporting"] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold text-xl">DataPik</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-indigo-700">Home</a>
            <a href="/pricing" className="hover:text-indigo-700">Pricing</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-semibold">Pricing – Social Media</h1>
        <p className="text-gray-600 mt-2">Simple packages. No lock-ins. Upgrade anytime.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {plans.map(p => (
            <div key={p.name} className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold">{p.price}</div>
              <p className="mt-1 text-gray-600 text-sm">{p.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/#contact" className="mt-6 inline-block rounded-xl bg-black text-white px-4 py-2 hover:bg-indigo-700 transition">
                Select
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} DataPik</p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-indigo-700">Home</a>
            <a href="/pricing" className="hover:text-indigo-700">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
