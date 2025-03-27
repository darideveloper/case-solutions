import Companies from "@/components/layout/Companies";
import ContactService from "@/components/layout/ContactService";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Hobelmos from "@/components/layout/Hobelmos";
import Navbar from "@/components/layout/Navbar";
import DownloadCard from "@/components/ui/DownloadCard";

export default function Stories() {
  return (
    <div>
      <Navbar />
      <Hero title="Testimonios" image="/images/stories.png" />
      <Hobelmos title={"Somos una empresa orientada al logro de resultados"}>
        y a la satisfacción de las necesidades del cliente que a través del
        esfuerzo y profesionalismo hemos logrado objetivos importantes, tanto en
        la industria privada como en el gobierno.
      </Hobelmos>
      <Companies />
      <DownloadCard />
      <ContactService />
      <Footer />
    </div>
  );
}
