import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  GALLERY_IMAGES,
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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Endodontics",
    "Prosthodontics",
    "Oral Surgery",
    "Orthodontics",
    "Laser Care",
    "Cosmetic Dentistry",
    "Specialty Practice",
    "Diagnostics",
  ];

  const filteredServices = ALL_SURGERIES_TREATMENTS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* High Impact Hero */}
      <HeroParallax />

      {/* Stats Strip */}
      <section className="relative z-20 -mt-8 mx-auto max-w-6xl px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: 26, label: "Years Experience", suffix: "+ Yrs", sub: "Overall Clinical Care" },
            { value: 97, label: "Practo Rating", suffix: "%", sub: "Based on 653 Votes" },
            { value: 624, label: "Google Reviews", suffix: "+", sub: "4.6★ Verified Rating" },
            { value: 29, label: "Surgeries & Treatments", suffix: "+", sub: "Full Spectrum Dental" },
          ].map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-brand">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">{stat.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Doctor Spotlight: Dr. Gopi Krishna & Dr. Vinay */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="eyebrow">Medical Leadership & Excellence</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark">
              Meet Our Award-Winning <span className="italic text-teal-brand">Dental Specialists</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dedicated to compassionate, non-commercial, and high-precision dental care in Balanagar, Hyderabad.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Doctor: Dr. Gopi Krishna */}
            <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-navy-dark text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-brand/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative">
                  <img
                    src={DOCTORS[0].img}
                    alt={DOCTORS[0].name}
                    className="w-full aspect-[4/5] object-cover object-top rounded-2xl border-2 border-white/20 shadow-lg"
                  />
                  <div className="absolute top-2 left-2 bg-amber-gold text-navy-dark text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Award Winner
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-gold font-semibold bg-white/10 px-3 py-1 rounded-full">
                    <Award className="h-3.5 w-3.5" />
                    <span>26 Years Experience Overall</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">{DOCTORS[0].name}</h3>
                  <p className="text-xs text-teal-brand font-semibold">{DOCTORS[0].title}</p>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                    {DOCTORS[0].bio}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <span className="block font-bold text-amber-gold">97% Rating</span>
                      <span className="text-[10px] text-slate-300">653 Practo Votes</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <span className="block font-bold text-emerald-400">₹300 Fee</span>
                      <span className="text-[10px] text-slate-300">Consultation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-teal-brand" />
                  <span>Prosthodontics · Crown & Bridge · Rotary RCT · Implants</span>
                </div>
                <Link
                  to="/doctor"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-gold hover:text-white transition-colors"
                >
                  Full Doctor Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Secondary Doctor: Dr. Vinay */}
            <div className="lg:col-span-5 bg-ice-bg border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={DOCTORS[1].img}
                    alt={DOCTORS[1].name}
                    className="w-20 h-24 object-cover rounded-xl border border-slate-300 shadow-sm shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-brand bg-teal-brand/10 px-2.5 py-0.5 rounded-full">
                      Practicing Specialist
                    </span>
                    <h3 className="font-serif text-xl font-bold text-navy-dark mt-1">
                      {DOCTORS[1].name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">{DOCTORS[1].title}</p>
                    <p className="text-xs text-amber-gold font-bold mt-1">
                      ★ Highly Praise by Patients
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal bg-white p-4 rounded-xl border border-slate-100 italic">
                  "{DOCTORS[1].bio}"
                </p>

                <div className="space-y-2 text-xs text-navy-dark pt-1">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-dark px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-teal-brand transition-colors w-full"
                >
                  <Calendar className="h-3.5 w-3.5 text-amber-gold" />
                  <span>Book Appointment with Doctors</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 29 Surgeries & Treatments Interactive Explorer Section */}
      <section className="py-20 md:py-28 bg-ice-bg border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <p className="eyebrow">Comprehensive Dental Care</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark">
                29 Surgeries & <span className="italic text-teal-brand">Advanced Treatments</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From single-visit painless root canal treatments to full ceramic bridges, dental implants, laser care, and diagnostic imaging.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search 29 treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-navy-dark placeholder-slate-400 focus:outline-none focus:border-teal-brand shadow-sm"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-teal-brand text-white shadow-md scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Treatment Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((treatment, idx) => (
              <Reveal key={treatment.name} delay={idx * 0.04}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-brand bg-teal-brand/10 px-2.5 py-1 rounded-full">
                        {treatment.category}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {treatment.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-navy-dark group-hover:text-teal-brand transition-colors">
                      {treatment.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">{treatment.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-dark">Fee: ₹300 Visit</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-brand hover:text-navy-dark transition-colors"
                    >
                      Book Care <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-dark px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-teal-brand transition-colors shadow-md"
            >
              <span>Explore All 29 Surgeries & Services</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Patient Stories Section (Featuring All 10 Practo Stories & Replies) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="eyebrow">Verified Patient Experiences</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-dark">
              Patient Stories for <span className="italic text-teal-brand">Venkateswara Clinic</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real opinions & feedback from verified patients across twin cities regarding Dr. Gopi Krishna & Dr. Vinay.
            </p>
          </div>

          {/* Testimonial Cards Carousel / Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PATIENT_STORIES.slice(0, 6).map((story) => (
              <div
                key={story.id}
                className="bg-ice-bg rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-gold text-amber-gold" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Patient
                    </span>
                  </div>

                  <p className="text-xs font-bold text-teal-brand uppercase tracking-wide">
                    {story.treatment}
                  </p>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{story.text.length > 220 ? story.text.slice(0, 220) + "..." : story.text}"
                  </p>

                  {story.happyWith && story.happyWith.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {story.happyWith.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy-dark">{story.author}</span>
                    <span className="text-slate-400 text-[10px]">{story.timeAgo}</span>
                  </div>

                  {story.doctorReply && (
                    <div className="bg-white rounded-xl p-2.5 border border-teal-brand/30 text-[11px] text-slate-700">
                      <span className="font-bold text-teal-brand block text-[10px]">
                        Dr. Gopi Krishna replied:
                      </span>
                      "{story.doctorReply}"
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-dark hover:border-teal-brand hover:text-teal-brand transition-all shadow-sm"
            >
              <span>Read All 10 Verified Stories & Google Reviews</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Real Transformations Section */}
      <section className="py-20 md:py-28 bg-navy-dark text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="eyebrow text-amber-gold">Real Transformations</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Smile <span className="italic text-teal-brand">Restoration Gallery</span>
            </h2>
            <p className="text-slate-300 text-sm">
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
