"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Avatar } from "@/components/ui/Avatar";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/constants/testimonials";

/** Client testimonial cards — horizontal scroll-snap on mobile, grid on desktop. */
export function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="testimonios-heading"
          eyebrow="Lo que dicen"
          title="Historias de nuestras pistas"
          description="Cada evento es distinto — esto es lo que nos dejaron quienes ya vivieron la experiencia."
        />

        <div className="mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1, ease: "easeOut" }}
              className="relative min-w-[85%] shrink-0 snap-center rounded-2xl glass-surface p-7 sm:min-w-0 sm:shrink"
            >
              <Quote
                aria-hidden="true"
                className="size-8 text-brand-pink/40"
              />
              <blockquote className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} size={44} />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.eventType}</div>
                </div>
              </figcaption>
              <div className="mt-4">
                <StarRating rating={t.rating} />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
