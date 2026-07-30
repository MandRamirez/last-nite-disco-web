"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig, contact } from "@/lib/constants/site";

const mapEmbedSrc = `https://www.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}&z=16&output=embed`;

/** Location section: quick map + address card, placed right after the hero. */
export function Location() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          headingId="ubicacion-heading"
          eyebrow="Ubicación"
          title="¿Dónde estamos?"
          description="Con base en Rivera, coordinamos la logística según dónde sea tu evento."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-brand-bg-elevated/40"
        >
          <div className="aspect-16/9 w-full">
            <iframe
              src={mapEmbedSrc}
              title={`Mapa de ubicación en ${siteConfig.location.display}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.3] contrast-[1.1] invert-[0.92] hue-rotate-180"
            />
          </div>

          <div className="flex flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="size-6 shrink-0 text-brand-pink" aria-hidden="true" />
              <p className="text-lg font-display font-semibold text-white">
                {siteConfig.location.display}
              </p>
            </div>
            <Button
              variant="secondary"
              icon={Navigation}
              href={contact.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
