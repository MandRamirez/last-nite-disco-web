import { cn } from "@/lib/utils";

type Particle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

/** Deterministic pseudo-random generator (seeded) — avoids SSR/client hydration mismatch. */
function seededParticles(count: number): Particle[] {
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: count }, () => ({
    left: rand() * 100,
    top: rand() * 100,
    size: 1 + rand() * 2.5,
    delay: rand() * 4,
    duration: 3 + rand() * 4,
  }));
}

const particles = seededParticles(30);

/**
 * Subtle twinkling star-like particles for ambient background depth.
 * Decorative only — hidden from assistive tech.
 */
export function ParticleField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
