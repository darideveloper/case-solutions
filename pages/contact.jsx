// components
import ContactDetails from "@/components/layout/ContactDetails";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Hobelmos from "@/components/layout/Hobelmos";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title >Contactanos | Case solutions</title>
      </Head>
      <Hero title="Contactanos" image={"/images/hero-contact.png"} />
      <Hobelmos title={"Hablemos de su projecto"}>
        Envíenos un correo electrónico a{" "}
        <a href="mailto:hamaro@casesolutions.com.mx" className="font-bold">
          hamaro@casesolutions.com.mx
        </a>{" "}
        o complete el siguiente formulario y en breve un miembro de nuestro
        equipo se pondrá en contacto con usted,
      </Hobelmos>
      <ContactDetails />
      <ContactService />
    </Layout>
  );
}
