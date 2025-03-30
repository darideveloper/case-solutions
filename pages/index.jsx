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

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <Features />
      <Savehr />
      <SavehrDescripcion />
      <Flipbook />
      <ProductShowcase />
      <WaveBreak />
      <ProductShowcase imagePosition="right" className="mt-[-400px]" />
      <Testimonials />
      <ClientShowcase />
    </Layout>
  );
}
