"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: never;
  rel?: never;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-pink to-brand-orange text-white shadow-[0_0_25px_-5px_var(--color-brand-pink)] hover:shadow-[0_0_35px_-3px_var(--color-brand-pink)]",
  secondary:
    "glass-surface text-white hover:border-brand-pink/60 hover:bg-white/5",
  ghost: "text-white/80 hover:text-white underline-offset-4 hover:underline",
};

/**
 * Shared CTA button with primary/secondary/ghost variants and a subtle
 * hover/tap microinteraction. Renders as an anchor when `href` is provided.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", icon: Icon, className, children } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sm sm:text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg",
    variantStyles[variant],
    className,
  );

  const content = (
    <>
      {Icon && <Icon className="size-5" aria-hidden="true" />}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {content}
    </motion.button>
  );
}
