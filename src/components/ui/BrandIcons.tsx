import type { SVGProps } from "react";

/**
 * Lucide-react dropped brand/logo glyphs (Instagram, Facebook, etc.) from
 * its icon set. These hand-drawn replacements match Lucide's stroke
 * language (24x24 viewBox, 2px round stroke) so the footer's social icons
 * stay visually consistent with the rest of the UI.
 */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14 8.5h-1.5A1.5 1.5 0 0 0 11 10v2M9 12h4.5M12.5 12v6" />
    </svg>
  );
}
