import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Heart,
  IndianRupee,
  Award,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  Phone,
  Calendar,
  Sparkles,
  Search,
  MessageSquareQuote,
  MapPin,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { HeroParallax } from "@/components/site/HeroParallax";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { MapContact } from "@/components/site/MapContact";
import {
  CLINIC,
  DOCTORS,
  ALL_SURGERIES_TREATMENTS,
  PATIENT_STORIES,
  BEFORE_AFTER,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Venkateswara Multi Speciality Dental Clinic — Dr. Gopi Krishna (BDS, MDS) | Balanagar, Hyderabad",
      },
      {
        name: "description",
        content:
          "Venkateswara Multi Speciality Dental Clinic in Balanagar Main Rd, Ferozguda, Hyderabad. Led by Dr. Gopi Krishna (26+ Yrs Exp, 97% Rating, 653+ Patient Stories). Root canals, dental implants, ceramic crowns, dentures & 29+ surgeries.",
      },
      {
        property: "og:title",
        content: "Venkateswara Multi Speciality Dental Clinic — Balanagar, Hyderabad",
      },
      {
        property: "og:description",
        content:
          "Hyderabad's leading prosthodontic & multi-speciality dental clinic. 26+ years experience, 97% satisfaction across 653+ patient stories.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Show top 6 featured services on homepage
  const featuredServices = ALL_SURGERIES_TREATMENTS.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <HeroParallax />

      {/* Stats Strip */}
      <section className="relative z-20 -mt-8 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-2xl"
        >
          {[
            { value: 26, label: "Years Experience", suffix: "+ Yrs", sub: "Overall Clinical Care" },
            { value: 97, label: "Practo Rating", suffix: "%", sub: "Based on 653 Votes" },
            { value: 624, label: "Google Reviews", suffix: "+", sub: "4.6★ Verified Rating" },
            { value: 29, label: "Surgeries & Treatments", suffix: "+", sub: "Full Spectrum Dental" },
          ].map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08} className="space-y-1">
              <div className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-glow">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">{stat.sub}</div>
            </Reveal>
          ))}
        </motion.div>
      </section>

      {/* Doctor Spotlight: Dr. Gopi Krishna & Dr. Vinay */}
      <section className="py-20 md:py-28 bg-navy-dark relative overflow-hidden bg-mesh-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="eyebrow">Medical Leadership & Excellence</p>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Meet Our Award-Winning <span className="text-cyan-glow">Dental Specialists</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Dedicated to compassionate, non-commercial, and high-precision dental care in Balanagar, Hyderabad.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Doctor: Dr. Gopi Krishna */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-linear-to-br from-slate-900 via-navy-card to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-glow/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative">
                  <img
                    src={DOCTORS[0].img}
                    alt={DOCTORS[0].name}
                    className="w-full aspect-4/5 object-cover object-top rounded-2xl border-2 border-white/20 shadow-xl"
                  />
                  <div className="absolute top-2 left-2 bg-amber-gold text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Award Winner
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-gold font-bold bg-white/10 px-3 py-1 rounded-full border border-amber-gold/30">
                    <Award className="h-3.5 w-3.5" />
                    <span>26 Years Experience Overall</span>
                  </div>
                  <h3 className="font-syne text-2xl sm:text-3xl font-extrabold">{DOCTORS[0].name}</h3>
                  <p className="text-xs text-cyan-glow font-bold">{DOCTORS[0].title}</p>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                    {DOCTORS[0].bio}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <span className="block font-black text-amber-gold font-syne">97% Rating</span>
                      <span className="text-[10px] text-slate-300 font-medium">653 Practo Votes</span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <span className="block font-black text-emerald-400 font-syne">₹300 Fee</span>
                      <span className="text-[10px] text-slate-300 font-medium">Consultation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <ShieldCheck className="h-4 w-4 text-cyan-glow shrink-0" />
                  <span>Prosthodontics · Crown & Bridge · Rotary RCT · Implants</span>
                </div>
                <Link
                  to="/doctor"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-gold hover:text-white transition-colors"
                >
                  Full Doctor Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Secondary Doctor: Dr. Vinay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={DOCTORS[1].img}
                    alt={DOCTORS[1].name}
                    className="w-20 h-24 object-cover rounded-xl border border-white/20 shadow-sm shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-glow bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      Practicing Specialist
                    </span>
                    <h3 className="font-syne text-xl font-bold text-white mt-1.5">
                      {DOCTORS[1].name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{DOCTORS[1].title}</p>
                    <p className="text-xs text-amber-gold font-bold mt-1">
                      ★ Highly Praised by Patients
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal bg-white/5 p-4 rounded-2xl border border-white/10 italic">
                  "{DOCTORS[1].bio}"
                </p>

                <div className="space-y-2 text-xs text-slate-200 pt-1">
                  {DOCTORS[1].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-glow shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-glow px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-white transition-colors w-full shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment with Doctors</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section (Showing 6 key services with View All button) */}
      <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <p className="eyebrow">Key Clinical Services</p>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Featured <span className="text-cyan-glow">Treatments & Surgeries</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Painless single-sitting root canal treatments, ceramic crowns, implants, dentures, and aesthetic dentistry.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-gold hover:text-cyan-glow transition-colors bg-white/5 border border-white/10 px-5 py-3 rounded-xl w-fit shrink-0"
            >
              <span>Explore All 29 Surgeries</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured 6 Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((treatment, idx) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="glass-card-interactive rounded-3xl p-6 flex flex-col justify-between h-full group border border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-glow bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                        {treatment.category}
                      </span>
                      <span className="text-[10px] font-bold text-amber-gold bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                        {treatment.badge}
                      </span>
                    </div>

                    <h3 className="font-syne text-xl font-bold text-white group-hover:text-cyan-glow transition-colors">
                      {treatment.name}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {treatment.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">₹300 Fee Visit</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-cyan-glow hover:text-white transition-colors"
                    >
                      Book Visit <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Prominent View All 29 Services Banner */}
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-500 px-9 py-4 text-xs font-black uppercase tracking-wider text-slate-950 shadow-2xl hover:scale-105 transition-all"
            >
              <span>Browse All 29 Surgeries & Treatments</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Patient Stories Carousel Section */}
      <section className="py-20 md:py-28 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="eyebrow">Verified Patient Experiences</p>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Patient Stories for <span className="text-cyan-glow">Venkateswara Clinic</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Real opinions & feedback from verified patients across twin cities regarding Dr. Gopi Krishna & Dr. Vinay.
            </p>
          </div>

          <ReviewsCarousel />

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white hover:border-cyan-glow hover:text-cyan-glow transition-all"
            >
              <span>Read All 10 Verified Stories & Google Reviews</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Transformations Section */}
      <section className="py-20 md:py-28 bg-slate-950 text-white border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="eyebrow text-amber-gold">Real Transformations</p>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Smile <span className="text-cyan-glow">Restoration Gallery</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Compare before & after results of root canal treatments, ceramic crowns, dentures, and whitening.
            </p>
          </div>

          <RevealStagger className="grid md:grid-cols-2 gap-8">
            {BEFORE_AFTER.map((item, idx) => (
              <RevealItem key={idx} variants={revealItemVariants}>
                <BeforeAfter {...item} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Location, Hours & Map Section */}
      <MapContact />
    </>
  );
}
