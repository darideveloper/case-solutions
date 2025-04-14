// Components
import ClientShowcase from "@/components/layout/ClientShowcase";
import ContactService from "@/components/layout/ContactService";
import Features from "@/components/layout/Features";
import Hero from "@/components/layout/Hero";
import Layout from "@/components/layout/Layout";
import Savehr from "@/components/layout/Savehr";
import SavehrDescripcion from "@/components/layout/SavehrDescripcion";
import DownloadCard from "@/components/ui/DownloadCard"
import Head from "next/head";


const metadata = {
  title: "Productos | Case solutions",
  description: "CASE Solutions Products: Discover our flexible and adaptable technology solutions in Mexico, including SAVEHR for efficient fuel and maintenance management. Learn how our products can be tailored to meet your specific business needs"

}

const features = [
  {
    icon: "/images/icons/discount.png",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/icons/selection.png",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/icons/people.png",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/icons/selected.png",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export default function Products() {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Hero title={"Productos"} image="/images/product-hero.png" />
      <Features
        subtitle={`Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.`}
        features={features}
      />
      <SavehrDescripcion />
      <Savehr />
      <DownloadCard />
      <ContactService />
      <ClientShowcase />
    </Layout>
  );
}
