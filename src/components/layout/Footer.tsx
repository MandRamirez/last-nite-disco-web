import { MessageCircle, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, contact, navLinks } from "@/lib/constants/site";
import { whatsappLink } from "@/lib/utils";

const socialLinks = [
  { label: "Instagram", href: contact.instagram, icon: InstagramIcon },
  { label: "Facebook", href: contact.facebook, icon: FacebookIcon },
  {
    label: "WhatsApp",
    href: whatsappLink(contact.whatsappNumber, contact.whatsappMessage),
    icon: MessageCircle,
  },
  { label: "Google Maps", href: contact.maps, icon: MapPin },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="font-display font-bold text-lg text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="max-w-xs text-sm text-white/60">{siteConfig.description}</p>
            <a
              href={contact.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-brand-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
            >
              <MapPin className="size-4 text-brand-orange" aria-hidden="true" />
              {siteConfig.location.display}
            </a>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-col items-center gap-3 md:items-start">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="text-sm font-semibold text-white">Seguinos</span>
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full glass-surface text-white hover:text-brand-pink hover:border-brand-pink/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
