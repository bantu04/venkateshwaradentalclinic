import {
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { CLINIC, isOpenNow } from "@/lib/site-data";

export function MapContact() {
  const open = isOpenNow();

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-stretch">
        {/* Google Map Container */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-white/15 shadow-2xl min-h-95">
          <iframe
            title="Venkateswara Multi Speciality Dental Clinic Location"
            src={CLINIC.mapEmbed}
            className="w-full h-full min-h-95 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info Details */}
        <div className="lg:col-span-6 space-y-6 glass-card p-8 sm:p-10 rounded-3xl border border-white/15 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-glow bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              Location & Hours
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white">
              Visit Venkateswara <span className="text-cyan-glow">Dental Clinic</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-glow shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Address:</p>
                  <p className="text-slate-300 leading-relaxed mt-0.5">{CLINIC.address}</p>
                  <p className="text-[11px] text-amber-gold font-semibold mt-1">
                    (Opposite Hotel Samrat Lane, Behind Gaurav Super Market)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-glow shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Direct Phone:</p>
                  <a
                    href={`tel:${CLINIC.phoneRaw}`}
                    className="text-cyan-glow font-black text-base hover:underline"
                  >
                    {CLINIC.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-glow shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-white">Clinic Consultation Timings:</span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        open
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-white/10 text-slate-400 border border-white/10"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${open ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`}
                      />
                      {open ? "Open Now" : "Closed Now"}
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 text-xs space-y-1.5">
                    <div className="flex justify-between text-white font-semibold">
                      <span>Saturday & Weekdays:</span>
                      <span className="text-cyan-glow font-bold">09:30 AM – 01:30 PM</span>
                    </div>
                    <div className="flex justify-between text-white font-semibold">
                      <span>Evening Session (Opens 5 PM):</span>
                      <span className="text-cyan-glow font-bold">05:00 PM – 08:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px] border-t border-white/10 pt-1.5">
                      <span>Consultation Fee:</span>
                      <span className="font-bold text-emerald-400">₹300 Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
            <a
              href={CLINIC.mapsDirections}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/15 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-colors text-center shadow"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="h-4 w-4 text-cyan-glow" />
            </a>

            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-gold px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-white transition-colors text-center shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
