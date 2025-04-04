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

const metadata = {
  title: "Servicios | Case solutions",
  description: "CASE Solutions: Discover our specialized system solutions in Mexico, including custom software development with robust data security and process re-engineering to boost efficiency, reduce costs, and improve information access. Expertise in .NET, Java, Genexus, SAP, Oracle, and more."
}

// Usage in your app:
export default function Services() {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
