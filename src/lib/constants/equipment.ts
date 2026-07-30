import {
  Speaker,
  Lightbulb,
  Settings2,
  type LucideIcon,
} from "lucide-react";

export type EquipmentItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const equipment: EquipmentItem[] = [
  {
    icon: Speaker,
    title: "Sonido Profesional",
    description: "Equipo de sonido de buena potencia, adaptado al tamaño de cada evento.",
  },
  {
    icon: Lightbulb,
    title: "Iluminación LED",
    description: "Juegos de luces que acompañan el ritmo y dan ambiente a la pista.",
  },
  {
    icon: Settings2,
    title: "Setup Completo",
    description: "Instalación, pruebas de sonido y técnico presente durante todo el evento.",
  },
];
