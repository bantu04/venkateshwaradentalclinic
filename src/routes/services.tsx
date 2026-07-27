import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { MapContact } from "@/components/site/MapContact";
import { ALL_SURGERIES_TREATMENTS, CLINIC } from "@/lib/site-data";
import {
  Search,
  ChevronRight,
  Phone,
  Calendar,
  CheckCircle2,
  Shield,
  Sparkles,
} from "lucide-react";

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

      <section className="py-16 md:py-24 bg-pearl relative overflow-hidden bg-mesh-glow-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-brand">
                Full Clinical Catalog
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
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
                className="w-full rounded-xl bg-white border border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-brand shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-teal-brand text-white shadow-md font-bold"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
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
                <div className="glass-card-interactive rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between h-full group">
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
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Fee</span>
                      <span className="text-xs font-bold text-emerald-700">₹300 Consultation</span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-teal-brand px-4 py-2 rounded-xl hover:bg-slate-900 transition-colors shadow-xs"
                    >
                      Book Visit <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Consultation Banner */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 relative overflow-hidden shadow-2xl border border-slate-800">
            <span className="inline-block px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase rounded-full tracking-wider">
              Transparent & Reasonable Charges
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold">
              Unsure which treatment fits your condition?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-normal">
              Schedule a comprehensive diagnostic consultation with Dr. Gopi Krishna or Dr. Vinay
              for just ₹300.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl bg-teal-brand px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-slate-950 transition-all shadow-md"
              >
                <Calendar className="h-4 w-4" /> Book Consultation
              </Link>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
              >
                <Phone className="h-4 w-4 text-amber-400" /> Call Clinic: {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
