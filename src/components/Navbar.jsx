import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-sky-600 flex items-center justify-center text-white font-bold shadow-md">UC</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">UrgentCare Now</div>
            <div className="text-[11px] text-slate-500 -mt-0.5">US • Canada</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#categories" className="hover:text-slate-900 transition">Care types</a>
          <a href="#coverage" className="hover:text-slate-900 transition">Coverage</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#get-listed" className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-md border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition">Get listed</a>
          <button className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
