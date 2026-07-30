import { cn } from "@/lib/utils";

type GlowOrbProps = {
  color?: "pink" | "purple" | "orange";
  size?: number;
  className?: string;
  speed?: "slow" | "slower";
};

const colorMap = {
  pink: "bg-brand-pink",
  purple: "bg-brand-purple",
  orange: "bg-brand-orange",
};

/**
 * Purely decorative, blurred gradient blob used to build the ambient
 * synthwave glow behind hero/section content. `aria-hidden` — never
 * conveys content. Respects prefers-reduced-motion via the global CSS rule.
 */
export function GlowOrb({
  color = "pink",
  size = 480,
  className,
  speed = "slow",
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full opacity-40 blur-[100px]",
        colorMap[color],
        speed === "slow" ? "animate-float-slow" : "animate-float-slower",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
