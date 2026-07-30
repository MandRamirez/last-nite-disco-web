"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryMedia } from "@/components/ui/GalleryMedia";
import { Modal } from "@/components/ui/Modal";
import type { GalleryItemResolved } from "@/lib/gallery-server";

type GalleryProps = {
  items: GalleryItemResolved[];
};

/** Masonry photo/video gallery with hover microinteractions and a lightbox modal. */
export function Gallery({ items }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-heading"
      className="relative bg-brand-bg px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          headingId="galeria-heading"
          eyebrow="Momentos"
          title="Nuestra Galería"
          description="Un vistazo a las fiestas, bodas y eventos que hicimos vibrar."
        />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((mediaItem, i) => (
            <motion.button
              key={mediaItem.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
              aria-label={`${mediaItem.type === "video" ? "Reproducir video" : "Ver imagen ampliada"}: ${mediaItem.alt}`}
            >
              <GalleryMedia
                item={mediaItem}
                variant="thumbnail"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              {mediaItem.type === "image" && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={activeItem !== null}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
        label={activeItem?.alt ?? "Contenido de galería"}
      >
        {activeItem && (
          <GalleryMedia
            item={activeItem}
            variant="full"
            className="max-h-[85vh] w-auto rounded-xl mx-auto"
          />
        )}
      </Modal>
    </section>
  );
}
