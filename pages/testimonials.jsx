// components
import Companies from "@/components/layout/Companies";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import TestimonialText from "@/components/layout/TestimonialText";
import DownloadCard from "@/components/ui/DownloadCard";
import Head from "next/head";

export default function Stories() {
  return (
    <Layout>
      <Head>
        <title>Casos de éxito | Case solutions</title>
      </Head>
      <Hero title="Testimonios" image="/images/stories.png" />
      <TestimonialText
        title={"Somos una empresa orientada al logro de resultados"}
        className="text-left md:text-left"
      >
        y a la satisfacción de las necesidades del cliente que a través del
        esfuerzo y profesionalismo hemos logrado objetivos importantes, tanto en
        la industria privada como en el gobierno.
      </TestimonialText>
      <Companies />
      <DownloadCard />
      <ContactService />
    </Layout>
  );
}
