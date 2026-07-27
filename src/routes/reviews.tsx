import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { MapContact } from "@/components/site/MapContact";
import { PATIENT_STORIES, GOOGLE_REVIEWS, CLINIC } from "@/lib/site-data";
import { Star, MessageSquareQuote, CheckCircle, Award, Phone, Calendar, Search } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Stories & Reviews — Venkateswara Multi Speciality Dental Clinic" },
      {
        name: "description",
        content:
          "Read 653+ verified patient stories and 624 Google reviews for Dr. Gopi Krishna & Venkateswara Multi Speciality Dental Clinic in Balanagar, Hyderabad.",
      },
    ],
  }),
  component: ReviewsPage,
});

export function ReviewsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStories = PATIENT_STORIES.filter((story) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "RCT" && story.treatment.includes("RCT")) ||
      (filter === "Fillings" && story.treatment.includes("Fillings")) ||
      (filter === "Dentures" && story.treatment.includes("Denture"));

    const matchesSearch =
      story.author.toLowerCase().includes(search.toLowerCase()) ||
      story.text.toLowerCase().includes(search.toLowerCase()) ||
      story.treatment.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="Patient Feedback"
        title="653+ Verified Patient Stories"
        subtitle="These are patient’s opinions and reflect real clinical care delivered by Dr. Gopi Krishna (Prosthodontist) & Dr. Vinay in Balanagar, Hyderabad."
      />

      {/* Overview Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-navy-dark text-white rounded-3xl p-8 grid sm:grid-cols-3 gap-6 text-center items-center shadow-xl">
            <div className="space-y-1">
              <div className="font-serif text-4xl font-extrabold text-amber-gold">97%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">
                Practo Recommendation
              </div>
              <div className="text-[11px] text-slate-400">Across 653 Verified Votes</div>
            </div>

            <div className="space-y-1 sm:border-x border-white/10 sm:px-4">
              <div className="font-serif text-4xl font-extrabold text-white">4.6 ★</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">
                Google Rating
              </div>
              <div className="text-[11px] text-slate-400">From 624 Google Reviews</div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-4xl font-extrabold text-teal-brand">26+ Yrs</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-300">
                Award Winning Doctor
              </div>
              <div className="text-[11px] text-slate-400">Dr. Gopi Krishna (BDS, MDS)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews Grid */}
      <section className="py-16 md:py-24 bg-ice-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {["All", "RCT", "Fillings", "Dentures"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    filter === f
                      ? "bg-teal-brand text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {f === "All" ? "All Patient Stories" : `${f} Reviews`}
                </button>
              ))}
            </div>

            <div className="relative min-w-[260px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search patient name or story..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 pl-10 pr-4 py-2.5 text-xs text-navy-dark focus:outline-none focus:border-teal-brand shadow-sm"
              />
            </div>
          </div>

          {/* Stories List */}
          <div className="space-y-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-navy-dark text-white font-serif font-bold text-lg flex items-center justify-center">
                      {story.author[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg font-bold text-navy-dark">
                          {story.author}
                        </h3>
                        {story.verified && (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            (Verified Patient)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{story.timeAgo} · Visited {story.doctorName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-gold/10 px-3 py-1 rounded-full border border-amber-gold/30">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-gold text-amber-gold" />
                    ))}
                    <span className="text-xs font-bold text-navy-dark ml-1">5.0</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="inline-block text-xs font-bold text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full">
                    Visited for: {story.treatment}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    "{story.text}"
                  </p>

                  {story.happyWith && story.happyWith.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-semibold text-slate-500">Happy with:</span>
                      {story.happyWith.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Doctor Reply Box */}
                {story.doctorReply && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="bg-ice-bg rounded-2xl p-4 border border-teal-brand/30 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-dark">
                        <Award className="h-4 w-4 text-teal-brand" />
                        <span>Dr. Gopi Krishna replied</span>
                      </div>
                      <p className="text-xs text-slate-600 italic">"{story.doctorReply}"</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Google Reviews Snippet */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
            <h3 className="font-serif text-2xl font-bold text-navy-dark mb-6">
              Google Reviews Highlights (4.6★ · 624 Reviews)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {GOOGLE_REVIEWS.map((g, i) => (
                <div key={i} className="bg-ice-bg p-5 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex gap-1 text-amber-gold">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-gold" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic">"{g.text}"</p>
                  <p className="text-xs font-bold text-navy-dark pt-1">— {g.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
