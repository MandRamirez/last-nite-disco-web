"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { navLinks, contact } from "@/lib/constants/site";
import { whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

/** Full-screen slide-in navigation panel for small viewports. */
export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-nav"
          className="fixed inset-0 z-40 flex flex-col bg-brand-bg/98 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
        >
          <nav
            aria-label="Navegación principal móvil"
            className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.35 }}
                className="text-2xl font-display font-semibold text-white hover:text-brand-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
              >
                {link.label}
              </motion.a>
            ))}
            <Button
              variant="primary"
              icon={MessageCircle}
              href={whatsappLink(contact.whatsappNumber, contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              Reservar por WhatsApp
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
