// components
import ContactDetails from "@/components/layout/ContactDetails";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Hobelmos from "@/components/layout/Hobelmos";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const metadata = {
  title: "Contactanos | Case solutions",
  description: "CASE Solutions Contact: Reach out to our team in Mexico City via email at ktehozol@casesolutions.com.mx or call (55) 1107-0478 to discuss your project. Visit us at the WTC during our business hours: Monday-Friday 9-18, Saturday 9-13.",
}

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Hero title="Contactanos" image={"/images/hero-contact.png"} />
      <Hobelmos title={"Hablemos de su projecto"}>
        Envíenos un correo electrónico a{" "}
        <a href="mailto:ktehozol@casesolutions.com.mx" className="font-bold">
          ktehozol@casesolutions.com.mx
        </a>{" "}
        o complete el siguiente formulario y en breve un miembro de nuestro
        equipo se pondrá en contacto con usted,
      </Hobelmos>
      <ContactDetails />
      <ContactService />
    </Layout>
  );
}
