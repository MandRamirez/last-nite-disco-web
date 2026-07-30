import Image from "next/image";
import { ImageIcon, Video as VideoIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItemResolved } from "@/lib/gallery-server";

type GalleryMediaProps = {
  item: GalleryItemResolved;
  /** "thumbnail" for the grid tile, "full" for the lightbox modal. */
  variant?: "thumbnail" | "full";
  className?: string;
};

/**
 * Renders a gallery photo or video. Falls back to an elegant synthwave
 * gradient placeholder (no external requests, no broken media icon) when
 * the referenced file isn't present on disk yet.
 */
export function GalleryMedia({ item, variant = "thumbnail", className }: GalleryMediaProps) {
  const { type, alt, tall } = item;

  if (!item.available) {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center bg-gradient-to-br from-brand-purple via-brand-pink/60 to-brand-orange/70",
          tall ? "aspect-3/4" : "aspect-4/3",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        {type === "video" ? (
          <VideoIcon aria-hidden="true" className="size-10 text-white/50" />
        ) : (
          <ImageIcon aria-hidden="true" className="size-10 text-white/50" />
        )}
      </div>
    );
  }

  if (type === "video") {
    if (variant === "full") {
      return (
        <video
          src={item.src}
          controls
          autoPlay
          className={cn("w-full h-auto rounded-xl", className)}
        >
          Tu navegador no soporta la reproducción de video.
        </video>
      );
    }

    const hasPoster = Boolean(item.poster && item.posterAvailable);

    return (
      <div className={cn("relative w-full", tall ? "aspect-3/4" : "aspect-4/3", className)}>
        {hasPoster ? (
          <Image
            src={item.poster as string}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <video
            src={item.src}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
          <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-brand-purple shadow-lg">
            <Play className="size-6 translate-x-0.5" aria-hidden="true" fill="currentColor" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={item.src}
      alt={alt}
      width={800}
      height={tall ? 1000 : 600}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className={cn("w-full h-auto object-cover", className)}
    />
  );
}
