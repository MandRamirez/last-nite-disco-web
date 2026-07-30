"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks } from "@/lib/constants/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/MobileNav";

/**
 * Sticky site header: transparent at the top of the page, gains a blurred
 * dark background once the user scrolls. Includes desktop nav + mobile menu.
 */
export function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand-pink after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="absolute right-4 sm:right-6 lg:right-8 md:hidden rounded-full p-2 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
        >
          {mobileOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
