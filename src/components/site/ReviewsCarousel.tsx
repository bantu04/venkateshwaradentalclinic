import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Award } from "lucide-react";
import { PATIENT_STORIES } from "@/lib/site-data";

export function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % PATIENT_STORIES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setI((v) => (v + 1) % PATIENT_STORIES.length);
  const prev = () => setI((v) => (v - 1 + PATIENT_STORIES.length) % PATIENT_STORIES.length);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {PATIENT_STORIES.map((r, idx) => (
            <div key={idx} className="w-full shrink-0 px-2 sm:px-4">
              <div className="mx-auto max-w-3xl bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-lg">
                <Quote className="mx-auto h-8 w-8 text-amber-gold mb-4" />
                <p className="font-serif text-xl sm:text-2xl leading-relaxed text-navy-dark italic">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-gold text-amber-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-navy-dark font-bold">{r.author}</p>
                <p className="text-xs text-teal-brand font-semibold">{r.treatment}</p>

                {r.doctorReply && (
                  <div className="mt-6 pt-4 border-t border-slate-100 bg-ice-bg rounded-2xl p-4 max-w-md mx-auto">
                    <span className="text-[11px] font-bold text-navy-dark flex items-center justify-center gap-1">
                      <Award className="h-3.5 w-3.5 text-teal-brand" /> Dr. Gopi Krishna replied:
                    </span>
                    <p className="text-xs text-slate-600 italic mt-0.5">"{r.doctorReply}"</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous"
          className="p-2 text-slate-400 hover:text-teal-brand transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {PATIENT_STORIES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "bg-teal-brand w-8" : "bg-slate-300 w-2"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="p-2 text-slate-400 hover:text-teal-brand transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
