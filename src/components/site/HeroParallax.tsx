import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Star,
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  UserCheck,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CLINIC, DOCTORS } from "@/lib/site-data";
import drGopiImg from "@/assets/dr-gopi-krishna.png";

export function HeroParallax() {
  const drGopi = DOCTORS[0];

  return (
    <section className="relative overflow-hidden bg-pearl text-slate-900 pt-10 pb-20 md:py-24 bg-mesh-glow-light">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-100 h-100 bg-amber-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Clinic Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200/80 px-4 py-1.5 text-xs font-bold text-teal-800 shadow-xs">
              <Award className="h-4 w-4 text-amber-600 animate-bounce" />
              <span>Award-Winning Doctor in Twin Cities</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tight">
              Venkateswara <br />
              <span className="italic text-teal-brand font-serif font-normal">
                Multi Speciality
              </span>{" "}
              Dental Clinic
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Hyderabad’s premier dental care practice led by{" "}
              <strong className="text-slate-900 font-bold">{drGopi.name}</strong> ({drGopi.title}).
              Specializing in Painless Root Canal Treatments (RCT), Ceramic Crowns, Dental Implants,
              and 29+ advanced surgical procedures in Balanagar.
            </p>

            {/* Quick Badge Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-card-interactive rounded-2xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                  <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 leading-none font-serif">
                    97% (653)
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">
                    Practo Satisfaction
                  </div>
                </div>
              </div>

              <div className="glass-card-interactive rounded-2xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 leading-none font-serif">
                    26+ Years
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">
                    Overall Experience
                  </div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 glass-card-interactive rounded-2xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <UserCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 leading-none font-serif">
                    ₹300
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">
                    Consultation Fee
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-teal-brand px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-slate-900 transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Link>

              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 hover:border-teal-brand transition-all shadow-xs"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                <span>Call {CLINIC.phone}</span>
              </a>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 font-medium">
              <MapPin className="h-4 w-4 text-teal-brand shrink-0" />
              <span>Hno 36, Balanagar Main Rd, Opp. Hotel Samrat Lane, Ferozguda, Hyderabad</span>
            </div>
          </motion.div>

          {/* Right Column: Doctor Spotlight Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md glass-card rounded-3xl p-6 shadow-xl border border-slate-200/80 overflow-hidden"
            >
              {/* Doctor Avatar Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/4.5 border-2 border-slate-100 bg-slate-100 shadow-md">
                <img
                  src={drGopiImg}
                  alt={drGopi.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold text-amber-700 flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-700" />
                  Verified Practo Specialist
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold">{drGopi.name}</h3>
                  <p className="text-xs text-teal-300 font-medium mt-0.5">{drGopi.title}</p>
                </div>
              </div>

              {/* Quick Details Below Doctor Photo */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-700 border-b border-slate-100 pb-2 font-medium">
                  <span className="text-slate-500">Experience</span>
                  <span className="font-bold text-slate-900">{drGopi.experience}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-700 border-b border-slate-100 pb-2 font-medium">
                  <span className="text-slate-500">Specialty</span>
                  <span className="font-bold text-amber-700">Prosthodontist & Implants</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-700 font-medium">
                  <span className="text-slate-500">Patient Stories</span>
                  <span className="font-bold text-emerald-700">653 Verified Feedback</span>
                </div>
              </div>

              {/* Key Bullet Highlights */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                {drGopi.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-600 font-medium"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-brand shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
