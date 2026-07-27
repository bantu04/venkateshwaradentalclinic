import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { ALL_SURGERIES_TREATMENTS, CLINIC } from "@/lib/site-data";
import { Search, ChevronRight, Phone, Calendar, CheckCircle2, Shield, Sparkles, Activity } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "29 Surgeries & Treatments — Venkateswara Multi Speciality Dental Clinic" },
      {
        name: "description",
        content:
          "Explore all 29 dental surgeries and treatments offered at Venkateswara Multi Speciality Dental Clinic in Balanagar, Hyderabad. Root canals, ceramic crowns, implants, dentures, laser dentistry & diagnostics.",
      },
    ],
  }),
  component: ServicesPage,
});

export function ServicesPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [query, setQuery] = useState("");

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

  const items = ALL_SURGERIES_TREATMENTS.filter((item) => {
    const matchCat = selectedCat === "All" || item.category === selectedCat;
    const matchQuery =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <>
      <PageHeader
        eyebrow="Clinical Excellence"
        title="29 Surgeries and Treatments"
        subtitle="Complete multi-speciality dental practice led by Dr. Gopi Krishna (BDS, MDS - Prosthodontist & Crown Bridge Specialist) in Balanagar, Hyderabad."
      />

      <section className="py-16 md:py-24 bg-navy-dark relative overflow-hidden bg-mesh-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-glow">
                Full Clinical Catalog
              </p>
              <h2 className="font-syne text-2xl sm:text-3xl font-bold text-white">
                Showing {items.length} of 29 Procedures
              </h2>
            </div>

            {/* Search */}
            <div className="relative min-w-70">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search procedures or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/15 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-glow shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? "bg-cyan-glow text-slate-950 shadow-md font-extrabold"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of All 29 Services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((treatment, idx) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
              >
                <div className="glass-card-interactive rounded-3xl p-6 border border-white/10 shadow-sm flex flex-col justify-between h-full group">
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
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Fee</span>
                      <span className="text-xs font-bold text-emerald-400">₹300 Consultation</span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-black text-slate-950 bg-cyan-glow px-4 py-2 rounded-xl hover:bg-white transition-colors shadow-md"
                    >
                      Book Visit <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Consultation Banner */}
          <div className="mt-16 glass-card text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 relative overflow-hidden shadow-2xl border border-white/15">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-glow/20 rounded-full blur-3xl pointer-events-none" />
            <span className="inline-block px-3 py-1 bg-amber-gold text-slate-950 text-xs font-black uppercase rounded-full tracking-wider">
              Transparent & Reasonable Charges
            </span>
            <h3 className="font-syne text-3xl sm:text-4xl font-bold">
              Unsure which treatment fits your condition?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Schedule a comprehensive diagnostic consultation with Dr. Gopi Krishna or Dr. Vinay for just ₹300.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl bg-cyan-glow px-7 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-white transition-all shadow-lg"
              >
                <Calendar className="h-4 w-4" /> Book Consultation (₹300)
              </Link>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
              >
                <Phone className="h-4 w-4 text-amber-gold" /> Call Clinic: {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
