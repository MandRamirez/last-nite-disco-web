/**
 * Central brand + contact configuration.
 * Update values here to propagate across the whole site.
 */
export const siteConfig = {
  name: "Last Nite Disco",
  shortName: "Last Nite",
  tagline: "Tu fiesta comienza acá.",
  description:
    "DJ, sonido e iluminación profesional en Rivera, Uruguay, para bodas, cumpleaños y eventos corporativos. Convertimos cada celebración en una experiencia inolvidable.",
  // TODO: replace with the final production domain once deployed.
  url: "https://lastnitedisco.com",
  locale: "es_UY",
  location: {
    city: "Rivera",
    country: "Uruguay",
    display: "Rivera, Uruguay",
    lat: -30.9107364,
    lng: -55.5440347,
  },
  keywords: [
    "DJ para eventos",
    "DJ Rivera Uruguay",
    "DJ bodas",
    "sonido para fiestas",
    "iluminación para eventos",
    "DJ Uruguay",
    "eventos corporativos DJ",
    "Last Nite Disco",
  ],
};

export const contact = {
  whatsappNumber: "59898688661", // digits only, used for wa.me links
  whatsappDisplay: "+598 98 688 661",
  whatsappMessage: "Hola! Quiero consultar disponibilidad para mi evento.",
  instagram: "https://www.instagram.com/lastnitedisco/",
  instagramHandle: "@lastnitedisco",
  // Facebook not provided yet — placeholder, safe to replace.
  facebook: "#",
  maps: "https://maps.app.goo.gl/GGMvrrczsk52Uvnd6",
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipamiento", href: "#equipamiento" },
  { label: "Contacto", href: "#contacto" },
];
