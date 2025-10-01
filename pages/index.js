// pages/index.js
// preview ping

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="font-semibold text-xl">DataPik</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-700">Services</a>
            <a href="/pricing" className="hover:text-indigo-700">Pricing</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block text-xs uppercase tracking-wider bg-black text-white rounded-full px-3 py-1">
              AI & Digital Services
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Automate. Smarter. <span className="text-indigo-700">Grow faster with AI.</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              We build AI tools and digital solutions that help humans work better—faster launches, sharper operations, and measurable growth.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#services" className="px-5 py-3 rounded-2xl bg-black text-white hover:bg-indigo-700 transition">Explore Services</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border hover:bg-indigo-50 transition">Talk to us</a>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-xl border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
              alt="Futuristic AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold">Services</h2>
        <p className="text-gray-600 mt-2">End-to-end execution: strategy, build, and growth—delivered with speed.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            ["Build Native Tools","Internal dashboards, automations, and data pipelines."],
            ["Build AI Tools","Chatbots, copilots, and smart workflows."],
            ["Build Apps","Web and mobile apps with clean UX."],
            ["Build Ecommerce Websites","High-converting storefronts with SEO and analytics."],
            ["Manage Social Media","Content, creatives, posting, community."],
            ["Generate Sales","Campaigns, funnels, CRM automations."]
          ].map(([title,desc]) => (
            <div key={title} className="rounded-2xl border bg-white shadow-sm p-5 hover:shadow-lg transition">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* “Next steps” */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold">Next steps</h2>
        <p className="text-gray-600 mt-2">Wherever you are in the journey, we plug in and move you forward.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            ["Got an idea?","DM us today—we’ll turn it into a live product with clear milestones."],
            ["Already have a business?","Drop us a message—let’s generate sales with performance-driven campaigns."],
            ["Have a social page?","We’ll skyrocket your presence with content systems and ads."]
          ].map(([title,desc]) => (
            <div key={title} className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-lg transition">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold">We are into</h2>
        <p className="text-gray-600 mt-2">We build across domains—product, data, and growth.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["AI","Clothing business","Retail industry","Mobile industry","Food business"].map(t => (
            <span key={t} className="px-3 py-1 rounded-full border bg-white text-sm hover:bg-indigo-50 transition">{t}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold">Contact us today</h2>
        <p className="text-gray-600 mt-2">Email: <a className="text-indigo-700 hover:underline" href="mailto:hello@datapik.co.uk">hello@datapik.co.uk</a></p>
        <form className="mt-6 grid md:grid-cols-2 gap-4 rounded-2xl border bg-white shadow-sm p-6">
          <input className="rounded-xl border px-3 py-2" placeholder="Your name" />
          <input type="email" className="rounded-xl border px-3 py-2" placeholder="you@company.com" />
          <textarea rows={4} className="md:col-span-2 rounded-xl border px-3 py-2" placeholder="Tell us about the project…" />
          <button type="button" className="md:col-span-2 rounded-xl bg-black text-white py-2 hover:bg-indigo-700 transition">
            Send (we’ll wire this next)
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} DataPik • AI & Digital Services</p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-indigo-700">Home</a>
            <a href="/pricing" className="hover:text-indigo-700">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
