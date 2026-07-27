import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { CLINIC, isOpenNow } from "@/lib/site-data";

export function MapContact() {
  const open = isOpenNow();
  return (
    <section id="contact" className="py-24 bg-cream/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="rounded-sm overflow-hidden border border-blush/40 shadow-sm min-h-100">
          <iframe
            title="Venkateswara Dental Hospital on Google Maps"
            src={CLINIC.mapEmbed}
            className="w-full h-full min-h-100"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <p className="eyebrow mb-4">Visit Us</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Find your way to <span className="italic text-sage-dark">calmer</span> dentistry.
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1 text-sage-dark shrink-0" />
              <div>
                <p className="text-charcoal">{CLINIC.address}</p>
                <a
                  href={CLINIC.mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-sage-dark hover:underline"
                >
                  Get Directions <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1 text-sage-dark shrink-0" />
              <a href={`tel:${CLINIC.phoneRaw}`} className="text-charcoal hover:text-sage-dark">
                {CLINIC.phone}
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 mt-1 text-sage-dark shrink-0" />
              <div className="w-full">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] ${open ? "text-sage-dark" : "text-taupe"}`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${open ? "bg-sage animate-pulse" : "bg-taupe"}`}
                    />
                    {open ? "Open Now" : "Closed"}
                  </span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {CLINIC.hours.map((h) => (
                      <tr key={h.day} className="border-b border-blush/30 last:border-0">
                        <td className="py-2 text-charcoal/80">{h.day}</td>
                        <td className="py-2 text-right text-taupe">{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <a
            href={CLINIC.mapsDirections}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-sage-dark px-6 py-3 text-xs uppercase tracking-[0.18em] text-ivory hover:bg-charcoal transition-colors"
          >
            Get Directions <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
