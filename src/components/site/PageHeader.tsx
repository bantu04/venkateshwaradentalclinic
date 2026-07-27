import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-pearl py-14 sm:py-20 border-b border-slate-200 bg-mesh-glow-light">
      <div className="mx-auto max-w-5xl px-4 text-center relative z-10 space-y-3">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
