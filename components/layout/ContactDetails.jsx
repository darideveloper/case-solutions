// ui elements
import Button from "@/components/ui/Button";
import Socials from "@/components/ui/Socials";
import Image from "next/image";

// Hooks
import { useEffect, useState } from "react";

// Libs
import Swal from 'sweetalert2'


function ContactDetails() {

  const [currentPage, setcurrentPage] = useState("");

  useEffect(() => {
    // Get currentPage when page loads
    const currentPage = window.location.href;
    setcurrentPage(currentPage);

    // Show sweet alert if thanks is in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const thanks = urlParams.get("thanks");
    if (thanks) {
      Swal.fire({
        icon: 'success',
        title: '¡Gracias por contactarnos!',
        text: 'Nos pondremos en contacto contigo lo antes posible.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#2B2F67',
      });
    }
  }, []);

  return (
    <div className="container relative p-6 md:p-2 md:max-w-7xl mx-auto flex flex-col gap-x-10 gap-y-32 md:flex-row md:justify-between">
      <div className="text-primary max-w-xl mx-auto">
        <h1 className="mb-9 text-xl font-bold italic md:text-[32px]">
          Disponibles para usted en:
        </h1>
        <div className="mb-10">
          <h1 className="mb-4.5 text-xl font-semibold">
            WTC - World Trade Center
          </h1>
          <div className="flex items-center gap-x-8">
            <Image width={40} height={40} src={"/images/icons/location-glob.svg"} />
            <p>
              Montecito 38 piso 28 Oficina 12 Colonia Nápoles , C.P. 03810.
              Delegación Benito Juárez México, CDMX.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="mb-4.5 text-xl font-semibold">
            Estamos a sus órdenes de:
          </h1>
          <div className="flex items-center gap-x-8">
            <Image width={40} height={40} src={"/images/icons/hours-clock.svg"} />
            <p>Lunes a Viernes de 9:00 a 18:00 Sábado de 9:00 a 13:00</p>
          </div>
        </div>

        {/* Social links */}
        <Socials />

      </div>
      <div className="w-full max-w-xl mx-auto">
        <h3 className="text-primary mb-9 text-xl font-bold italic md:text-[32px]">
          Formulario
        </h3>
        <form action="https://services.darideveloper.com/contact-form/" method="post" className="flex flex-col items-center gap-y-13">
          <div className="flex w-full items-center gap-x-3.5">
            <Image height={40} width={40} src={"/images/icons/contact.svg"} className="h-10 w-10" />
            <input
              type="text"
              placeholder="Nombre Completo*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
              name="name"
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <Image width={40} height={40} src={"/images/icons/message-glob.svg"} className="h-10 w-10" />
            <input
              type="text"
              placeholder="Empresa"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              name="company"
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <Image width={40} height={40} src={"/images/icons/email.svg"} className="h-10 w-10" />
            <input
              type="email"
              placeholder="Email*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
              name="email"
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <Image width={40} height={40} src={"/images/icons/phone-svg.png"} className="h-10 w-10" />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Teléfono*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
            />
          </div>
          <div className="flex w-full items-center gap-x-3.5">
            <Image width={40} height={40} src={"/images/icons/message.svg"} className="h-10 w-10" />
            <input
              type="text"
              placeholder="Mensaje*"
              className="border-primary text-primary w-full border-b p-2 font-semibold focus:outline-none"
              required
              name="message"
            />
          </div>
          <Button
            type="submit"
            className={`
              bg-primary
            `}
          >
            Enviar
          </Button>    
          <input type="hidden" name="user" id="user" value="CaseSolutions"/>
          <input type="hidden" name="api_key" id="api_key" value="k4SWrMcgb0BiR0wmC3F9Ib2w"/>
          <input type="hidden" name="subject" id="subject" value="Contacto desde tu web"/>
          <input type="hidden" name="redirect" id="subject" value={`${currentPage}?thanks=true`}/>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
