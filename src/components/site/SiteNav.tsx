import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar, MapPin, Award, Star, Sparkles } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/doctor", label: "Dr. Gopi Krishna" },
  { to: "/services", label: "29 Treatments" },
  { to: "/reviews", label: "Patient Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Clinic" },
  { to: "/contact", label: "Contact" },
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
      {/* Top Banner Bar */}
      <div className="bg-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-cyan-glow font-bold">
              <MapPin className="h-3.5 w-3.5" />
              Balanagar Main Rd, Ferozguda, Hyderabad
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-amber-gold font-bold">
              <Award className="h-3.5 w-3.5" />
              Award Winning Doctor in Twin Cities
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Star className="h-3.5 w-3.5 fill-amber-gold text-amber-gold" />
              97% Rating (653+ Stories) · ₹300 Fee
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center gap-1.5 text-cyan-glow hover:text-white font-extrabold transition-colors"
            >
              <Phone className="h-3.5 w-3.5 animate-pulse" />
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Floating Glass Header */}
      <header className="sticky top-3 z-50 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${
            scrolled
              ? "bg-slate-950/90 backdrop-blur-2xl border border-white/15 shadow-2xl py-3 px-4 sm:px-6"
              : "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-xl py-3.5 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-slate-950 flex items-center justify-center font-syne font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="font-syne text-lg font-bold tracking-tight text-white group-hover:text-cyan-glow transition-colors leading-none">
                  Venkateswara
                </span>
                <span className="text-[10px] font-extrabold tracking-widest text-cyan-glow uppercase mt-1">
                  Multi Speciality Dental Clinic
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs font-bold text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg transition-all relative"
                  activeProps={{
                    className: "bg-cyan-500/20 text-cyan-glow font-extrabold border border-cyan-500/30 shadow-sm",
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
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:border-cyan-glow hover:text-cyan-glow transition-all"
              >
                <Phone className="h-3.5 w-3.5 text-cyan-glow" />
                <span>Call Doctor</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book ₹300 Visit</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="p-2 text-cyan-glow bg-cyan-500/10 rounded-xl border border-cyan-500/30"
                aria-label="Call Clinic"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                aria-label="Toggle menu"
                className="p-2 text-white hover:text-cyan-glow focus:outline-none"
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
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl animate-fade-in lg:hidden flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-syne font-bold text-lg">
                  V
                </div>
                <div>
                  <p className="font-syne text-lg font-bold text-white">Venkateswara Clinic</p>
                  <p className="text-[10px] text-cyan-glow uppercase tracking-wider font-extrabold">
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
                  className="font-syne text-2xl font-bold text-slate-300 hover:text-amber-gold transition-colors py-2 border-b border-white/5"
                  activeProps={{ className: "text-amber-gold font-extrabold" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-amber-gold">Dr. Gopi Krishna (Prosthodontist)</p>
              <p>26+ Yrs Exp · 97% Rating (653 Votes)</p>
              <p className="text-slate-400">Balanagar Main Rd, Ferozguda, Hyderabad</p>
            </div>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-gold px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 w-full shadow-lg"
            >
              <Phone className="h-4 w-4" /> Call Clinic: {CLINIC.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-glow px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 w-full shadow-lg"
            >
              <Calendar className="h-4 w-4" /> Book Appointment (₹300)
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
