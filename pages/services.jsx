// components
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import ServiceDropdown from "@/components/layout/ServiceDropdown";
import ServiceTimeline from "@/components/layout/ServiceTimeline";
import SolutionsOffers from "@/components/layout/SolutionsOffers";
import DownloadCard from "@/components/ui/DownloadCard";
import Head from "next/head";

// Usage in your app:
export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Servicios | Case solutions</title>
      </Head>
      <Hero title={"Servicios"} image="/images/service-hero.png" />
      <SolutionsOffers />
      <ServiceTimeline/>
      <ServiceDropdown />
      <DownloadCard />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
