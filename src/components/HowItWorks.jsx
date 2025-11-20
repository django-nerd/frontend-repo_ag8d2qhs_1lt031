import { motion } from "framer-motion";
import { MapPin, Stethoscope, CalendarCheck, Star, ShieldCheck, Video, ArrowRight } from "lucide-react";

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

      {/* PlushCare partner highlight (refined) */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* soft gradient edge */}
            <div className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-gradient-to-r from-sky-300/30 via-emerald-300/30 to-cyan-300/30" aria-hidden />

            {/* decorative blob */}
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-sky-200 to-emerald-200 blur-2xl opacity-70" aria-hidden />

            <div className="relative grid gap-8 p-6 sm:p-8 lg:p-10 lg:grid-cols-12 items-center">
              {/* Left content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-medium tracking-wider text-sky-700/80 bg-sky-50 rounded-full px-2.5 py-1 uppercase">Partner spotlight</span>
                  <span className="h-1 w-1 rounded-full bg-sky-400" />
                  <span className="text-xs text-slate-500">Telehealth</span>
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                  PlushCare — talk to a board‑certified doctor online in minutes
                </h3>
                <p className="mt-2 text-slate-600 max-w-prose">
                  Get fast, private treatment for sore throat, UTI, rashes, COVID‑19 and more — from anywhere in the U.S. and Canada.
                </p>

                {/* Trust + rating */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Board‑certified doctors
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm">
                    <Video className="h-4 w-4 text-sky-600" />
                    Most visits start in under 5 minutes
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm">
                    <Star className="h-4 w-4 text-amber-500" />
                    4.9/5 average rating
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://plushcare.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center h-11 sm:h-12 px-5 sm:px-6 rounded-lg text-white font-medium shadow-sm bg-gradient-to-r from-sky-600 via-emerald-600 to-cyan-600 hover:from-sky-500 hover:via-emerald-500 hover:to-cyan-500 transition-colors"
                  >
                    Start telehealth visit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://plushcare.com/conditions/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-11 sm:h-12 px-5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  >
                    See conditions treated
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  By selecting this option you may be redirected to a partner site. Availability varies by location.
                </p>
              </div>

              {/* Right visual */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-sm">
                  {/* card mock */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.12),transparent_50%)]" aria-hidden />
                    <div className="relative p-5">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-emerald-500 grid place-items-center text-white font-semibold">P</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 leading-tight">PlushCare</p>
                          <p className="text-xs text-slate-500 leading-tight">Virtual urgent care</p>
                        </div>
                      </div>
                      <div className="mt-4 aspect-video rounded-lg bg-slate-100 grid place-items-center border border-slate-200">
                        <Video className="h-8 w-8 text-slate-400" />
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-lg border border-slate-200 bg-white p-3">
                          <p className="text-xs text-slate-500">Starts at</p>
                          <p className="font-semibold text-slate-900">$X</p>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-white p-3">
                          <p className="text-xs text-slate-500">Wait time</p>
                          <p className="font-semibold text-slate-900">~5 min</p>
                        </div>
                      </div>
                      <a
                        href="https://plushcare.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center h-11 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800"
                      >
                        Start visit
                      </a>
                    </div>
                  </div>

                  {/* floating badge */}
                  <div className="absolute -top-3 -right-3 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    Trusted partner
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
