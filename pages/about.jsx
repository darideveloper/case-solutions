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

const cardInfo1 = {
  imagePosition: "left", // 'left' or 'right'
  title: "LOREM IPSUM DOLOR 1",
  subtitle: "NUESTRA MISIÓN",
  description: "Posicionarse en el mercado como una de las mejores empresas de desarrollo en México y Latinoamérica mediante la plena satisfacción de los requerimientos de sus clientes, empleando al personal mejor calificado en cuanto a habilidades y conocimientos informáticos.",
  imageSrc: "/images/about-showcase-1.png",
  imageAlt: "Product showcase image",
}

const cardInfo2 = {
  imagePosition: "right", // 'left' or 'right'
  title: "LOREM IPSUM DOLOR 2",
  subtitle: "NUESTRA VISIÓN",
  description: "Desarrollar productos de software que permitan a las empresas mejorar sus operaciones y alcanzar sus objetivos, mediante la correcta interpretación de sus necesidades, aplicando metodologías y herramientas de vanguardia.",
  imageSrc: "/images/about-showcase-2.png",
  imageAlt: "Product showcase image",
}


export default function About() {
  return (
    <Layout>
      <Head>
        <title>Quiénes somos | Case solutions</title>
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
