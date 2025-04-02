// components
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import ServiceDropdown from "@/components/layout/ServiceDropdown";
import SolutionsOffers from "@/components/layout/SolutionsOffers";
import DownloadCard from "@/components/ui/DownloadCard";
import Timeline from "@/components/ui/Timeline";
const timelineItems = [
  {
    id: 1,
    title: 'Project Started',
    date: 'March 2023',
    content: 'Initial planning and team formation'
  },
  {
    id: 2,
    title: 'Development Phase',
    date: 'April 2023',
    content: 'Core feature implementation'
  },
  {
    id: 3,
    title: 'Launch',
    date: 'May 2023',
    content: 'Official product release'
  }
];

// Usage in your app:
export default function Services() {
  return (
    <Layout>
      <Hero title={"Servicios"} image="/images/service-hero.png" />
      <SolutionsOffers />
      <Timeline items={timelineItems} />
      <ServiceDropdown />
      <DownloadCard />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
