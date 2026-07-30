"use client";

import { motion } from "framer-motion";
import { MessageCircle, Images, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ParticleField } from "@/components/ui/ParticleField";
import { contact, siteConfig } from "@/lib/constants/site";
import { whatsappLink } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/** Full-viewport hero: logo, headline, dual CTAs, ambient animated glow. */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-brand-bg px-4 pt-24 pb-16"
    >
      {/* Ambient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-purple)_0%,_var(--color-brand-bg)_60%)] opacity-70" />
        <GlowOrb color="pink" size={520} className="-top-32 -left-24" speed="slow" />
        <GlowOrb color="orange" size={420} className="bottom-0 right-0" speed="slower" />
        <GlowOrb color="purple" size={380} className="top-1/3 right-1/4" speed="slow" />
        <ParticleField />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        <motion.div variants={item}>
          <Logo
            size="2xl"
            priority
            className="mx-auto h-auto w-56 sm:w-72 md:w-80 lg:w-96"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full glass-surface px-4 py-1.5 text-xs sm:text-sm font-medium text-white/80"
        >
          <MapPin className="size-4 text-brand-orange" aria-hidden="true" />
          {siteConfig.location.display}
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white text-glow-pink"
        >
          Tu fiesta{" "}
          <span className="gradient-text">comienza acá.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg sm:text-xl text-white/70 font-medium tracking-wide"
        >
          DJ <span aria-hidden="true">•</span> Sonido <span aria-hidden="true">•</span>{" "}
          Iluminación <span aria-hidden="true">•</span> Eventos
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            variant="primary"
            icon={MessageCircle}
            href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar por WhatsApp
          </Button>
          <Button variant="secondary" icon={Images} href="#galeria">
            Ver Galería
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
