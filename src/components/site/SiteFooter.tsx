import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin, Mail, Star, Award, ShieldCheck } from "lucide-react";
import { CLINIC, ALL_SURGERIES_TREATMENTS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-teal-brand text-white font-serif font-bold text-xl flex items-center justify-center">
              V
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white leading-none">
                Venkateswara
              </h3>
              <p className="text-[10px] text-teal-brand font-semibold uppercase tracking-wider mt-0.5">
                Multi Speciality Dental Clinic
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-normal">
            Centrally located at Balanagar in Hyderabad. Led by Dr. Gopi Krishna (BDS, MDS - Prosthodontist & Crown Bridge Specialist, 26+ Yrs Exp).
          </p>

          <div className="flex items-center gap-2 text-xs bg-white/5 p-3 rounded-xl border border-white/10">
            <Star className="h-4 w-4 fill-amber-gold text-amber-gold" />
            <span className="font-bold text-white">{CLINIC.practoRating} Rating</span>
            <span className="text-slate-400">({CLINIC.practoVotes} Votes & 624 Reviews)</span>
          </div>
        </div>

        {/* Popular Treatments */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-amber-gold mb-4">
            Popular Treatments
          </p>
          <ul className="space-y-2.5 text-xs">
            {ALL_SURGERIES_TREATMENTS.slice(0, 7).map((s) => (
              <li key={s.name}>
                <Link
                  to="/services"
                  className="hover:text-teal-brand transition-colors text-slate-300"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-amber-gold mb-4">
            Quick Navigation
          </p>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link to="/" className="hover:text-teal-brand transition-colors text-slate-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/doctor" className="hover:text-teal-brand transition-colors text-slate-300">
                Dr. Gopi Krishna (BDS, MDS)
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-teal-brand transition-colors text-slate-300">
                29 Surgeries & Treatments
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-teal-brand transition-colors text-slate-300">
                653+ Verified Patient Stories
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-teal-brand transition-colors text-slate-300">
                Clinic Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-brand transition-colors text-slate-300">
                About Clinic
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-brand transition-colors text-slate-300">
                Book Visit (₹300)
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-gold mb-2">
            Clinic Contact
          </p>
          <div className="space-y-3 text-xs">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center gap-2.5 text-amber-gold hover:text-white font-bold transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>{CLINIC.phone}</span>
            </a>

            <div className="flex items-start gap-2.5 text-slate-300 leading-relaxed">
              <MapPin className="h-4 w-4 text-teal-brand shrink-0 mt-0.5" />
              <span>{CLINIC.address}</span>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-white">Consultation Fee: ₹300</p>
              <p>Sat & Weekdays: 09:30 AM–01:30 PM, 05:00 PM–08:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Venkateswara Multi Speciality Dental Clinic. All rights reserved.</p>
          <p>Hno 36, Balanagar Main Rd, Ferozguda, Hyderabad, Telangana 500042</p>
        </div>
      </div>
    </footer>
  );
}
