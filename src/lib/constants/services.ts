import {
  Disc3,
  Volume2,
  Sparkles,
  PartyPopper,
  Briefcase,
  Heart,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Disc3,
    title: "DJ Profesional",
    description:
      "Sets personalizados que leen la pista y mantienen la energía toda la noche.",
  },
  {
    icon: Volume2,
    title: "Sonido",
    description:
      "Equipos de alta fidelidad, calibrados para espacios íntimos y grandes salones.",
  },
  {
    icon: Sparkles,
    title: "Iluminación",
    description:
      "Diseños lumínicos que transforman cualquier espacio en una experiencia.",
  },
  {
    icon: PartyPopper,
    title: "Eventos Privados",
    description:
      "Cumpleaños, aniversarios y celebraciones diseñadas a tu medida.",
  },
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description:
      "Producción profesional para lanzamientos, fiestas de fin de año y más.",
  },
  {
    icon: Heart,
    title: "Bodas",
    description: "La banda sonora perfecta para el día más importante.",
  },
];
