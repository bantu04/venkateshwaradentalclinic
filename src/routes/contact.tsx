import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, ALL_SURGERIES_TREATMENTS } from "@/lib/site-data";
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, Award } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Appointment & Contact — Venkateswara Multi Speciality Dental Clinic" },
      {
        name: "description",
        content:
          "Book your ₹300 dental consultation at Venkateswara Multi Speciality Dental Clinic in Balanagar, Hyderabad. Call 077991 04626 or schedule online.",
      },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "Root Canal Treatment (RCT)",
    date: "",
    session: "Morning (09:30 AM – 01:30 PM)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Appointment & Consultation"
        title="Book Your Visit (₹300)"
        subtitle="Select your preferred treatment date & session. Our team will immediately reach out to confirm your slot."
      />

      <section className="py-16 bg-navy-dark relative overflow-hidden bg-mesh-glow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-start">
          {/* Booking Form */}
          <Reveal className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-syne text-2xl font-bold text-white">
                  Appointment Request Received!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our front desk at Balanagar clinic will call you on <strong>{formData.phone}</strong> to confirm your slot.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-cyan-glow text-slate-950 text-xs font-black rounded-xl uppercase tracking-wider shadow"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-syne text-2xl font-bold text-white">
                    Schedule Dental Care
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Consultation Fee: <strong className="text-cyan-glow">₹300</strong> · Dr. Gopi Krishna (BDS, MDS)
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Pavan Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-glow shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-glow shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1">
                      Select Treatment / Procedure
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-glow shadow-sm"
                    >
                      {ALL_SURGERIES_TREATMENTS.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1">
                      Preferred Date
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-glow shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white mb-1">
                    Preferred Session (Sat & Weekdays)
                  </label>
                  <select
                    value={formData.session}
                    onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                    className="w-full bg-slate-900 border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-glow shadow-sm"
                  >
                    <option value="Morning (09:30 AM – 01:30 PM)">
                      Morning Session (09:30 AM – 01:30 PM)
                    </option>
                    <option value="Evening (05:00 PM – 08:00 PM)">
                      Evening Session (05:00 PM – 08:00 PM) - Opens 5 PM
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white mb-1">
                    Additional Health Notes or Symptoms (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe toothache, jaw pain, denture requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-glow shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all active:scale-95"
                >
                  Confirm Appointment Request (₹300)
                </button>
              </form>
            )}
          </Reveal>

          {/* Direct Details Sidebar */}
          <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="glass-card text-white p-8 rounded-3xl space-y-6 border border-white/15 shadow-2xl">
              <div>
                <span className="text-amber-gold text-xs font-bold uppercase tracking-wider">
                  Direct Clinic Desk
                </span>
                <h3 className="font-syne text-2xl font-bold mt-1 text-white">Call or Visit Us</h3>
              </div>

              <div className="space-y-4 text-xs">
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  className="flex items-center gap-3 text-cyan-glow hover:text-white font-extrabold text-base transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>{CLINIC.phone}</span>
                </a>

                <div className="flex items-start gap-3 text-slate-300 leading-relaxed">
                  <MapPin className="h-5 w-5 text-cyan-glow shrink-0 mt-0.5" />
                  <span>{CLINIC.address}</span>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="h-5 w-5 text-cyan-glow shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sat & Daily Timings:</p>
                    <p>Morning: 09:30 AM – 01:30 PM</p>
                    <p>Evening: 05:00 PM – 08:00 PM (Opens 5 PM)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <Award className="h-4 w-4" /> 26 Years Overall Clinical Experience
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  ✓ Award Winning Doctor in Twin Cities
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MapContact />
    </>
  );
}
