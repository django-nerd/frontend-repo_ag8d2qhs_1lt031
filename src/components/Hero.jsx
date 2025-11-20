export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-28 sm:pb-20 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs bg-white border border-sky-200 text-sky-700 shadow-sm mb-4">
              Trusted directory across the US & Canada
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Find urgent care near you — fast.
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Search walk-in clinics, same‑day telehealth, and after‑hours care. Compare wait times, insurance acceptance, and book instantly.
            </p>

            <div className="mt-6 grid sm:flex gap-3">
              <a href="#search" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-sky-600 text-white font-medium shadow hover:bg-sky-700 transition">
                Start a search
              </a>
              <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">
                How it works
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/32?img=5" className="w-7 h-7 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/32?img=12" className="w-7 h-7 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/32?img=22" className="w-7 h-7 rounded-full border-2 border-white" />
              </div>
              <span>Used by thousands every day</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-slate-200">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-slate-500 mb-1">City or ZIP/Postal code</label>
                    <input placeholder="e.g., 10001 or Toronto" className="h-11 px-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs text-slate-500 mb-1">Visit type</label>
                    <select className="h-11 px-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none">
                      <option>In‑person clinic</option>
                      <option>Telehealth</option>
                      <option>Pediatrics</option>
                      <option>After‑hours</option>
                    </select>
                  </div>
                </div>
                <button className="mt-4 w-full h-11 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
                  Search urgent care
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 rounded-md bg-slate-50 border border-slate-200">Real‑time wait times</div>
                <div className="p-3 rounded-md bg-slate-50 border border-slate-200">Insurance friendly</div>
                <div className="p-3 rounded-md bg-slate-50 border border-slate-200">Online booking</div>
                <div className="p-3 rounded-md bg-slate-50 border border-slate-200">24/7 telehealth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
