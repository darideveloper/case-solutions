// icons
import { Menu } from "lucide-react";

// libs
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// ui elements
import NavLink from "@/components/ui/NavLink";

const links = [
  { href: "/", text: "Inicio" },
  { href: "/about", text: "Quiénes somos" },
  { href: "/services", text: "Servicios" },
  { href: "/products", text: "Productos" },
  { href: "/testimonials", text: "Casos de éxito" },
  { href: "/contact", text: "Contacto" },
];

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update active link based on current route
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <nav className="max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="relative flex items-center justify-center py-4 px-4 md:justify-start">
          {/* Mobile menu button - moved to left */}
          <button
            className="absolute left-4 md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-accent" />
          </button>

          {/* Logo - centered on mobile */}
          <Image
            src="/images/logo.svg"
            className="mx-auto md:mx-0"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
        <div className={`w-full ${menuOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:justify-between p-0 md:p-4 w-full">
            <div className="slogan-address flex flex-col md:flex-row md:justify-between w-full p-0 md:p-4">
              <div className="slogan mb-4 md:mb-0 bg-primary md:bg-transparent py-4 md:py-0">
                <h3 className="px-4 md:px-0 md:p-4 text-white md:text-primary font-bold underline underline-offset-6 decoration-2 decoration-gray-light">
                  La solución tecnológica a la medida de tu negocio
                </h3>
              </div>
              <div className="address hidden md:flex flex-col md:flex-row">
                <div className="flex gap-2 mb-4 md:mb-0">
                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-accent font-bold">
                      ktehozol@casesolutions.com.mx
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/icons/mail.png"
                        alt="Email"
                        width={22}
                        height={22}
                        className="mt-1"
                      />
                      <p className="text-accent">Mandar un mensaje</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-accent mx-4"></div>
                <div className="flex flex-col items-start md:items-center">
                  <p className="text-accent font-bold text-nowrap">
                    (55) 1107-0478
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icons/phone.png"
                      alt="Phone"
                      width={22}
                      height={22}
                    />
                    <p className="text-accent">Llámanos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-8 max-w-4xl md:mt-[-10px] mb-4">
              <div className="nav w-full">
                <ul className="flex flex-col md:flex-row md:justify-between w-full">
                  {links.map((link, index) => (
                    <li key={index} className="py-5 md:py-0">
                      <NavLink
                        active={activeLink === link.href}
                        href={link.href}
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:hidden secondary-logo flex flex-col items-center justify-center py-8">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <div className="address-phone md:hidden">
                  <div className="address flex md:hidden flex-col gap-2">
                    <div className="flex gap-2 mb-4 md:mb-0">
                      <div className="flex flex-col items-start md:items-end ">
                        <p className="text-accent font-bold">
                          ktehozol@casesolutions.com.mx
                        </p>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/images/icons/mail.png"
                            alt="Email"
                            width={22}
                            height={22}
                            className="mt-1"
                          />
                          <p className="text-accent">Mandar un mensaje</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-center">
                      <p className="text-accent font-bold text-nowrap">
                        (55) 1107-0478
                      </p>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/icons/phone.png"
                          alt="Phone"
                          width={22}
                          height={22}
                        />
                        <p className="text-accent">Llámanos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
