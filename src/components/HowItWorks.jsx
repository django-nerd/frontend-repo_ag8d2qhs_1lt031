import { motion } from "framer-motion";
import { MapPin, Stethoscope, CalendarCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Tell us where you are",
      desc: "Enter your city, ZIP, or allow location to see nearby clinics and virtual options.",
      icon: MapPin,
      accent: "from-sky-500/15 to-cyan-500/15",
      ring: "ring-sky-500/25",
    },
    {
      title: "Choose your care",
      desc: "Compare in‑person and online urgent care with wait times, pricing, and ratings.",
      icon: Stethoscope,
      accent: "from-emerald-500/15 to-teal-500/15",
      ring: "ring-emerald-500/25",
    },
    {
      title: "Book in minutes",
      desc: "Reserve a spot or start a telehealth visit right away.",
      icon: CalendarCheck,
      accent: "from-violet-500/15 to-fuchsia-500/15",
      ring: "ring-violet-500/25",
    },
  ];

  return (
    <section id="how" className="relative overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            How UrgentCare Now works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-slate-600 max-w-2xl mx-auto"
          >
            Find care fast with a simple, modern experience — whether you prefer a nearby clinic or instant telehealth.
          </motion.p>
        </div>

        {/* Animated cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="group relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-white ring-8 ${s.ring} grid place-items-center shadow-sm mb-4`}>
                  <s.icon className="w-6 h-6 text-slate-800" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
              <motion.div
                aria-hidden
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                className="mt-6 h-1 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-fuchsia-400"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Unified Telehealth CTA card - text first, then image, provider footer */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              {/* Top hook text */}
              <div className="p-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Can't Wait?</h3>
                <p className="mt-1 text-slate-700">See a doctor online in minutes.</p>
              </div>

              {/* Hero image with semi-transparent badge */}
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606229365485-d5a2212b6a7b?q=80&w=1600&auto=format&fit=crop"
                    alt="Telehealth visit on a smartphone"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 rounded-full border border-white/60 bg-white/70 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-medium text-slate-800 shadow-sm">
                  24/7 Access
                </div>
              </div>

              {/* Footer with provider and CTA */}
              <div className="border-t border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-md bg-gradient-to-br from-sky-500 to-emerald-500 grid place-items-center text-white font-semibold">P</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 leading-tight">PlushCare</p>
                      <p className="text-xs text-slate-500 leading-tight">Virtual urgent care</p>
                    </div>
                  </div>
                  <a
                    href="https://plushcare.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center h-11 rounded-lg bg-emerald-600 text-white font-semibold tracking-wide shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                  >
                    Connect Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
