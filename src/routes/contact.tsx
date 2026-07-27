import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC } from "@/lib/site-data";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Venkateswara Dental Hospital" },
      {
        name: "description",
        content: "Book an appointment at Venkateswara Dental Hospital in Sanath Nagar, Hyderabad.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Book your visit."
        subtitle="Tell us a little about what you need and we'll confirm an appointment within working hours."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-3">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. We'll call you back shortly.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Full name"
                  className="bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
                />
                <input
                  required
                  placeholder="Phone"
                  className="bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
                />
              </div>
              <input
                type="email"
                placeholder="Email (optional)"
                className="w-full bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
              />
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="date"
                  className="bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
                />
                <select className="bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark">
                  <option>Preferred time</option>
                  <option>Morning (9 AM – 12 PM)</option>
                  <option>Afternoon (12 PM – 4 PM)</option>
                  <option>Evening (4 PM – 8 PM)</option>
                </select>
              </div>
              <textarea
                rows={5}
                placeholder="Tell us a little about what you need"
                className="w-full bg-ivory border border-blush/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-sage-dark"
              />
              <button className="rounded-sm bg-sage-dark text-ivory px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-charcoal transition-colors">
                Request Appointment
              </button>
            </form>
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:col-span-2 bg-cream/40 border border-blush/40 rounded-sm p-8 h-fit"
          >
            <p className="eyebrow mb-4">Direct</p>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-sage-dark" />{" "}
                <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-sage-dark">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-sage-dark" />{" "}
                <a href={`mailto:${CLINIC.email}`} className="hover:text-sage-dark">
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-sage-dark" /> <span>{CLINIC.address}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <MapContact />
    </>
  );
}
