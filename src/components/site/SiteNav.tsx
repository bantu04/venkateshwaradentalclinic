import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/doctor", label: "Doctors (Demo)" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-ivory/95 border-b border-blush/40 py-3 shadow-md text-charcoal"
            : "backdrop-blur-md bg-charcoal/50 border-b border-ivory/10 py-4 text-ivory"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <Link to="/" className="group flex items-baseline gap-2">
            <span
              className={`font-serif text-2xl tracking-tight ${scrolled ? "text-charcoal" : "text-ivory"}`}
            >
              Venkateswara
            </span>
            <span
              className={`font-serif italic text-lg ${scrolled ? "text-sage-dark" : "text-gold"}`}
            >
              dental hospital
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[13px] tracking-wide transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:transition-all hover:after:w-full ${
                  scrolled
                    ? "text-charcoal/80 hover:text-sage-dark after:bg-sage-dark"
                    : "text-ivory/90 hover:text-gold after:bg-gold"
                }`}
                activeProps={{
                  className: `${scrolled ? "text-sage-dark" : "text-gold"} after:!w-full`,
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className={`flex items-center gap-2 text-sm ${
                scrolled ? "text-charcoal/70 hover:text-sage-dark" : "text-ivory/80 hover:text-gold"
              }`}
            >
              <Phone className="h-4 w-4" />
              {CLINIC.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-sm bg-sage-dark px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-ivory hover:bg-charcoal transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className={scrolled ? "lg:hidden text-charcoal" : "lg:hidden text-ivory"}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-60 bg-ivory animate-fade-in lg:hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-blush/40">
            <span className="font-serif text-xl text-charcoal">
              Venkateswara <span className="italic text-sage-dark">dental hospital</span>
            </span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="text-charcoal">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col px-8 py-12 gap-6">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-charcoal hover:text-sage-dark"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="mt-6 flex items-center gap-3 text-charcoal/70"
            >
              <Phone className="h-5 w-5" /> {CLINIC.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block rounded-sm bg-sage-dark px-6 py-3 text-xs uppercase tracking-[0.18em] text-ivory w-fit"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
