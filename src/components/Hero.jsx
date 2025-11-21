export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-28 sm:pb-20 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs bg-white border border-sky-200 text-sky-700 shadow-sm mb-4 mx-auto lg:mx-0">
              Trusted directory across the US & Canada
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Find Urgent Care Near You Now
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Search walk-in clinics, same‑day telehealth, and after‑hours care. Compare wait times, insurance acceptance, and book instantly.
            </p>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
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

              {/* Symptom/complaint dropdown replacing the feature cards */}
              <div className="mt-4">
                <label className="text-xs text-slate-600 mb-1 block">Symptom or complaint (optional)</label>
                <input
                  type="text"
                  list="symptom-options"
                  placeholder="Start typing… e.g., Sore Throat, UTI, RSV"
                  className="w-full h-11 px-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none"
                />
                <datalist id="symptom-options">
                  <option>Abdominal Pain</option>
                  <option>Abscess & Cysts</option>
                  <option>Allergies</option>
                  <option>Asthma</option>
                  <option>Athlete’s Foot</option>
                  <option>Biometric Screening</option>
                  <option>Bloodwork</option>
                  <option>Bronchitis & Pneumonia</option>
                  <option>Bug Bites</option>
                  <option>Burns</option>
                  <option>Cardiovascular Health</option>
                  <option>Cold & Cough</option>
                  <option>COVID-19</option>
                  <option>COVID-19 Antibody Testing</option>
                  <option>Cuts & Scrapes</option>
                  <option>Diabetes Care</option>
                  <option>DOT Physicals (PLEASE CALL AHEAD TO ENSURE PROVIDER AVAILABILITY)</option>
                  <option>Drug Testing</option>
                  <option>Ear Infections</option>
                  <option>Ear Irrigation</option>
                  <option>Fever</option>
                  <option>Flu Shots</option>
                  <option>Flu Treatment</option>
                  <option>Food Poisoning</option>
                  <option>Foreign Body Removal</option>
                  <option>Fractures & Dislocations</option>
                  <option>Hand, Foot, Mouth</option>
                  <option>Headaches & Migraines</option>
                  <option>Hemorrhoid Treatment</option>
                  <option>In-House Mono Test & Treatment</option>
                  <option>Jock Itch</option>
                  <option>Laceration Repair</option>
                  <option>Lead Testing</option>
                  <option>Lipo-B Injections</option>
                  <option>Nausea, Vomiting, Diarrhea</option>
                  <option>Pap Smear</option>
                  <option>Pediatric Urgent Care</option>
                  <option>Pink Eye</option>
                  <option>Pregnancy Testing</option>
                  <option>Prep Treatment</option>
                  <option>Preoperative Clearance Examination</option>
                  <option>Rashes</option>
                  <option>Rapid Strep</option>
                  <option>Respiratory Syncytial Virus (RSV)</option>
                  <option>School, Sports, & Camp Physicals</option>
                  <option>Skin Tag Removal</option>
                  <option>Sore Throat</option>
                  <option>Sprains & Strains</option>
                  <option>STD Testing</option>
                  <option>Tetanus Vaccines</option>
                  <option>Tick Removal</option>
                  <option>Tri-Immune Boost</option>
                  <option>Tuberculosis Testing</option>
                  <option>Upper Respiratory Infection</option>
                  <option>Urinary Tract Infection</option>
                  <option>VA Urgent Care Provider</option>
                  <option>Vitamin B-12 Injections</option>
                  <option>Wart Removal</option>
                  <option>Wellness & Employment Physicals</option>
                  <option>X-Rays</option>
                </datalist>
                <p className="mt-2 text-xs text-slate-500">Choose a symptom to narrow results. You can leave this blank.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
