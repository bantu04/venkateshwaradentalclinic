import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, DOCTORS } from "@/lib/site-data";
import drGopiImg from "@/assets/dr-gopi-krishna.png";
import { Award, Heart, ShieldCheck, Sparkles, Phone, Calendar, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Venkateswara Multi Speciality Dental Clinic Balanagar" },
      {
        name: "description",
        content:
          "About Venkateswara Multi Speciality Dental Clinic in Balanagar, Hyderabad. Founded by Dr. Gopi Krishna (BDS, MDS - Prosthodontist with 26+ years experience).",
      },
    ],
  }),
  component: AboutPage,
});

const CLINIC_VALUES = [
  {
    icon: Heart,
    t: "Non-Commercial Philosophy",
    d: "Fillings and procedures are recommended only when compulsory required. Honest, transparent dental care.",
  },
  {
    icon: ShieldCheck,
    t: "High Hygiene & Sterilization",
    d: "Hospital-grade autoclaving, disposable instruments, and clean operatories.",
  },
  {
    icon: Sparkles,
    t: "Award-Winning Care",
    d: "Dr. Gopi Krishna is an Award Winning Prosthodontist admired across twin cities.",
  },
  {
    icon: Award,
    t: "Reasonable Consultation Fee",
    d: "Flat ₹300 consultation fee with zero hidden charges and clear treatment estimates.",
  },
];

export function AboutPage() {
  const drGopi = DOCTORS[0];

  return (
    <>
      <PageHeader
        eyebrow="Our History & Ethos"
        title="26+ Years of Trusted Dental Care"
        subtitle="Venkateswara Multi Speciality Dental Clinic brings general & multi-specialty practices to Balanagar, Hyderabad under expert medical leadership."
      />

      {/* Main Story Section */}
      <section className="py-16 md:py-24 bg-navy-dark relative overflow-hidden bg-mesh-glow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <img
              src={drGopiImg}
              alt={drGopi.name}
              className="w-full aspect-4/5 object-cover object-top rounded-3xl border-2 border-white/20 shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-xl hidden sm:block border border-white/10">
              <div className="font-syne text-3xl font-black text-amber-gold">97% (653)</div>
              <div className="text-[11px] text-slate-300 font-medium">Practo Verified Satisfaction</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-glow bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/30">
              Established Excellence
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white">
              Centrally Located at Balanagar, <span className="text-cyan-glow">Hyderabad</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {CLINIC.summaryStatement}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Led by <strong>Dr. Gopi Krishna (BDS, MDS - Prosthodontist And Crown Bridge)</strong> with over 26 years of overall experience, our clinic has earned a reputation across Hyderabad and Secunderabad for gentle, budget-friendly, and non-commercial tooth care.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-3 text-xs text-slate-200 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                <span>Balanagar Main Rd, Opp. Hotel Samrat Lane</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                <span>₹300 Consultation Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                <span>Single Visit Rotary Root Canals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                <span>29 Surgeries & Treatments</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl bg-cyan-glow px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-white transition-all shadow-lg"
              >
                <Calendar className="h-4 w-4" /> Book Appointment (₹300)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="eyebrow">Core Values</p>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white">
              Why Patients Trust <span className="text-cyan-glow">Venkateswara Dental</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_VALUES.map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-glow flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white">{t}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
