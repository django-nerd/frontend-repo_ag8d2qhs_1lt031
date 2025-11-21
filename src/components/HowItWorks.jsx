import { motion } from "framer-motion";
import { MapPin, Stethoscope, CalendarCheck, ArrowRight } from "lucide-react";

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
      desc: "Reserve a spot or start a telehealth visit right away.
      ",
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

      {/* PlushCare partner CTA - simplified and clearer */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* subtle edge glow */}
            <div className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-gradient-to-r from-sky-300/25 via-emerald-300/25 to-cyan-300/25" aria-hidden />

            <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:p-10 lg:grid-cols-12">
              {/* Left: concise copy */}
              <div className="lg:col-span-7">
                <a
                  href="https://plushcare.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center text-left"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Can't Wait? See a Board-Certified Doctor Online Now
                  </h3>
                  <ArrowRight className="ml-2 h-6 w-6 text-slate-900 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-2 text-slate-600 max-w-prose">
                  Get diagnosed, treated & prescriptions sent to your pharmacy in minutes. Available 24/7.
                </p>
              </div>

              {/* Right: video card with image */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1612538497732-8428d2f2f36e?q=80&w=1200&auto=format&fit=crop"
                        alt="Doctor on a video call"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-emerald-500 grid place-items-center text-white font-semibold">P</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 leading-tight">PlushCare</p>
                          <p className="text-xs text-slate-500 leading-tight">Virtual urgent care</p>
                        </div>
                      </div>
                      <a
                        href="https://plushcare.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center h-11 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800"
                      >
                        Start telehealth visit
                      </a>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    24/7 access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
