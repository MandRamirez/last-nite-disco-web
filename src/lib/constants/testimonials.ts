/**
 * Placeholder testimonials — replace with real client feedback later.
 * Avatars are generated from initials (see components/ui/Avatar.tsx), no stock photos.
 */
export type Testimonial = {
  name: string;
  eventType: string;
  quote: string;
  rating: number; // 1-5
};

export const testimonials: Testimonial[] = [
  {
    name: "Sofía R.",
    eventType: "Boda",
    quote:
      "La pista no paró de bailar en toda la noche. Superó completamente nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Martín G.",
    eventType: "Cumpleaños 30",
    quote:
      "Profesionales de principio a fin. El sonido y las luces fueron espectaculares.",
    rating: 5,
  },
  {
    name: "Valentina P.",
    eventType: "Evento Corporativo",
    quote: "Elevaron por completo el nivel de nuestra fiesta de fin de año.",
    rating: 5,
  },
  {
    name: "Nicolás F.",
    eventType: "Cumpleaños",
    quote: "Leyeron perfecto el ambiente de la fiesta. Totalmente recomendados.",
    rating: 5,
  },
];
