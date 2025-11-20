import { motion } from "framer-motion";
import { MapPin, Stethoscope, Clock, CalendarCheck } from "lucide-react";

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
      {/* Sexy gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white"></div>
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

      {/* PlushCare full-width banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-emerald-600 to-cyan-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sky-100 text-xs uppercase tracking-wider">Partner spotlight</p>
              <h3 className="mt-1 text-white text-xl sm:text-2xl font-bold">
                PlushCare — Talk to a board‑certified doctor online in minutes
              </h3>
              <p className="mt-1.5 text-sky-100/90 text-sm">
                Fast, private telehealth for urgent concerns like sore throat, UTI, rashes, COVID‑19 and more.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://plushcare.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-white text-slate-900 font-medium shadow-sm hover:bg-slate-50"
              >
                Start telehealth visit
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-11 px-4 rounded-md border border-white/30 text-white/90 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
