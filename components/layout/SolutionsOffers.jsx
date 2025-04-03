// ui elements
import { Check } from "lucide-react";

const features = [
  "Sistema desarrollado a su medida",
  "Seguridad e integridad de sus datos",
  "Acceso restringido a los empleados de acuerdo a sus funciones",
  "Reingeniería de procesos para mejorar sus tiempos y metodología",
];

export default function SolutionsOffers() {
  return (
    <div className="container px-4 py-12 md:px-16 max-w-7xl !mb-24">
      <h2 className="text-center text-primary font-bold text-lg md:text-2xl py-12 mb-10 uppercase">
        Consultores especializados en ofrecer soluciones de sistemas:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-lg md:max-w-4xl mx-auto items-center gap-y-6 md:gap-y-10 md:gap-x-20">
        {features.map((text, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="text-red-600 mt-1" size={20} />
            <p className="text-gray">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
