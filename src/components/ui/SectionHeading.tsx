"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingId: string;
};

/**
 * Consistent section title used across all page sections, with a
 * scroll-triggered fade/slide-in animation.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  headingId,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </span>
      )}
      <h2
        id={headingId}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
