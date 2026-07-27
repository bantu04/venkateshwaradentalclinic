import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GALLERY_IMAGES } from "@/lib/site-data";

export function GalleryGrid({ filter }: { filter?: string }) {
  const [open, setOpen] = useState(-1);
  const items =
    filter && filter !== "All"
      ? GALLERY_IMAGES.filter((g) => g.cat.toLowerCase().includes(filter.toLowerCase()))
      : GALLERY_IMAGES;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((g, idx) => (
          <div
            key={idx}
            onClick={() => setOpen(idx)}
            className="group cursor-pointer glass-card-interactive rounded-2xl border border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                {g.cat}
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-syne text-lg font-bold text-white group-hover:text-cyan-glow transition-colors">
                {g.title}
              </h3>
              <p className="text-xs text-slate-400">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open >= 0}
        index={open >= 0 ? open : 0}
        close={() => setOpen(-1)}
        slides={items.map((g) => ({ src: g.src, title: g.title, description: g.desc }))}
      />
    </>
  );
}
