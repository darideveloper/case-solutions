// ui components
import Title from "@/components/ui/Title";

const ClientShowcase = () => {
  const clients = [
    {
      name: "EDF México",
      logo: "/images/brand/IEDF.png", // Replace with your actual image path", // Replace with your actual image path
      alt: "EDF México logo",
    },
    {
      name: "BRINKS",
      logo: "/images/brand/brasil.png", // Replace with your actual image path
      alt: "BRINKS logo",
    },
    {
      name: "TV AZTECA",
      logo: "/images/brand/tvazteca.png", // Replace with your actual image path
      alt: "TV AZTECA logo",
    },
    {
      name: "AGC AWARD",
      logo: "/images/brand/CasaAmaro.png", // Replace with your actual image path
      alt: "AGC AWARD logo",
    },
    {
      name: "SEMARNAT",
      logo: "/images/brand/semarnat.png", // Replace with your actual image path
      alt: "SEMARNAT logo",
    },
    {
      name: "PGJ",
      logo: "/images/brand/PGJ.png", // Replace with your actual image path
      alt: "PGJ logo",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          className="text-center uppercase italic text-primary mb-12 text-2xl"
          isH1={false}
        >
          NUESTROS CLIENTES
        </Title>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-32"
            >
              <img
                src={client.logo}
                alt={client.alt}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;
