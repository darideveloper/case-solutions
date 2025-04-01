import React from "react";
import Button from "@/components/ui/Button";

const DownloadCard = () => {
  const presentations = [
    "Presentación SAVEHR",
    "Presentación de Dirección",
    "Presentación de Catálogos",
    "Presentación de Llantas",
    "Presentación de Mantenimiento",
    "Presentación de Seguridad",
    "Presentación de Gestoria",
  ];

  return (
    <div className="relative mx-auto mt-38 flex w-11/12 md:max-w-7xl flex-col-reverse bg-white shadow-lg shadow-gray md:flex-row lg:flex-row">
      <div className="absolute bottom-0 left-0 w-full md:relative lg:w-1/2">
        <img
          src={`/images/download-card-bg.png`}
          alt="Background"
          className="h-full w-full rounded-l-lg object-cover"
        />
      </div>
      <div className="w-full px-4 lg:w-1/2 lg:px-8 z-[-0]">
        <h2 className="text-primary mt-16 mb-12 text-center text-2xl font-bold">
          DESCARGABLES
        </h2>

        <div className="grid w-full grid-cols-1 place-items-center gap-1 md:grid-cols-2 lg:place-items-start">
          {presentations.map((presentation, index) => (
            <button
              key={index}
              className="text-primary text-left text-base text-xl"
            >
              {presentation}
            </button>
          ))}
        </div>

        <div className="mt-20 mb-40 flex justify-center md:mt-8 md:mb-8">
          <Button variant="primary">Descargar todas las presentaciones</Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
