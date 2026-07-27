import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, DEMO_TEAM } from "@/lib/site-data";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Venkateswara Dental Hospital" },
      {
        name: "description",
        content:
          "Our story, values and specialist team behind Venkateswara Dental Hospital in Sanath Nagar, Hyderabad.",
      },
      { property: "og:title", content: "About Venkateswara Dental Hospital" },
      {
        property: "og:description",
        content: "Best dental clinic and dental implants center in Sanath Nagar, Hyderabad.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    t: "Patient first",
    d: "Every plan starts with what's best for you — transparent and budget friendly.",
  },
  {
    icon: ShieldCheck,
    t: "Transparent care",
    d: "Written estimates, alternatives discussed, no hidden charges.",
  },
  {
    icon: Sparkles,
    t: "Cool ambience",
    d: "Clean, hygienic rooms and very nice staff to make every visit relaxed.",
  },
  {
    icon: Award,
    t: "Clinical rigour",
    d: "Modern sterilisation, laser dentistry, digital X-rays, and evidence-based protocols.",
  },
];

const MILESTONES = [
  {
    year: "2015",
    t: "Venkateswara Dental Hospital established at SVSS Nivas Complex, Sanath Nagar.",
  },
  {
    year: "2018",
    t: "Expansion to full-service family dentistry — pediatrics, laser dentistry, endodontics.",
  },
  { year: "2021", t: "Crossed 1,000+ happy patients cared for in Czech Colony, Sanath Nagar." },
  { year: "2024", t: "Upgraded dental implants & digital X-ray diagnostics suite." },
  { year: "2026", t: "Achieved 5.0★ Google rating across 407+ verified patient reviews." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Dentistry, the way it should feel."
        subtitle="Venkateswara Dental Hospital was founded on a simple belief — that clinical excellence and human warmth belong together."
        image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Venkateswara Dental Hospital clinic interior"
              className="rounded-sm w-full aspect-4/5 object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Our Mission</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl">
                To give Sanath Nagar a dental hospital worth{" "}
                <span className="italic text-sage-dark">trusting</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-taupe leading-relaxed">
                Located on the 1st Floor, SVSS Nivas Complex (above Ratnadeep Super Market, opposite
                Gokul Theatre Lane), Venkateswara Dental Hospital provides top-rated dental care in
                Sanath Nagar, Hyderabad. From root canals to dental implants, our treatments are
                known to be painless, budget friendly, and patient-focused.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="font-serif text-4xl">Four values, every appointment.</h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, t, d }) => (
              <RevealItem
                key={t}
                variants={revealItemVariants}
                className="bg-ivory p-7 rounded-sm border border-blush/40"
              >
                <div className="h-11 w-11 rounded-sm bg-sage-dark/10 grid place-items-center text-sage-dark mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl">{t}</h3>
                <p className="mt-2 text-sm text-taupe leading-relaxed">{d}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4">Milestones</p>
            <h2 className="font-serif text-4xl">
              A decade of <span className="italic text-sage-dark">trusted</span> growth.
            </h2>
          </Reveal>
          <div className="relative pl-8 border-l border-blush">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05} className="relative mb-10 last:mb-0">
                <span className="absolute -left-9.25 top-1 h-3 w-3 rounded-full bg-sage-dark border-4 border-ivory" />
                <p className="font-serif text-2xl text-sage-dark">{m.year}</p>
                <p className="mt-2 text-charcoal leading-relaxed">{m.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-4">The Team (Demo Team)</p>
            <h2 className="font-serif text-4xl">Specialists you can rely on.</h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMO_TEAM.map((p) => (
              <RevealItem
                key={p.name}
                variants={revealItemVariants}
                className="text-center bg-ivory p-5 rounded-sm border border-blush/40"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-4/5 object-cover rounded-sm mb-4"
                />
                <span className="text-[10px] uppercase font-semibold text-sage-dark bg-sage-dark/10 px-2 py-0.5 rounded-sm">
                  Demo
                </span>
                <h3 className="font-serif text-xl mt-2 text-charcoal">{p.name}</h3>
                <p className="text-xs text-taupe mt-1 font-medium">{p.role}</p>
              </RevealItem>
            ))}
          </RevealStagger>
          <div className="mt-12 text-center">
            <Link
              to="/doctor"
              className="inline-flex items-center gap-2 text-sm text-sage-dark hover:text-charcoal font-medium"
            >
              Meet all team members (Demo) →
            </Link>
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
