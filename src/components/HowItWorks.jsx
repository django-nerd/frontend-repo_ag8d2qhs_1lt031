export default function HowItWorks() {
  const steps = [
    {
      title: "Tell us where you are",
      desc: "Enter your city, ZIP, or allow location to see nearby clinics and virtual options.",
    },
    {
      title: "Choose your care",
      desc: "Compare in‑person and online urgent care with wait times, pricing, and ratings.",
    },
    { title: "Book in minutes", desc: "Reserve a spot or start a telehealth visit right away." },
  ];
  return (
    <section id="how" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How UrgentCare Now works</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">We bring together walk‑in clinics, urgent care centers, and telehealth providers across the US and Canada so you can get care fast.</p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-semibold mb-3">{i + 1}</div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
