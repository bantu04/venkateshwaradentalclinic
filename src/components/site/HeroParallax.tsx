import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ChevronsRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CLINIC } from "@/lib/site-data";

export function HeroParallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const imgY = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative h-screen min-h-175 w-full overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0 -top-24 -bottom-24">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=85"
          alt="Venkateswara Dental Hospital interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ivory/60 via-ivory/30 to-ivory/85" />
        <div className="absolute inset-0 bg-linear-to-r from-ivory/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col justify-center px-6"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-6 text-sage-dark font-semibold">
            Venkateswara Dental Hospital · Sanath Nagar, Hyderabad
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] text-charcoal font-black drop-shadow-[0_16px_32px_rgba(0,0,0,0.16)]">
            Venkateswara
            <br />
            <span className="italic text-sage-dark">Dental Hospital</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal leading-relaxed font-medium">
            5.0★ Google Rated (407 Reviews) · Best Dentist in Sanath Nagar. Budget friendly root
            canal treatments, dental implants, teeth whitening & laser care above Ratnadeep Super
            Market.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-sm bg-sage-dark px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-charcoal transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4" /> Call {CLINIC.phone}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-charcoal/30 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Our Services <ChevronsRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
