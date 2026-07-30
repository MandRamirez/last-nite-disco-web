"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/constants/site";
import { whatsappLink } from "@/lib/utils";

/** Final full-bleed call to action with a large pulsing WhatsApp button. */
export function FinalCTA() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="relative overflow-hidden bg-brand-bg px-4 py-28 sm:py-36"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-purple)_0%,_var(--color-brand-bg)_70%)] opacity-80" />
        <GlowOrb color="pink" size={560} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2
          id="contacto-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white text-glow-pink"
        >
          ¿Listo para tu próximo evento?
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Contanos tu fecha y hacemos que la pista no pare de bailar.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="rounded-full animate-pulse-glow">
            <Button
              variant="primary"
              icon={MessageCircle}
              href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 text-lg"
            >
              Escribinos por WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
