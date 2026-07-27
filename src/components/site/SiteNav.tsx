import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar, MapPin, Award, Star } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/doctor", label: "Dr. Gopi Krishna" },
  { to: "/services", label: "29 Treatments" },
  { to: "/reviews", label: "Patient Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Clinic" },
  { to: "/contact", label: "Contact & Location" },
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
      <div className="bg-navy-dark text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-brand font-medium">
              <MapPin className="h-3.5 w-3.5" />
              Ferozguda, Balanagar Main Rd, Hyderabad
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5 text-amber-gold font-medium">
              <Award className="h-3.5 w-3.5" />
              Award Winning Doctor in Twin Cities
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Star className="h-3.5 w-3.5 fill-amber-gold text-amber-gold" />
              97% Rating (653+ Patient Stories) · ₹300 Consultation Fee
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center gap-1.5 text-amber-gold hover:text-white font-semibold transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm text-navy-dark"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 text-navy-dark"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-teal-brand/10 border border-teal-brand/20 flex items-center justify-center text-teal-brand group-hover:scale-105 transition-transform">
              <span className="font-serif text-xl font-bold">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-navy-dark group-hover:text-teal-brand transition-colors leading-none">
                Venkateswara
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-teal-brand uppercase mt-0.5">
                Multi Speciality Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-teal-brand transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-brand after:transition-all hover:after:w-full"
                activeProps={{
                  className: "text-teal-brand font-bold after:!w-full",
                }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-navy-dark hover:border-teal-brand hover:text-teal-brand transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-teal-brand" />
              <span>Call Doctor</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-xl bg-teal-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-teal-dark transition-all hover:shadow-lg active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book ₹300 Visit</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="p-2 text-teal-brand bg-teal-brand/10 rounded-lg"
              aria-label="Call Clinic"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              aria-label="Toggle menu"
              className="p-2 text-navy-dark hover:text-teal-brand focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-xl animate-fade-in lg:hidden flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-teal-brand text-white flex items-center justify-center font-serif font-bold text-lg">
                  V
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-white">Venkateswara Clinic</p>
                  <p className="text-[10px] text-teal-brand uppercase tracking-wider">
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

            <nav className="flex flex-col gap-4 mt-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-slate-200 hover:text-amber-gold transition-colors py-1 border-b border-white/5"
                  activeProps={{ className: "text-amber-gold font-bold" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-amber-gold">Dr. Gopi Krishna (Prosthodontist)</p>
              <p>26+ Yrs Exp · 97% Rating (653 Votes)</p>
              <p className="text-slate-400">Balanagar Main Rd, Ferozguda, Hyderabad</p>
            </div>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-gold px-6 py-3.5 text-sm font-bold text-navy-dark w-full shadow-lg"
            >
              <Phone className="h-4 w-4" /> Call Clinic: {CLINIC.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-brand px-6 py-3.5 text-sm font-bold text-white w-full shadow-lg"
            >
              <Calendar className="h-4 w-4" /> Book Appointment (₹300)
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
