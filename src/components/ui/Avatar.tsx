import { cn } from "@/lib/utils";

const GRADIENTS = [
  "from-brand-pink to-brand-purple",
  "from-brand-orange to-brand-pink",
  "from-brand-purple to-brand-orange",
  "from-brand-pink to-brand-orange",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/** Deterministic gradient pick based on the name, so it stays stable across renders. */
function gradientForName(name: string) {
  const sum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return GRADIENTS[sum % GRADIENTS.length];
}

type AvatarProps = {
  name: string;
  size?: number;
  className?: string;
};

/** Abstract circular gradient avatar showing a person's initials — no stock photos. */
export function Avatar({ name, size = 48, className }: AvatarProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white",
        gradientForName(name),
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {getInitials(name)}
    </div>
  );
}
