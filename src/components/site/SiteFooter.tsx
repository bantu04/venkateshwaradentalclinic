import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, Mail, Star } from "lucide-react";
import { CLINIC, SERVICES } from "@/lib/site-data";

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21v-7.5h2.5l.5-3.5h-3V8c0-1 .5-1.5 1.7-1.5H16.7V3.5C16.2 3.4 15.1 3.3 14 3.3c-2.4 0-4 1.5-4 4.2v2.5H7v3.5h3V21h3.5z" />
  </svg>
);
const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory/80 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl text-ivory">
            Venkateswara <span className="italic text-gold">dental hospital</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ivory/60">
            Top-rated dental care & dental implants in Sanath Nagar, Hyderabad. Above Ratnadeep
            Super Market.
          </p>
          <div className="mt-5 flex items-center gap-1.5 text-sm">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-ivory/70">
              {CLINIC.rating} · {CLINIC.reviews}+ reviews
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="WhatsApp"
              href={`https://wa.me/91${CLINIC.phoneRaw}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold mb-5">Services</p>
          <ul className="space-y-3 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold mb-5">Hospital</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/doctor" className="hover:text-gold">
                Our Team (Demo)
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-gold">
                Patient Reviews
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gold">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold mb-5">Get in Touch</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`tel:${CLINIC.phoneRaw}`} className="flex items-start gap-3 hover:text-gold">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" /> {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="flex items-start gap-3 hover:text-gold">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" /> {CLINIC.email}
              </a>
            </li>
            <li>
              <a
                href={CLINIC.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-gold leading-relaxed"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {CLINIC.address}
              </a>
            </li>
            <li className="pt-3 flex gap-4 text-xs text-ivory/50">
              <Link to="/privacy" className="hover:text-gold">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-gold">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Venkateswara Dental Hospital. All rights reserved.</p>
          <p>Sanath Nagar, Hyderabad, Telangana 500018</p>
        </div>
      </div>
    </footer>
  );
}
