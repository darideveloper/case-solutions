import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex flex-row justify-between mx-auto items-center p-4 w-[90%]">
        <div className="flex flex-row items-center">
          <Image src="/images/logo.svg" alt="Logo" width={167} height={146} />
          <h3 className="mt-[-40px] ml-[20px] underline underline-offset-4 text-primary font-bold">
            La solución tecnológica a la medida de tu negocio
          </h3>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 mt-[-50px]">
            {/* <!-- Email contact --> */}
            <div className="flex flex-col items-center md:items-end">
              <p className="text-accent font-bold">correo@casesolutions.mx</p>
              <div className="flex items-center gap-2">
                {/* <!-- Email icon --> */}
                <Mail className="text-accent" />
                <p className="text-accent">Mandar un mensaje</p>
              </div>
            </div>
            {/* <!-- Divider --> */}
            <div className="hidden md:block w-px h-12 bg-accent mx-4"></div>
            {/* <!-- Phone contact --> */}
            <div className="flex flex-col items-center md:items-end">
              <p className="text-accent font-bold">(55) 1107-0478</p>
              <div className="flex items-center gap-2">
                {/* <!-- Phone icon --> */}
                <Phone className="text-accent" />
                <p className="text-accent">Llámanos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto w-[65%] mt-[-5px]">
        <div className="hidden md:flex w-[90%] justify-between mt-[-50px]">
          <Link
            href="#"
            className="text-primary font-bold text-lg relative active-nav"
          >
            Inicio
          </Link>
          <Link href="#" className="text-primary font-bold text-lg relative">
            Quiénes somos
          </Link>
          <Link href="#" className="text-primary font-bold text-lg relative">
            Servicios
          </Link>
          <Link href="#" className="text-primary font-bold text-lg relative">
            Productos
          </Link>
          <Link href="#" className="text-primary font-bold text-lg relative">
            Casos de éxito
          </Link>
          <Link href="#" className="text-primary font-bold text-lg relative">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
