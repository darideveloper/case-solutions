import { Clock, Phone, Printer, Mail } from "lucide-react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <footer className="w-full relative">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src="/images/footer.png"
          alt="Modern skyscraper"
          className="w-full min-h-[200px] md:h-full object-cover mix-blend-darken"
        />
        <Title
          isH1={false}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base md:text-3xl font-light text-center bg-gradient-to-r from-white to-transparent pb-[2px] bg-bottom bg-no-repeat bg-[length:100%_1px] inline px-2"
        >
          La solución tecnológica a la medida de tu negocio
        </Title>
      </div>

      {/* Main Content Section */}
      <div className="container relative max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center md:col-span-1 mb-6 md:mb-0">
            <img src="/images/logo.svg" alt="Logo" className="w-40" />
          </div>

          {/* Content Section */}
          <div className="md:col-span-5 text-center md:text-left space-y-8 md:space-y-6">
            <Title isH1={false} className="text-gray text-xl mb-4">
              software y consultoría
            </Title>

            {/* Hours and Location */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-4">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-primary font-bold mb-4">
                  Estamos a sus órdenes de:
                </h3>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <Clock className="w-12 h-12 text-primary" />
                  <div>
                    <p className="text-primary">
                      lunes a viernes de 9:00 a 18:00
                    </p>
                    <p className="text-primary">sábados de 9:00 a 14:00</p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-[2px] self-stretch bg-primary"></div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-primary font-bold mb-4">
                  WTC - World Trade Center
                </h3>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <Clock className="w-12 h-12 text-primary" />
                  <div>
                    <p className="text-primary">
                      Montecito 38 piso 28 Oficina 12 Colonia Nápoles, C.P.
                      03810
                    </p>
                    <p className="text-primary">
                      Delegación Benito Juárez México, D.F.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-2 md:col-start-7 text-center space-y-6">
            <div>
              <h3 className="text-accent font-bold mb-4">
                hamaro@casesolutions.com.mx
              </h3>
              <div className="flex gap-2 items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
                <span className="text-accent">Escríbenos por correo</span>
              </div>

              {/* Phone and Fax */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 mt-8">
                <div className="text-center md:text-right md:pr-4">
                  <h3 className="text-accent font-bold break-all mb-2">
                    (55) 1107-0478
                  </h3>
                  <div className="flex gap-2 items-center justify-center md:justify-end">
                    <Phone className="w-8 h-8 text-accent" />
                    <span className="text-accent">Llámenos</span>
                  </div>
                </div>

                <div className="hidden md:block w-[2px] h-8 mx-4 bg-accent"></div>

                <div className="text-center md:text-left md:pl-4">
                  <h3 className="text-accent font-bold break-all mb-2">
                    (55) 1107-0478
                  </h3>
                  <div className="flex gap-2 items-center justify-center md:justify-start">
                    <Printer className="w-8 h-8 text-accent" />
                    <span className="text-accent">Fax</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
