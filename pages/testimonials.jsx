// components
import Companies from "@/components/layout/Companies";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import TestimonialText from "@/components/layout/TestimonialText";
import DownloadCard from "@/components/ui/DownloadCard";
import Head from "next/head";

const metadata = {
  title: "Casos de éxito | Case solutions",
  description: "CASE Solutions Success Stories: Explore our proven track record in Mexico with case studies featuring leading clients like Televisa, Tv Azteca, Bayer, SEMAR, PGJ, Cablemás, and Brinks. Discover how our tailored technology solutions have driven success for both private and government sectors."
}

export default function Stories() {
  return (
    <Layout>
      <Hero title="Casos de éxito" image="/images/stories.png" />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <TestimonialText
        title={"Somos una empresa orientada al logro de resultados"}
        className="text-left md:text-left"
      >
        y a la satisfacción de las necesidades del cliente que a través del
        esfuerzo y profesionalismo hemos logrado objetivos importantes, tanto en
        la industria privada como en el gobierno.
      </TestimonialText>
      <Companies />
      <ContactService />
    </Layout>
  );
}
