// ui elements
import Accordion from "@/components/ui/Accordion";
import ImageEffect from "@/components/ui/ImageEffect";
import Title from "../ui/Title";

export default function ServiceDropdown() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="container gap-8 md:gap-18 flex flex-col md:flex-row justify-center items-center">
        <div>
          <ImageEffect
            imageSrc="/images/accordion-bg.png"
            imageAlt="Accordion image"
          />
        </div>
        <div>
          <Title
            isH1={false}
            className="block md:absolute p-4 md:p-0 top-0 text-xl md:text-2xl underline underline-offset-8 decoration-gray decoration-2  font-bold text-primary mb-4 md:mb-8 text-center md:text-left"
          >
            Servicios
          </Title>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
