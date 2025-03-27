import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Features from "@/components/layout/Features";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Savehr from "@/components/layout/Savehr";
import SavehrDescripcion from "@/components/layout/SavehrDescripcion";

export default function Products() {
  return (
    <div>
      <Navbar />
      <Hero title={"Productos"} image="/images/product-hero.png" />
      <Features />
      <SavehrDescripcion />
      <Savehr />
      <ContactService />
      <ClientShowcase />
      <Footer />
    </div>
  );
}
