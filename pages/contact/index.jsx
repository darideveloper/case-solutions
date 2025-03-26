import Hero from "@/components/layout/Hero";
import Hobelmos from "@/components/layout/Hobelmos";
import Navbar from "@/components/layout/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Hero title="Contactanos" image={"/images/hero-contact.png"} />
      <Hobelmos title={"Contactanos"}>
        Envíenos un correo electrónico a <span className="font-bold">hamaro@casesolutions.com.mx</span> o complete
        el siguiente formulario y en breve un miembro de nuestro equipo se
        pondrá en contacto con usted,
      </Hobelmos>
    </div>
  );
}
