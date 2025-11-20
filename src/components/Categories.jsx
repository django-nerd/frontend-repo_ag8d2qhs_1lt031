export default function Categories() {
  const items = [
    { name: "In‑person Urgent Care", desc: "Walk‑in clinics and same‑day visits", color: "from-emerald-500 to-emerald-600" },
    { name: "Telehealth", desc: "Video visits within minutes", color: "from-sky-500 to-sky-600" },
    { name: "Pediatrics", desc: "Urgent care for kids and teens", color: "from-indigo-500 to-indigo-600" },
    { name: "After‑hours", desc: "Late night & weekend clinics", color: "from-rose-500 to-rose-600" },
  ];

  return (
    <section id="categories" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Care types</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Browse the most common visit types and find the right option for your situation.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c) => (
            <a key={c.name} href="#search" className="group block p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} text-white flex items-center justify-center font-semibold mb-3`}>⌛</div>
              <div className="font-semibold text-slate-900">{c.name}</div>
              <div className="text-sm text-slate-600">{c.desc}</div>
              <div className="mt-3 text-sm text-sky-700 group-hover:underline">Explore</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
