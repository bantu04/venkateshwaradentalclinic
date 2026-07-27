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
          className="glass-card rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xl border border-slate-200/80"
        >
          {[
            { value: 26, label: "Years Experience", suffix: "+ Yrs", sub: "Overall Clinical Care" },
            { value: 97, label: "Practo Rating", suffix: "%", sub: "Based on 653 Votes" },
            { value: 624, label: "Google Reviews", suffix: "+", sub: "4.6★ Verified Rating" },
            {
              value: 29,
              label: "Surgeries & Treatments",
              suffix: "+",
              sub: "Full Spectrum Dental",
            },
          ].map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-brand">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">{stat.sub}</div>
            </Reveal>
          ))}
        </motion.div>
      </section>

      {/* Doctor Spotlight: Dr. Gopi Krishna & Dr. Vinay */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="eyebrow">Medical Leadership & Excellence</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Meet Our Award-Winning{" "}
              <span className="italic text-teal-brand font-normal">Dental Specialists</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Dedicated to compassionate, non-commercial, and high-precision dental care in
              Balanagar, Hyderabad.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Doctor: Dr. Gopi Krishna */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative">
                  <img
                    src={DOCTORS[0].img}
                    alt={DOCTORS[0].name}
                    className="w-full aspect-4/5 object-cover object-top rounded-2xl border-2 border-white/20 shadow-xl"
                  />
                  <div className="absolute top-2 left-2 bg-amber-500 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Award Winner
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold bg-white/10 px-3 py-1 rounded-full border border-amber-400/30">
                    <Award className="h-3.5 w-3.5" />
                    <span>26 Years Experience Overall</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">{DOCTORS[0].name}</h3>
                  <p className="text-xs text-teal-300 font-medium">{DOCTORS[0].title}</p>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                    {DOCTORS[0].bio}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <span className="block font-bold text-amber-400 font-serif">97% Rating</span>
                      <span className="text-[10px] text-slate-300 font-medium">
                        653 Practo Votes
                      </span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <span className="block font-bold text-emerald-400 font-serif">₹300 Fee</span>
                      <span className="text-[10px] text-slate-300 font-medium">Consultation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>Prosthodontics · Crown & Bridge · Rotary RCT · Implants</span>
                </div>
                <Link
                  to="/doctor"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-colors"
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
              className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-slate-200/80"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={DOCTORS[1].img}
                    alt={DOCTORS[1].name}
                    className="w-20 h-24 object-cover rounded-xl border border-slate-200 shadow-xs shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                      Practicing Specialist
                    </span>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mt-1.5">
                      {DOCTORS[1].name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{DOCTORS[1].title}</p>
                    <p className="text-xs text-amber-600 font-bold mt-1">
                      ★ Highly Praised by Patients
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal bg-slate-50 p-4 rounded-2xl border border-slate-200/60 italic">
                  "{DOCTORS[1].bio}"
                </p>

                <div className="space-y-2 text-xs text-slate-700 pt-1">
                  {DOCTORS[1].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-teal-brand shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-brand px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-900 transition-colors w-full shadow-md"
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
      <section className="py-20 md:py-28 bg-pearl border-y border-slate-200/80 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <p className="eyebrow">Key Clinical Services</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                Featured{" "}
                <span className="italic text-teal-brand font-normal">Treatments & Surgeries</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                Painless single-sitting root canal treatments, ceramic crowns, implants, dentures,
                and aesthetic dentistry.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-brand hover:text-slate-900 transition-colors bg-white border border-slate-200 px-5 py-3 rounded-xl w-fit shrink-0 shadow-xs"
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
                <div className="glass-card-interactive rounded-3xl p-6 flex flex-col justify-between h-full group border border-slate-200/80">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                        {treatment.category}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                        {treatment.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-teal-brand transition-colors">
                      {treatment.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {treatment.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700">₹300 Fee Visit</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-brand hover:text-slate-900 transition-colors"
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
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-teal-brand px-9 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-slate-900 transition-all hover:scale-105"
            >
              <span>Browse All 29 Surgeries & Treatments</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Patient Stories Carousel Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="eyebrow">Verified Patient Experiences</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Patient Stories for{" "}
              <span className="italic text-teal-brand font-normal">Venkateswara Clinic</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Real opinions & feedback from verified patients across twin cities regarding Dr. Gopi
              Krishna & Dr. Vinay.
            </p>
          </div>

          <ReviewsCarousel />

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:border-teal-brand hover:text-teal-brand transition-all shadow-xs"
            >
              <span>Read All 10 Verified Stories & Google Reviews</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Transformations Section */}
      <section className="py-20 md:py-28 bg-pearl text-slate-900 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="eyebrow text-amber-700">Real Transformations</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Smile <span className="italic text-teal-brand font-normal">Restoration Gallery</span>
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Compare before & after results of root canal treatments, ceramic crowns, dentures, and
              whitening.
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
