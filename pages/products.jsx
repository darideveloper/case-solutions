// Components
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Features from "@/components/layout/Features";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import Savehr from "@/components/layout/Savehr";
import SavehrDescripcion from "@/components/layout/SavehrDescripcion";

export default function Products() {
  return (
    <Layout>
      <Hero title={"Productos"} image="/images/product-hero.png" />
      <Features />
      <SavehrDescripcion />
      <Savehr />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
