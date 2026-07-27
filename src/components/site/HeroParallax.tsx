import { motion } from "framer-motion";
import { Phone, Calendar, Star, Award, ShieldCheck, MapPin, CheckCircle2, UserCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CLINIC, DOCTORS } from "@/lib/site-data";

export function HeroParallax() {
  const drGopi = DOCTORS[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-dark via-navy-card to-navy-dark text-white pt-12 pb-20 md:py-24">
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-brand/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Clinic Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-amber-gold border border-amber-gold/30 shadow-inner">
              <Award className="h-4 w-4 text-amber-gold animate-bounce" />
              <span>Award-Winning Doctor in Twin Cities</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
              Venkateswara <br />
              <span className="italic text-teal-brand font-serif">Multi Speciality</span> Dental Clinic
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hyderabad’s premier dental care destination led by{" "}
              <strong className="text-white font-semibold">{drGopi.name}</strong> ({drGopi.title}).
              Specializing in Painless Root Canal Treatments (RCT), Ceramic Crowns, Dental Implants,
              and 29+ advanced surgical procedures in Balanagar.
            </p>

            {/* Quick Badge Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-teal-brand/20 flex items-center justify-center text-teal-brand shrink-0">
                  <Star className="h-5 w-5 fill-amber-gold text-amber-gold" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-none">97% (653)</div>
                  <div className="text-[11px] text-slate-400 mt-1">Practo Satisfaction</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-gold/20 flex items-center justify-center text-amber-gold shrink-0">
                  <Award className="h-5 w-5 text-amber-gold" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-none">26+ Years</div>
                  <div className="text-[11px] text-slate-400 mt-1">Overall Experience</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <UserCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-none">₹300</div>
                  <div className="text-[11px] text-slate-400 mt-1">Consultation Fee</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-teal-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-teal-dark transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment (₹300)</span>
              </Link>

              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-7 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-amber-gold transition-all"
              >
                <Phone className="h-4 w-4 text-amber-gold" />
                <span>Call {CLINIC.phone}</span>
              </a>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="h-4 w-4 text-teal-brand shrink-0" />
              <span>Hno 36, Balanagar Main Rd, Opp. Hotel Samrat Lane, Ferozguda, Hyderabad</span>
            </div>
          </div>

          {/* Right Column: Doctor Spotlight Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-md bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden"
            >
              {/* Doctor Avatar Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] border-2 border-white/20 bg-slate-800 shadow-md">
                <img
                  src={drGopi.img}
                  alt={drGopi.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-navy-dark/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-bold text-amber-gold flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-brand" />
                  Verified Practo Specialist
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold">{drGopi.name}</h3>
                  <p className="text-xs text-teal-brand font-semibold">{drGopi.title}</p>
                </div>
              </div>

              {/* Quick Details Below Doctor Photo */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-200 border-b border-white/10 pb-2">
                  <span className="text-slate-400">Experience</span>
                  <span className="font-bold text-white">{drGopi.experience}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-200 border-b border-white/10 pb-2">
                  <span className="text-slate-400">Specialty</span>
                  <span className="font-semibold text-amber-gold">Prosthodontist & Implants</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <span className="text-slate-400">Patient Stories</span>
                  <span className="font-bold text-emerald-400">653 Verified Feedback</span>
                </div>
              </div>

              {/* Key Bullet Highlights */}
              <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                {drGopi.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
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
