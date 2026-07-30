import { Star } from "lucide-react";

/** Renders a static 1-5 star rating. Exposed to screen readers as text. */
export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div role="img" aria-label={`${rating} de ${max} estrellas`} className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rating
              ? "size-4 fill-brand-orange text-brand-orange"
              : "size-4 text-white/20"
          }
        />
      ))}
    </div>
  );
}
