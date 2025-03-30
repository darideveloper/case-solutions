// UI Elements
import ProductShowcase from "@/components/ui/ShowcaseComponent";

// components
import AboutNav from "@/components/layout/AboutNav";
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import QuoteDescription from "@/components/layout/QuoteDescription";

export default function About() {
  return (
    <Layout>
      <Hero title={"Quiénes somos"} image={"/images/hero-about.png"} />
      <QuoteDescription />
      <AboutNav />
      <ProductShowcase />
      <ProductShowcase imagePosition="right" />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
