import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar, MapPin, Award, Star } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/doctor", label: "Dr. Gopi Krishna" },
  { to: "/services", label: "Treatments" },
  { to: "/reviews", label: "Patient Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Clinic" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Bar - Centered */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-6 flex-wrap text-center">
          <span className="flex items-center gap-1.5 text-teal-400 font-medium">
            <MapPin className="h-3.5 w-3.5" />
            Balanagar Main Rd, Ferozguda, Hyderabad
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Award className="h-3.5 w-3.5" />
            Award Winning Doctor in Twin Cities
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            97% Rating (653+ Patient Stories)
          </span>
          <span className="text-white/20">•</span>
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            className="flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors"
          >
            <Phone className="h-3.5 w-3.5 animate-pulse" />
            {CLINIC.phone}
          </a>
        </div>
      </div>

      {/* Floating Light Glass Header */}
      <header className="sticky top-3 z-50 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${
            scrolled
              ? "bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-lg shadow-slate-900/5 py-3 px-4 sm:px-6"
              : "bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md shadow-slate-900/5 py-3.5 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-teal-brand text-white flex items-center justify-center font-serif font-bold text-2xl shadow-md group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-brand transition-colors leading-none">
                  Venkateswara
                </span>
                <span className="text-[10px] font-bold tracking-wider text-teal-brand uppercase mt-0.5">
                  Multi Speciality Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs font-semibold text-slate-700 hover:text-teal-brand px-3.5 py-1.5 rounded-lg transition-all relative"
                  activeProps={{
                    className:
                      "bg-white text-teal-brand font-bold shadow-sm border border-slate-200/80",
                  }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Action CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:border-teal-brand hover:text-teal-brand transition-all shadow-xs"
              >
                <Phone className="h-3.5 w-3.5 text-teal-brand" />
                <span>Call Doctor</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl bg-teal-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-slate-900 transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Visit</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="p-2 text-teal-brand bg-teal-50 rounded-xl border border-teal-200"
                aria-label="Call Clinic"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                aria-label="Toggle menu"
                className="p-2 text-slate-800 hover:text-teal-brand focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-2xl animate-fade-in lg:hidden flex flex-col justify-between p-6 text-white">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-teal-brand text-white flex items-center justify-center font-serif font-bold text-xl">
                  V
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-white">Venkateswara Clinic</p>
                  <p className="text-[10px] text-teal-400 uppercase tracking-wider font-bold">
                    Dr. Gopi Krishna (BDS, MDS)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 mt-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl font-bold text-slate-200 hover:text-amber-400 transition-colors py-2 border-b border-white/5"
                  activeProps={{ className: "text-amber-400 font-bold" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-amber-400">Dr. Gopi Krishna (Prosthodontist)</p>
              <p>26+ Yrs Exp · 97% Rating (653 Votes)</p>
              <p className="text-slate-400">Balanagar Main Rd, Ferozguda, Hyderabad</p>
            </div>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 w-full shadow-lg"
            >
              <Phone className="h-4 w-4" /> Call Clinic: {CLINIC.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-brand px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white w-full shadow-lg"
            >
              <Calendar className="h-4 w-4" /> Book Visit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
