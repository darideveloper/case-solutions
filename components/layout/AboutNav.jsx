// ui elements
import Title from "@/components/ui/Title";
import Image from "next/image";


export default function AboutNav() {
  const navItems = [
    { id: 1, title: "Excelencia", link: "#excelencia" },
    { id: 2, title: "Innovación", link: "#innovacion" },
    { id: 3, title: "Compromiso", link: "#compromiso" },
    { id: 4, title: "Servicio", link: "#servicio" },
  ];

  return (
    <div className="min-h-[500px] w-full bg-primary relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/about-wave-bg.png')] bg-no-repeat bg-cover mix-blend-multiply h-full brightness-80" />
      <div className="flex flex-col md:flex-row py-12 md:py-0 relative z-10">
        {/* Left section (Logo on desktop) */}
        <div className="hidden md:flex w-full md:w-1/2 md:justify-center md:items-center bg-[#222652]">
          <Image
            width={400}
            height={400}
            src="/images/logo.svg"
            alt="Logo"
            className="h-[400px] w-[400px] opacity-40 brightness-50 mix-blend-color-burn"
          />
        </div>
        {/* Right section (Text + Navbar + Logo for mobile) */}
        <div className="w-full md:w-1/2 px-6 md:px-0">
          <div className="flex flex-col justify-center py-6 md:h-[500px] space-y-12">
            {/* Text content */}
            <div className="space-y-12">
              <Title className="!text-white">Acerca de nosotros</Title>
              <p className="text-white w-full md:w-3/4">
              Somos un equipo de consultores especializados en tecnología y sistemas, comprometidos con ofrecer soluciones eficientes, personalizadas y seguras para el desarrollo de sus proyectos.
              <br />
              <br />
              Contamos con una sólida experiencia en la creación e implementación de herramientas tecnológicas para la recolección, procesamiento y análisis de información, así como en el diseño de sistemas a la medida que responden a las necesidades específicas de cada cliente.
              </p>
            </div>
            {/* Nav + Logo (Mobile only layout) */}
            <div className="flex justify-between items-start md:block">
              {/* Nav links */}
              <div className="flex flex-col items-start flex-wrap md:flex-row md:items-center">
                {navItems.map((item, index) => (
                  <div key={item.id} className="relative flex flex-col">
                    <p
                      href={item.link}
                      className="text-white font-bold italic text-xl md:text-lg pb-5 md:pb-0 md:px-[30px]"
                    >
                      {item.title}
                    </p>
                    {/* Dividers */}
                    {index < navItems.length - 1 && (
                      <>
                        {/* Mobile: horizontal line */}
                        <div className="md:hidden h-[1px] w-[50px] bg-white mb-5" />
                        {/* Desktop: vertical line */}
                        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-[50px] w-[1px] bg-white" />
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* Logo (Mobile only) */}
              <div className="md:hidden pl-6 pt-2">
                <Image
                  src="/images/logo.svg"
                  width={200}
                  height={200}
                  alt="Logo"
                  className="max-h-[200px] max-w-[200px] opacity-40 grayscale brightness-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
