// Components
import Features from "@/components/layout/Features";
import Savehr from "@/components/layout/Savehr";
import SavehrDescripcion from "@/components/layout/SavehrDescripcion";
import Flipbook from "@/components/layout/Flipbook";
import ProductShowcase from "@/components/ui/ShowcaseComponent";
import WaveBreak from "@/components/layout/WaveBreak";
import Testimonials from "@/components/layout/Testimonials";
import ClientShowcase from "@/components/layout/ClientShowcase";
import HeroSlider from "@/components/layout/HeroSlider";
import Layout from "@/components/layout/Layout";

// Libs
import Head from "next/head";


const metadata = {
  title: "::Case solutions::",
  description: "CASE Solutions: Your technology partner in Mexico. We provide tailored software and consulting solutions to boost your business productivity. Contact us today for personalized attention and innovative products! ktehozol@casesolutions.com.mx | (55) 1107-0478",
};


const features = [
  {
    icon: "/images/icons/question.svg",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/icons/chart.svg",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/icons/server-gear.svg",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/images/icons/award.svg",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const cardInfo1 = {
  imagePosition: "left", // 'left' or 'right'
  title: "LOREM IPSUM DOLOR 1",
  subtitle: "NUESTROS PRODUCTOS",
  description: "Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  imageSrc: "/images/home-showcase-1.png",
  imageAlt: "Product showcase image",
  href: "/products",
}

const cardInfo2 = {
  imagePosition: "right", // 'left' or 'right'
  title: "LOREM IPSUM DOLOR 2",
  subtitle: "NUESTROS PRODUCTOS",
  description: "Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  imageSrc: "/images/showcase-image.png",
  imageAlt: "Product showcase image",
  href: "/services",
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <HeroSlider />
      {/* <Features
        title={`Lorem ipsum dolor`}
        subtitle={`¿Por qué nosotros?`}
        features={features}
      /> */}
      <Savehr />
      <SavehrDescripcion />
      <Flipbook />
      <ProductShowcase
        {...cardInfo1}
      />
      <WaveBreak />
      <ProductShowcase
        imagePosition="right"
        className="mt-[-600px]"
        {...cardInfo2}
      />
      <Testimonials />
      <ClientShowcase />
    </Layout>
  );
}
