// ui elements
import Button from "@/components/ui/Button";

function ContactDetails() {
  return (
    <div className="relative p-6 md:p-2 md:max-w-7xl mx-auto flex flex-col gap-x-10 gap-y-32 md:flex-row md:justify-between">
      <div className="text-primary max-w-xl mx-auto">
        <h1 className="mb-9 text-xl font-bold italic md:text-[32px]">
          Disponibles para usted en:
        </h1>
        <div className="mb-10">
          <h1 className="mb-4.5 text-xl font-semibold">
            WTC - World Trade Center
          </h1>
          <div className="flex items-center gap-x-8">
            <img src={"/images/icons/location-glob.svg"} />
            <p>
              Montecito 38 piso 28 Oficina 12 Colonia Nápoles , C.P. 03810.
              Delegación Benito Juárez México, CDMX.
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-4.5 text-xl font-semibold">
            Estamos a sus órdenes de:
          </h1>
          <div className="flex items-center gap-x-8">
            <img src={"/images/icons/hours-clock.svg"} />
            <p>Lunes a Viernes de 9:00 a 18:00 Sábado de 9:00 a 13:00</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xl mx-auto">
        <h3 className="text-primary mb-9 text-xl font-bold italic md:text-[32px]">
          Formulario
        </h3>
        <form action="#" method="post" className="flex flex-col items-center gap-y-13">
          <div className="flex w-full items-center gap-x-3.5">
            <img src={"/images/icons/contact.svg"} className="h-10 w-10" />
            <input
              type="text"
              placeholder="Nombre Completo*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <img src={"/images/icons/message-glob.svg"} className="h-10 w-10" />
            <input
              type="text"
              placeholder="Empresa"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <img src={"/images/icons/email.svg"} className="h-10 w-10" />
            <input
              type="email"
              placeholder="Email*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <img src={"/images/icons/whatsapp.svg"} className="h-10 w-10" />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefpono*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <img src={"/images/icons/message.svg"} className="h-10 w-10" />
            <input
              type="text"
              placeholder="Mensaje*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
            />
          </div>
          <Button variant="primary" type="submit">Enviar</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
