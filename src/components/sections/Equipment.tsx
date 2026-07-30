"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { equipment } from "@/lib/constants/equipment";

/** Equipment showcase — bordered cards with a gradient glow on hover. */
export function Equipment() {
  return (
    <section
      id="equipamiento"
      aria-labelledby="equipamiento-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="equipamiento-heading"
          eyebrow="Tecnología"
          title="Equipamiento profesional"
          description="Equipo confiable de sonido e iluminación para que tu evento suene y se vea bien."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl border border-white/10 bg-brand-bg-elevated/40 p-8 transition-all duration-300 hover:border-transparent"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-pink via-brand-purple to-brand-orange opacity-0 blur transition-opacity duration-300 group-hover:opacity-30 -z-10"
              />
              <Icon className="size-8 text-brand-pink" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-display font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
