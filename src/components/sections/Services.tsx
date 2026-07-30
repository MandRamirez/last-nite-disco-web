"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/constants/services";

/** Service offering cards with icon, staggered scroll-reveal, hover glow. */
export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="servicios-heading"
          eyebrow="Lo que hacemos"
          title="Servicios pensados para cada momento"
          description="Desde una fiesta íntima hasta un evento corporativo de gran escala: cubrimos cada detalle técnico y creativo."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass-surface p-8 transition-shadow duration-300 hover:shadow-[0_0_40px_-10px_var(--color-brand-pink)]"
            >
              <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-orange text-white shadow-lg">
                <Icon className="size-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-display font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
