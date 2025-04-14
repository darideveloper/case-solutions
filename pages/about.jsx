// UI Elements
import ProductShowcase from "@/components/ui/ShowcaseComponent";

// components
import AboutNav from "@/components/layout/AboutNav";
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import QuoteDescription from "@/components/layout/QuoteDescription";
import Head from "next/head";


const metadata = {
  title: "Quiénes somos | Case solutions",
  description: "CASE Solutions: Learn about our results-oriented technology company in Mexico, committed to customer satisfaction. Discover our mission to be a top software developer in Latin America and our vision to empower businesses with innovative software solutions."
}

const cardInfo1 = {
  imagePosition: "left", // 'left' or 'right'
  title: "NUESTRA MISIÓN",
  subtitle: "",
  description: "Posicionarse en el mercado como una de las mejores empresas de desarrollo en México y Latinoamérica mediante la plena satisfacción de los requerimientos de sus clientes, empleando al personal mejor calificado en cuanto a habilidades y conocimientos informáticos.",
  imageSrc: "/images/about-showcase-1.png",
  imageAlt: "Product showcase image",
}

const cardInfo2 = {
  imagePosition: "right", // 'left' or 'right'
  title: "NUESTRA VISIÓN",
  subtitle: "",
  description: "Desarrollar productos de software que permitan a las empresas mejorar sus operaciones y alcanzar sus objetivos, mediante la correcta interpretación de sus necesidades, aplicando metodologías y herramientas de vanguardia.",
  imageSrc: "/images/about-showcase-2.png",
  imageAlt: "Product showcase image",
}


export default function About() {
  return (
    <Layout>
      <Head>
        <title>{metadata.title} </title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Hero title={"Quiénes somos"} image={"/images/hero-about.png"} />
      <QuoteDescription />
      <AboutNav />
      <ProductShowcase
        {...cardInfo1}
      />
      <ProductShowcase
        {...cardInfo2}
      />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
