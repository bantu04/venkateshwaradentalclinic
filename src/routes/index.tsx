import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Star, Clock, Heart, IndianRupee, Award, ArrowUpRight } from "lucide-react";
import { HeroParallax } from "@/components/site/HeroParallax";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ServiceCard } from "@/components/site/ServiceCard";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { MapContact } from "@/components/site/MapContact";
import { SERVICES, BEFORE_AFTER, GALLERY, CLINIC, DEMO_TEAM } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Venkateswara Dental Hospital — Best Dentist & Dental Implants in Sanath Nagar, Hyderabad",
      },
      {
        name: "description",
        content:
          "Venkateswara Dental Hospital in Sanath Nagar, Hyderabad. 5.0★ Google rated (407 reviews). Root canals, dental implants, teeth whitening, dentures, laser & pediatric dentistry.",
      },
      { property: "og:title", content: "Venkateswara Dental Hospital — Sanath Nagar, Hyderabad" },
      {
        property: "og:description",
        content:
          "Top-rated dental clinic & hospital in Sanath Nagar. 5.0★ Google rated across 407+ reviews.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroParallax />

      {/* Stats strip */}
      <section className="border-y border-blush/40 bg-cream/40">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
            { value: 407, label: "Verified Reviews", suffix: "+" },
            { value: 1000, label: "Happy Patients", suffix: "+" },
            { value: 100, label: "Budget Friendly", suffix: "%" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-charcoal">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-taupe">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
              alt="Venkateswara Dental Hospital Sanath Nagar"
              className="rounded-sm w-full aspect-4/5 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80"
              alt="Dental treatment room"
              className="hidden md:block absolute -bottom-12 -right-8 w-64 aspect-square object-cover rounded-sm border-8 border-ivory shadow-xl"
            />
            <div className="absolute -top-6 -left-6 bg-ivory border border-blush/60 rounded-sm px-5 py-4 shadow-sm">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-xs text-charcoal font-medium">
                5.0★ Google Rated (407 Reviews)
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-5">About the Hospital</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Best dentist in Sanath Nagar with a{" "}
                <span className="italic text-sage-dark">cool ambience</span> & friendly staff.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-taupe leading-relaxed">
                Venkateswara Dental Hospital is conveniently located at SVSS Nivas Complex, Road No.
                1, Czech Colony, Sanath Nagar, Hyderabad (above Ratnadeep Super Market, opposite
                Gokul Theatre Lane). We offer budget friendly root canal treatments, dental
                implants, teeth whitening, oral surgery, and comprehensive family dental care.
              </p>
            </Reveal>

            <RevealStagger className="mt-10 grid grid-cols-2 gap-5">
              {[
                {
                  icon: Heart,
                  t: "Budget Friendly",
                  d: "High-grade dental treatments priced transparently.",
                },
                {
                  icon: Clock,
                  t: "Open 10 AM – 9 PM",
                  d: "Open daily for busy professionals & families.",
                },
                {
                  icon: Award,
                  t: "Painless Root Canals",
                  d: "Highly rated endodontic treatment & care.",
                },
                {
                  icon: IndianRupee,
                  t: "Sanath Nagar Location",
                  d: "Above Ratnadeep Super Market, Czech Colony.",
                },
              ].map(({ icon: Icon, t, d }) => (
                <RevealItem key={t} variants={revealItemVariants} className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-sm bg-sage-dark/10 grid place-items-center text-sage-dark">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{t}</p>
                    <p className="mt-1 text-xs text-taupe leading-relaxed">{d}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-cream/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <p className="eyebrow mb-4">Our Services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Comprehensive care for your{" "}
                <span className="italic text-sage-dark">complete smile</span>.
              </h2>
            </Reveal>
          </div>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.slice(0, 6).map((s) => (
              <RevealItem key={s.slug} variants={revealItemVariants}>
                <ServiceCard {...s} />
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-sage-dark hover:text-charcoal font-medium"
            >
              View all treatments & services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="eyebrow mb-4">Real Transformations</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl">
                Smiles, <span className="italic text-sage-dark">restored</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-taupe">
                Drag the slider to compare results from cosmetic & restorative dental treatments.
              </p>
            </Reveal>
          </div>
          <RevealStagger className="grid md:grid-cols-2 gap-8">
            {BEFORE_AFTER.map((b, i) => (
              <RevealItem key={i} variants={revealItemVariants}>
                <BeforeAfter {...b} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Doctor / Team */}
      <section className="py-24 md:py-32 bg-cream/30">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow mb-5">Meet Our Team (Demo Team)</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Specialist Dental Doctors
            </h2>
            <p className="mt-2 text-sage-dark italic font-serif text-xl">
              Venkateswara Dental Hospital
            </p>
            <p className="mt-6 text-taupe leading-relaxed">
              Our dental surgeons and specialists bring years of clinical experience in dental
              implants, root canal treatments, laser dentistry, and paediatric care. We take pride
              in delivering budget friendly, painless dentistry with exceptional hygiene standards
              in Sanath Nagar.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Dental Implants",
                "Root Canals",
                "Laser Dentistry",
                "Pediatric Care",
                "Sanath Nagar",
              ].map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1.5 rounded-full border border-blush bg-ivory text-charcoal/80 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
            <Link
              to="/doctor"
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-sage-dark hover:text-charcoal font-medium"
            >
              Meet all doctor profiles (Demo) <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {DEMO_TEAM.slice(0, 2).map((doc) => (
                <div
                  key={doc.name}
                  className="bg-ivory border border-blush/40 rounded-sm p-4 text-center"
                >
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full aspect-square object-cover rounded-sm mb-3"
                  />
                  <span className="text-[10px] font-semibold text-sage-dark bg-sage-dark/10 px-2 py-0.5 rounded-sm">
                    Demo
                  </span>
                  <p className="font-serif text-lg text-charcoal mt-1">{doc.name}</p>
                  <p className="text-xs text-taupe">{doc.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <p className="eyebrow text-gold mb-4">Inside the Hospital</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-4xl md:text-5xl text-ivory">
                  Modern clinic designed for <span className="italic text-gold">your comfort</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-gold"
              >
                View full photo gallery <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.slice(0, 8).map((g, idx) => (
              <RevealItem
                key={idx}
                variants={revealItemVariants}
                className="overflow-hidden rounded-sm group"
              >
                <img
                  src={g.src}
                  alt={g.cat}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="eyebrow mb-4">Google Reviews Summary</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl">
                5.0★ Rating (<span className="italic text-sage-dark">407 Reviews</span>)
              </h2>
            </Reveal>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      <MapContact />
    </>
  );
}
