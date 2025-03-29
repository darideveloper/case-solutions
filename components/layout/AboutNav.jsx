import Title from "../ui/Title";

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
      <div className="absolute inset-0 bg-[url('/images/about-wave-bg.png')] bg-no-repeat bg-cover mix-blend-multiply h-full" />

      <div className="flex flex-col md:flex-row py-12 md:py-0 relative z-10">
        {/* Left section (Logo on desktop) */}
        <div className="hidden md:flex w-full md:w-1/2 md:justify-center md:items-center">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="h-[400px] w-[400px] opacity-40 grayscale"
          />
        </div>

        {/* Right section (Text + Navbar + Logo for mobile) */}
        <div className="w-full md:w-1/2 px-6 md:px-0">
          <div className="flex flex-col justify-center py-6 md:h-[500px] space-y-12">
            {/* Text content */}
            <div className="space-y-12">
              <Title>Acerca de nosotros</Title>
              <p className="text-white w-full md:w-3/4 lg:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>

            {/* Nav + Logo (Mobile only layout) */}
            <div className="flex justify-between items-start md:block">
              {/* Nav links */}
              <div className="flex flex-col items-start md:flex-row md:items-center">
                {navItems.map((item, index) => (
                  <div key={item.id} className="relative flex flex-col">
                    <a
                      href={item.link}
                      className="text-white font-bold italic text-lg pb-4 md:pb-0 md:px-[30px]"
                    >
                      {item.title}
                    </a>

                    {/* Dividers */}
                    {index < navItems.length - 1 && (
                      <>
                        {/* Mobile: horizontal line */}
                        <div className="md:hidden h-[1px] w-[50px] bg-white mb-4" />
                        {/* Desktop: vertical line */}
                        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-[50px] w-[1px] bg-white" />
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Logo (Mobile only) */}
              <div className="md:hidden pl-6 pt-2">
                <img
                  src="/images/logo.svg"
                  alt="Logo"
                  className="max-h-[200px] max-w-[200px] opacity-40 grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
