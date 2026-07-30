"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Music4, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Equipo profesional",
    description: "Sonido e iluminación bien mantenidos, listos para cada evento.",
  },
  {
    icon: Clock,
    title: "Confiabilidad",
    description: "Puntualidad, backup técnico y respaldo en cada evento, sin sorpresas.",
  },
  {
    icon: Music4,
    title: "Música moderna",
    description: "Catálogo actualizado y lectura de pista en vivo para no bajar la energía.",
  },
  {
    icon: UserCheck,
    title: "Servicio personalizado",
    description: "Cada evento se diseña a tu medida, de principio a fin.",
  },
];

/** Feature timeline: connected horizontally on desktop, stacked on mobile. */
export function WhyChooseUs() {
  return (
    <section
      id="nosotros"
      aria-labelledby="nosotros-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="nosotros-heading"
          eyebrow="Por qué elegirnos"
          title="Experiencia que se siente"
          description="Lo que nos distingue no es solo el equipo — es cómo hacemos que cada evento se sienta único."
        />

        <div className="relative mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-7 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent lg:block"
          />

          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-brand-bg-elevated ring-2 ring-brand-pink shadow-[0_0_20px_-4px_var(--color-brand-pink)]">
                <Icon className="size-6 text-brand-pink" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-xs">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
