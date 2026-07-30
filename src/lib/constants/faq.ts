export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Recomendamos reservar con al menos 4 a 6 semanas de anticipación, especialmente para bodas y fechas de temporada alta. Igual, contactanos: siempre intentamos hacer lo posible por tu fecha.",
  },
  {
    question: "¿Qué incluye el servicio de DJ?",
    answer:
      "Incluye DJ profesional, equipo de sonido acorde al espacio, coordinación musical previa al evento y técnico presente durante toda la fiesta.",
  },
  {
    question: "¿Puedo elegir el género musical?",
    answer:
      "Sí. Armamos el repertorio junto a vos antes del evento y el DJ lee la pista en vivo para mantener siempre la energía correcta.",
  },
  {
    question: "¿Trabajan en eventos fuera de la ciudad?",
    answer:
      "Depende de la ubicación, lo vemos caso a caso. Contanos dónde es tu evento y coordinamos disponibilidad y traslado.",
  },
  {
    question: "¿Qué pasa si necesito cancelar o reprogramar?",
    answer:
      "Contamos con una política flexible de reprogramación. Escribinos apenas lo sepas y buscamos juntos la mejor solución.",
  },
];
