import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, DOCTORS, PATIENT_STORIES } from "@/lib/site-data";
import drGopiImg from "@/assets/dr-gopi-krishna.png";
import {
  Star,
  Award,
  CheckCircle,
  ShieldCheck,
  Phone,
  Calendar,
  Heart,
  Stethoscope,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      {
        title:
          "Dr. Gopi Krishna (BDS, MDS) — Chief Prosthodontist | Venkateswara Dental Clinic Balanagar",
      },
      {
        name: "description",
        content:
          "Dr. Gopi Krishna (BDS, MDS - Prosthodontist & Crown Bridge). 26+ years experience, award-winning doctor in twin cities. ₹300 consultation fee. Root canals, implants, dentures & ceramic crowns in Balanagar.",
      },
    ],
  }),
  component: DoctorPage,
});

export function DoctorPage() {
  const drGopi = DOCTORS[0];
  const drVinay = DOCTORS[1];

  return (
    <>
      <PageHeader
        eyebrow="Specialist Doctor Profile"
        title="Dr. Gopi Krishna (BDS, MDS)"
        subtitle="Chief Prosthodontist & Crown Bridge Specialist · 26 Years Overall Experience · Award Winner in Twin Cities"
      />

      {/* Main Doctor Spotlight */}
      <section className="py-16 md:py-24 bg-navy-dark relative overflow-hidden bg-mesh-glow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Photo & Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900">
                <img
                  src={drGopiImg}
                  alt={drGopi.name}
                  className="w-full aspect-4/5 object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-amber-gold text-slate-950 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
                  Award Winning Doctor
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-navy-dark via-navy-dark/90 to-transparent p-6 text-white">
                  <h2 className="font-syne text-3xl font-bold">{drGopi.name}</h2>
                  <p className="text-xs text-cyan-glow font-bold mt-1">{drGopi.title}</p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="glass-card rounded-2xl p-5 grid grid-cols-2 gap-3 text-center border border-white/10">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="font-syne text-2xl font-black text-amber-gold">97%</div>
                  <div className="text-[11px] text-slate-400 font-medium">653 Practo Votes</div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="font-syne text-2xl font-black text-emerald-400">₹300</div>
                  <div className="text-[11px] text-slate-400 font-medium">Consultation Fee</div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="font-syne text-2xl font-black text-cyan-glow">26+ Yrs</div>
                  <div className="text-[11px] text-slate-400 font-medium">Clinical Exp</div>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="font-syne text-2xl font-black text-white">653+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Patient Stories</div>
                </div>
              </div>

              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-glow px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg hover:bg-white transition-all w-full"
              >
                <Phone className="h-4 w-4" /> Call Dr. Gopi Krishna: {CLINIC.phone}
              </a>
            </motion.div>

            {/* Right Detailed Bio & Specializations */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-glow bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 mb-4">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Prosthodontist & Crown Bridge Specialist</span>
                </div>
                <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Globally Admirable Professional Care in Hyderabad
                </h2>
                <p className="mt-4 text-slate-300 text-base leading-relaxed font-normal">
                  {drGopi.bio}
                </p>
              </div>

              {/* Key Medical Philosophies */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card p-5 rounded-2xl border border-white/10">
                  <div className="h-9 w-9 rounded-xl bg-amber-gold/20 flex items-center justify-center text-amber-gold mb-3">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="font-syne text-lg font-bold text-white">
                    Non-Commercial Philosophy
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Patients consistently praise Dr. Gopi Krishna for performing fillings or
                    procedures only when compulsory required, ensuring true trust.
                  </p>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10">
                  <div className="h-9 w-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-glow mb-3">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <h3 className="font-syne text-lg font-bold text-white">Rotary RCT & Crowns</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Specialized in pain-free single & multi-sitting Root Canal Treatments, all types
                    of ceramic crowns, and fixed partial dentures.
                  </p>
                </div>
              </div>

              {/* Clinical Highlights List */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                <h3 className="font-syne text-xl font-bold text-white border-b border-white/10 pb-3">
                  Key Practice Highlights
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
                  {drGopi.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-medium">
                      <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                    <span>Fixed & Removable Flexible Dentures</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-cyan-glow shrink-0" />
                    <span>Patient-Friendly Flexible Scheduling</span>
                  </div>
                </div>
              </div>

              {/* Timings & Fee */}
              <div className="bg-slate-900 border border-white/15 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-gold text-xs font-bold uppercase tracking-wider">
                    <Clock className="h-4 w-4" /> Saturday & Daily Consultation
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Morning: 09:30 AM – 01:30 PM | Evening: 05:00 PM – 08:00 PM
                  </p>
                  <p className="text-xs text-slate-300">
                    Consultation Fee: ₹300 at Balanagar Clinic
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="rounded-xl bg-amber-gold px-6 py-3.5 text-xs font-black text-slate-950 uppercase tracking-wider hover:bg-white transition-colors shrink-0 shadow-lg"
                >
                  Book Visit (₹300)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Doctor Spotlight: Dr. Vinay */}
      <section className="py-16 bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-xl grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <img
                src={drVinay.img}
                alt={drVinay.name}
                className="w-full aspect-4/5 object-cover rounded-2xl border border-white/20 shadow-md"
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-extrabold text-cyan-glow bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-wider">
                Practicing Dental Surgeon
              </span>
              <h2 className="font-syne text-3xl font-bold text-white">{drVinay.name}</h2>
              <p className="text-xs text-slate-400 font-semibold">{drVinay.title}</p>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">{drVinay.bio}</p>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-slate-300 italic">
                "Both doctors Dr. Vinay and Dr. Gopi Krishna are very welcoming and friendly. Dr.
                Vinay provided excellent service and made me feel right at home with zero pain!" — Y
                Rajitha (Patient Review)
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-glow px-6 py-3.5 text-xs font-black text-slate-950 uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Grid */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="eyebrow">Direct Feedback</p>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white">
              What Patients Say About <span className="text-cyan-glow">Dr. Gopi Krishna</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PATIENT_STORIES.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-3"
              >
                <div className="flex gap-1 text-amber-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-gold" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">"{s.text}"</p>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs font-bold text-white">{s.author}</p>
                  <p className="text-[10px] text-cyan-glow font-medium">{s.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
