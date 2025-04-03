import React from "react";
import Accordion from "@/components/ui/Accordion";
import ImageEffect from "@/components/ui/ImageEffect";
import Title from "../ui/Title";

export default function ServiceDropdown() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <ImageEffect
            imageSrc="/images/accordion-bg.png"
            imageAlt="Accordion image"
            className="hidden md:block"
          />
          <ImageEffect
            imageSrc="/images/accordion-bg-mobile.webp"
            imageAlt="Accordion image"
            className="block md:hidden"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 relative pt-16 md:pt-12">
          <Title
            isH1={false}
            className="absolute top-0 left-0 right-0 md:left-0 md:right-auto text-xl md:text-2xl underline underline-offset-8 decoration-gray decoration-2 font-bold text-primary mb-8 text-center md:text-left"
          >
            Servicios
          </Title>
          <div className="w-full overflow-hidden">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}
