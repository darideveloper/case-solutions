import Image from "next/image";
import { fontRegular } from "@/lib/fonts";

// Components
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Savehr from "@/components/layout/Savehr";
import Navbar from "@/components/layout/Navbar";
import SavehrDescripcion from "@/components/layout/SavehrDescripcion";
import Flipbook from "@/components/layout/Flipbook";
import ProductShowcase from "@/components/ui/ShowcaseComponent";
import WaveBreak from "@/components/layout/WaveBreak";
import Testimonials from "@/components/layout/Testimonials";
import ClientShowcase from "@/components/layout/ClientShowcase";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div
      className={`
        ${fontRegular.className}
      `}
    >
      <Navbar />
      <Hero />
      <Features />
      <Savehr />
      <SavehrDescripcion />
      <Flipbook />
      <ProductShowcase />
      <WaveBreak />
      <ProductShowcase imagePosition="right" className="mt-[-400px]" />
      <Testimonials />
      <ClientShowcase/>
      <Footer/>
    </div>
  );
}
