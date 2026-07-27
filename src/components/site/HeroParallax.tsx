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
    <section className="relative h-screen min-h-175 w-full overflow-hidden bg-charcoal">
      <motion.div style={{ y: imgY }} className="absolute inset-0 -top-24 -bottom-24">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=85"
          alt="Venkateswara Dental Hospital interior"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/60 to-charcoal/95" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col justify-center px-6 pt-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6 text-gold font-semibold tracking-[0.25em] text-xs uppercase">
            Venkateswara Dental Hospital · Sanath Nagar, Hyderabad
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.02] text-ivory font-black drop-shadow-md">
            Venkateswara
            <br />
            <span className="italic text-gold">Dental Hospital</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/90 leading-relaxed font-normal">
            5.0★ Google Rated (407 Reviews) · Best Dentist in Sanath Nagar. Budget friendly root
            canal treatments, dental implants, teeth whitening & laser care above Ratnadeep Super
            Market.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-sm bg-sage-dark px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-gold hover:text-charcoal transition-colors shadow-md font-medium"
            >
              <Phone className="h-4 w-4" /> Call {CLINIC.phone}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-ivory/40 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-ivory hover:text-charcoal transition-colors font-medium"
            >
              Our Services <ChevronsRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
