import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, REVIEWS, DEMO_TEAM } from "@/lib/site-data";
import { Star, Award, CheckCircle, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Specialist Dental Team — Venkateswara Dental Hospital" },
      {
        name: "description",
        content:
          "Meet our team of dental specialists (Demo Team) at Venkateswara Dental Hospital, Sanath Nagar, Hyderabad.",
      },
    ],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Medical Team"
        title="Specialist Dental Team (Demo Team)"
        subtitle="Venkateswara Dental Hospital · Sanath Nagar, Hyderabad"
      />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-3xl">
            <p className="eyebrow mb-3 text-sage-dark">Clinical Excellence</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-snug">
              Compassionate doctors dedicated to{" "}
              <span className="italic text-sage-dark">gentle care</span>.
            </h2>
            <p className="mt-4 text-taupe leading-relaxed">
              At Venkateswara Dental Hospital, our team of dental surgeons and specialists provide
              expert care in dental implants, root canal treatment, pediatric dentistry, and
              cosmetic procedures. Located in Sanath Nagar (above Ratnadeep Super Market), we ensure
              every treatment is transparent and budget friendly.
            </p>
          </Reveal>

          <RevealStagger className="grid md:grid-cols-2 gap-10">
            {DEMO_TEAM.map((doc) => (
              <RevealItem
                key={doc.name}
                variants={revealItemVariants}
                className="bg-ivory border border-blush/40 rounded-sm p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full sm:w-44 aspect-4/5 object-cover rounded-sm shrink-0"
                />
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-sage-dark/10 text-sage-dark rounded-sm uppercase tracking-wider mb-2">
                    Demo Profile
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal">{doc.name}</h3>
                  <p className="text-sm font-medium text-sage-dark mt-1">{doc.role}</p>
                  <p className="text-xs text-taupe mt-1 font-mono">{doc.qualifications}</p>

                  <div className="mt-3 space-y-1 text-xs text-charcoal/80">
                    <p className="flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-sage-dark shrink-0" /> {doc.experience}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-sage-dark shrink-0" />{" "}
                      {doc.specialisations}
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-taupe leading-relaxed">{doc.bio}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block rounded-sm bg-sage-dark px-8 py-4 text-xs uppercase tracking-[0.18em] text-ivory hover:bg-charcoal transition-colors shadow-sm"
            >
              Book an Appointment with Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-4">Patient Feedback</p>
            <h2 className="font-serif text-4xl">
              5.0★ Google Rated by <span className="italic text-sage-dark">407+ Patients</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r) => (
              <Reveal key={r.name} className="bg-ivory rounded-sm p-7 border border-blush/40">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-charcoal leading-relaxed">
                  "{r.body}"
                </p>
                <p className="mt-5 text-sm font-medium text-charcoal">{r.name}</p>
                <p className="text-xs text-taupe">{r.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
