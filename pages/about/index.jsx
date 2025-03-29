import AboutNav from "@/components/layout/AboutNav";
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import QuoteDescription from "@/components/layout/QuoteDescription";
import ProductShowcase from "@/components/ui/ShowcaseComponent";

export default function About() {
  return (
    <div>
      <Navbar />
      <Hero title={"Quiénes somos"} image={"/images/hero-about.png"} />
      <QuoteDescription />
      <AboutNav />
      <ProductShowcase />
      <ProductShowcase imagePosition="right" />
      <ContactService />
      <ClientShowcase />
      <Footer />
    </div>
  );
}
