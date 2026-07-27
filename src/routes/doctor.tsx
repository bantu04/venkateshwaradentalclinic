import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, DOCTORS, PATIENT_STORIES } from "@/lib/site-data";
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
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Photo & Badges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={drGopi.img}
                  alt={drGopi.name}
                  className="w-full aspect-[4/4.8] object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-amber-gold text-navy-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Award Winning Doctor
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-transparent p-6 text-white">
                  <h2 className="font-serif text-3xl font-bold">{drGopi.name}</h2>
                  <p className="text-xs text-teal-brand font-semibold mt-1">{drGopi.title}</p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-ice-bg rounded-2xl p-5 border border-slate-200 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <div className="font-serif text-2xl font-bold text-navy-dark">97%</div>
                  <div className="text-[11px] text-slate-500 font-medium">653 Practo Votes</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <div className="font-serif text-2xl font-bold text-navy-dark">₹300</div>
                  <div className="text-[11px] text-slate-500 font-medium">Consultation Fee</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <div className="font-serif text-2xl font-bold text-navy-dark">26+ Yrs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Clinical Exp</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <div className="font-serif text-2xl font-bold text-navy-dark">653+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Patient Stories</div>
                </div>
              </div>

              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-teal-brand px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-teal-dark transition-all w-full"
              >
                <Phone className="h-4 w-4" /> Call Dr. Gopi Krishna: {CLINIC.phone}
              </a>
            </div>

            {/* Right Detailed Bio & Specializations */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Prosthodontist & Crown Bridge Specialist</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-dark">
                  Globally Admirable Professional Care in Hyderabad
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
                  {drGopi.bio}
                </p>
              </div>

              {/* Key Medical Philosophies */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-ice-bg p-5 rounded-2xl border border-slate-200">
                  <div className="h-9 w-9 rounded-xl bg-amber-gold/20 flex items-center justify-center text-amber-gold mb-3">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-dark">Non-Commercial Philosophy</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Patients consistently praise Dr. Gopi Krishna for performing fillings or procedures only when compulsory required, ensuring true trust.
                  </p>
                </div>

                <div className="bg-ice-bg p-5 rounded-2xl border border-slate-200">
                  <div className="h-9 w-9 rounded-xl bg-teal-brand/20 flex items-center justify-center text-teal-brand mb-3">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-dark">Rotary RCT & Crowns</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Specialized in pain-free single & multi-sitting Root Canal Treatments, all types of ceramic crowns, and fixed partial dentures.
                  </p>
                </div>
              </div>

              {/* Clinical Highlights List */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-serif text-xl font-bold text-navy-dark border-b border-slate-100 pb-3">
                  Key Practice Highlights
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 text-xs text-navy-dark">
                  {drGopi.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-medium">
                      <CheckCircle className="h-4 w-4 text-teal-brand shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-teal-brand shrink-0" />
                    <span>Fixed & Removable Flexible Dentures</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle className="h-4 w-4 text-teal-brand shrink-0" />
                    <span>Patient-Friendly Flexible Scheduling</span>
                  </div>
                </div>
              </div>

              {/* Timings & Fee */}
              <div className="bg-navy-dark text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-gold text-xs font-bold uppercase tracking-wider">
                    <Clock className="h-4 w-4" /> Saturday & Daily Consultation
                  </div>
                  <p className="text-sm font-semibold text-white">
                    Morning: 09:30 AM – 01:30 PM | Evening: 05:00 PM – 08:00 PM
                  </p>
                  <p className="text-xs text-slate-300">Consultation Fee: ₹300 at Balanagar Clinic</p>
                </div>

                <Link
                  to="/contact"
                  className="rounded-xl bg-amber-gold px-6 py-3 text-xs font-bold text-navy-dark uppercase tracking-wider hover:bg-white transition-colors shrink-0"
                >
                  Book Visit (₹300)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Doctor Spotlight: Dr. Vinay */}
      <section className="py-16 bg-ice-bg border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <img
                src={drVinay.img}
                alt={drVinay.name}
                className="w-full aspect-[4/5] object-cover rounded-2xl border border-slate-200 shadow-sm"
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Practicing Dental Surgeon
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy-dark">{drVinay.name}</h2>
              <p className="text-xs text-slate-600 font-semibold">{drVinay.title}</p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">{drVinay.bio}</p>

              <div className="bg-ice-bg p-4 rounded-xl border border-slate-200 text-xs text-navy-dark italic">
                "Both doctors Dr. Vinay and Dr. Gopi Krishna are very welcoming and friendly. Dr. Vinay provided excellent service and made me feel right at home with zero pain!" — Y Rajitha (Patient Review)
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-brand px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-teal-dark transition-colors"
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <p className="eyebrow">Direct Feedback</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-dark">
              What Patients Say About <span className="italic text-teal-brand">Dr. Gopi Krishna</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PATIENT_STORIES.slice(0, 3).map((s) => (
              <div key={s.id} className="bg-ice-bg p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex gap-1 text-amber-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-gold" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">"{s.text}"</p>
                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-navy-dark">{s.author}</p>
                  <p className="text-[10px] text-teal-brand font-medium">{s.treatment}</p>
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
