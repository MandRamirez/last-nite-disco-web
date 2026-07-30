import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants/site";

const sizeMap = {
  sm: 40,
  md: 56,
  lg: 96,
  xl: 168,
  "2xl": 320,
};

type LogoProps = {
  size?: keyof typeof sizeMap;
  priority?: boolean;
  className?: string;
};

/** Brand logo — wraps the provided watermark PNG at /public/logo.png. */
export function Logo({ size = "md", priority = false, className }: LogoProps) {
  const px = sizeMap[size];
  return (
    <Image
      src="/logo.png"
      alt={`${siteConfig.name} — logo`}
      width={px}
      height={px}
      priority={priority}
      className={cn("select-none drop-shadow-[0_0_20px_rgba(234,29,135,0.45)]", className)}
    />
  );
}
