import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import Coverage from './components/Coverage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <Coverage />
        <section id="get-listed" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 p-8 sm:p-10 bg-white grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">List your urgent care clinic</h3>
                <p className="mt-2 text-slate-600">Reach patients looking for same‑day care in your area. Showcase insurance acceptance, real‑time availability, and online booking.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Verified profile with hours, services, and pricing</li>
                  <li>• Integration support for scheduling and EHRs</li>
                  <li>• Visibility across the US and Canada</li>
                </ul>
              </div>
              <form className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="Clinic name" className="h-11 px-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none" />
                <input required placeholder="City / Province or State" className="h-11 px-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none" />
                <input type="email" required placeholder="Contact email" className="h-11 px-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none sm:col-span-2" />
                <button className="h-11 rounded-md bg-sky-600 text-white font-medium hover:bg-sky-700 transition sm:col-span-2">Request listing details</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
