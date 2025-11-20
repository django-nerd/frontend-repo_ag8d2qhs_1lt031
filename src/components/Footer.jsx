export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-sky-600 text-white font-bold flex items-center justify-center">UC</div>
              <span className="font-semibold text-slate-900">UrgentCare Now</span>
            </div>
            <p className="text-slate-600">Find urgent care near you in the US and Canada. Local clinics and instant telehealth in one place.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Company</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#get-listed" className="hover:text-slate-900">List your clinic</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Support</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Help center</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Regions</div>
            <ul className="space-y-2 text-slate-600">
              <li>United States</li>
              <li>Canada</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-slate-200 text-xs text-slate-500">© {new Date().getFullYear()} urgentcare-now.com. All rights reserved.</div>
      </div>
    </footer>
  );
}
