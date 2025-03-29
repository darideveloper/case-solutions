import Title from "@/components/ui/Title";

const Footer = () => {
  return (
    <footer className="mt-10 max-w-full overflow-hidden">
      <div className="flex h-[200px] w-full items-center justify-center bg-[url('/images/footer.png')] bg-cover bg-center px-5">
        <div className="relative">
          <div>
            <Title
              isH1={false}
              className="w-50 text-base font-bold text-white italic md:w-full"
            >
              La solución tecnológica a la medida de tu negocio
            </Title>
            <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-white to-transparent" />
          </div>
          <img
            className="absolute top-0 -right-18 md:-top-12"
            alt="shape"
            src="/images/icons/half-circle.svg"
          />
        </div>
      </div>
      <div className="max-container w-full p-8 md:max-w-7xl mx-auto mt-12 flex items-start gap-11">
        <div className="hidden py-6 md:block md:w-2/12">
          <img alt="logo" className="w-31" src="/images/logo.svg" />
        </div>
        <div className="md:w-10/12">
          <Title
            isH1={false}
            className="mb-7 text-center text-gray-light italic md:text-start sm:text-xl"
          >
            software y consultoría
          </Title>
          <div className="flex w-full flex-col gap-11 md:flex-row md:items-start">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="text-primary text-sm">
                  <p className="mb-2 font-semibold">
                    Estamos a sus órdenes de:
                  </p>
                  <p className="flex items-center gap-4">
                    <img alt="clock" src="/images/icons/hours-clock.svg" />
                    Lunes a Viernes de 9:00 a 18:00 Sábado de 9:00 a 13:00
                  </p>
                </div>
                <div className="bg-primary h-0.5 w-16 md:h-auto md:w-0.5" />
                <div className="text-primary text-sm">
                  <p className="mb-2 font-semibold">WTC - World Trade Center</p>
                  <p className="flex items-center gap-4">
                    <img alt="location" src="/images/icons/location-glob.svg" />
                    Montecito 38 piso 28 Oficina 12, Colonia Nápoles, C.P.
                    03810, Delegación Benito Juárez, México, D.F
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-4 md:justify-start">
                <img alt="twitterx" src="/images/icons/twitterx.svg" />
                <img alt="facebook" src="/images/icons/facebook.svg" />
              </div>
            </div>
            <div className="my-2 flex justify-center md:hidden">
              <img alt="logo" className="h-auto w-31" src="/images/logo.svg" />
            </div>
            <div className="text-accent mb-11 flex flex-col items-center gap-4 text-sm md:w-md">
              <p className="font-bold text-accent">
                hamaro@casesolutions.com.mx
              </p>
              <p className="flex items-center gap-4 text-accent">
                <img alt="mail" src="/images/icons/mail.svg" />
                Escríbenos por correo
              </p>
              <div className="flex gap-5.5">
                <div className="text-center">
                  <p className="font-bold text-accent">(55) 1107-0478</p>
                  <p className="mt-3 flex items-center text-accent gap-4">
                    <img alt="phoneRed" src="/images/icons/phone-footer.svg" />
                    Llámanos
                  </p>
                </div>
                <div className="bg-accent w-0.5" />
                <div className="text-center">
                  <p className="font-bold text-accent">(55) 1107-0478</p>
                  <p className="mt-3 flex items-center text-accent gap-4">
                    <img alt="" src="/images/icons/fax.svg" />
                    Llámanos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-2 text-center text-sm font-semibold text-white">
        CASE Solutions | SOFTWARE Y CONSULTORÍA [2019] ©
        <span className="block font-extralight italic md:inline">
          Todos los Derechos Reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;


