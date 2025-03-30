// components
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import ServiceDropdown from "@/components/layout/ServiceDropdown";
import SolutionsOffers from "@/components/layout/SolutionsOffers";
import DownloadCard from "@/components/ui/DownloadCard";

export default function Services() {
  return (
    <Layout>
      <Hero title={"Servicios"} image="/images/service-hero.png" />
      <SolutionsOffers />
      <ServiceDropdown />
      <DownloadCard />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
