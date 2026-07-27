import { Phone, MapPin, Clock, ArrowUpRight, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";
import { CLINIC, isOpenNow } from "@/lib/site-data";

export function MapContact() {
  const open = isOpenNow();

  return (
    <section id="contact" className="py-20 md:py-28 bg-ice-bg border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-stretch">
        {/* Google Map Container */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[380px]">
          <iframe
            title="Venkateswara Multi Speciality Dental Clinic Location"
            src={CLINIC.mapEmbed}
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info Details */}
        <div className="lg:col-span-6 space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full">
              Location & Hours
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-dark">
              Visit Venkateswara <span className="italic text-teal-brand">Dental Clinic</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-teal-brand/10 text-teal-brand shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-dark">Address:</p>
                  <p className="text-slate-600 leading-relaxed mt-0.5">{CLINIC.address}</p>
                  <p className="text-[11px] text-teal-brand font-semibold mt-1">
                    (Opposite Hotel Samrat Lane, Behind Gaurav Super Market)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-xl bg-teal-brand/10 text-teal-brand shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-navy-dark">Direct Phone:</p>
                  <a
                    href={`tel:${CLINIC.phoneRaw}`}
                    className="text-teal-brand font-bold text-base hover:underline"
                  >
                    {CLINIC.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-teal-brand/10 text-teal-brand shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-navy-dark">Clinic Consultation Timings:</span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        open
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${open ? "bg-emerald-500 animate-pulse" : "bg-slate-400"}`}
                      />
                      {open ? "Open Now" : "Closed Now"}
                    </span>
                  </div>

                  <div className="bg-ice-bg rounded-xl p-3 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex justify-between text-navy-dark font-semibold">
                      <span>Saturday & Weekdays:</span>
                      <span className="text-teal-brand">09:30 AM – 01:30 PM</span>
                    </div>
                    <div className="flex justify-between text-navy-dark font-semibold">
                      <span>Evening Session (Opens 5 PM):</span>
                      <span className="text-teal-brand">05:00 PM – 08:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-500 text-[11px] border-t border-slate-200 pt-1">
                      <span>Consultation Fee:</span>
                      <span className="font-bold text-navy-dark">₹300 Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
            <a
              href={CLINIC.mapsDirections}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-navy-dark px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-teal-brand transition-colors text-center shadow"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-dark hover:bg-white transition-colors text-center shadow"
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
