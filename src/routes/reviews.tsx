import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { REVIEWS, CLINIC } from "@/lib/site-data";
import { Star } from "lucide-react";
import { MapContact } from "@/components/site/MapContact";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Venkateswara Dental Hospital" },
      {
        name: "description",
        content:
          "Verified Google reviews from patients of Venkateswara Dental Hospital in Sanath Nagar, Hyderabad.",
      },
    ],
  }),
  component: ReviewsPage,
});

const BREAKDOWN = [
  { stars: 5, pct: 98 },
  { stars: 4, pct: 2 },
  { stars: 3, pct: 0 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Patient Voices"
        title="Words from our families."
        subtitle={`Verified Google reviews — ${CLINIC.rating}★ across ${CLINIC.reviews}+ patients.`}
      />

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-1 bg-cream/40 rounded-sm p-8 border border-blush/40 h-fit">
            <p className="font-serif text-6xl text-sage-dark">{CLINIC.rating}</p>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xs text-taupe mt-2">Based on {CLINIC.reviews}+ Google reviews</p>
            <div className="mt-8 space-y-3">
              {BREAKDOWN.map((b) => (
                <div key={b.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-charcoal/70">{b.stars} star</span>
                  <div className="flex-1 h-1.5 bg-blush/50 rounded-full overflow-hidden">
                    <div className="h-full bg-sage-dark" style={{ width: `${b.pct}%` }} />
                  </div>
                  <span className="w-10 text-right text-taupe">{b.pct}%</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6">
            {REVIEWS.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 0.05}
                className="bg-ivory border border-blush/40 rounded-sm p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-charcoal">{r.name}</p>
                    <p className="text-xs text-taupe">
                      {r.role} · {r.when}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 font-serif italic text-lg text-charcoal leading-relaxed">
                  "{r.body}"
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="text-center mb-10">
            <p className="eyebrow mb-4">Share Your Experience</p>
            <h2 className="font-serif text-4xl">Were you a patient?</h2>
            <p className="mt-3 text-taupe">Leave us a note — it helps other families decide.</p>
          </Reveal>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — please also leave us a Google review.");
            }}
          >
            <input
              required
              placeholder="Your name"
              className="w-full bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
            />
            <textarea
              required
              rows={5}
              placeholder="Your review"
              className="w-full bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
            />
            <button className="rounded-sm bg-sage-dark text-ivory px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-charcoal transition-colors">
              Submit Review
            </button>
          </form>
        </div>
      </section>

      <MapContact />
    </>
  );
}
