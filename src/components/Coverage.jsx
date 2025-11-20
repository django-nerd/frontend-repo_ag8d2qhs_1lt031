export default function Coverage() {
  return (
    <section id="coverage" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Coverage across the US and Canada</h2>
            <p className="mt-3 text-slate-600 max-w-xl">
              From major metros to small towns, find urgent care options wherever you are. We include retail clinics, independent centers, hospital‑affiliated locations, and licensed telehealth providers.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-600"></span> Real‑time availability where provided</li>
              <li className="flex gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-sky-600"></span> Insurance and self‑pay options</li>
              <li className="flex gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-indigo-600"></span> Pediatric and after‑hours filters</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1565098772267-60af42b81ef2?q=80&w=1600&auto=format&fit=crop"
                alt="Clinics coverage map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
