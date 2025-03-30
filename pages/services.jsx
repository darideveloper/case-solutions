import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import ServiceDropdown from "@/components/layout/ServiceDropdown";
import SolutionsOffers from "@/components/layout/SolutionsOffers";
import DownloadCard from "@/components/ui/DownloadCard";

export default function Services() {
  return (
    <div>
      <Navbar />
      <Hero title={"Servicios"} image="/images/service-hero.png" />
      <SolutionsOffers />
      <ServiceDropdown />
      <DownloadCard />
      <ClientShowcase />
      <ContactService />
      <Footer />
    </div>
  );
}
