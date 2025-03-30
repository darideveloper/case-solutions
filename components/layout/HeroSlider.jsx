"use client";
// libs
import { useState, useEffect } from "react";
import Image from "next/image";

// ui elements
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";

// Sample slide data
const slideData = [
  {
    id: 1,
    title: "CALIDAD Y SERVICIO",
    subtitle:
      "Elaboramos estrategias integrales que impulsan la productividad en su negocio.",
    buttonText: "Conocer más",
    buttonLink: "/services",
    imageUrl: "/images/Hero-slide-1.png",
  },
  {
    id: 2,
    title: "Ofrecemos atención personalizada",
    subtitle:
      "Desarrollamos productos que se adaptan a las necesidades de nuestros clientes.",
    buttonText: "¡Contáctanos hoy mismo!",
    buttonLink: "/innovation",
    imageUrl: "/images/Hero-slide-2.png",
  },
  {
    id: 3,
    title: "Conoce nuestros productos",
    subtitle: "Administre sus recursos de una forma práctica.",
    buttonText: "Ver Productos",
    buttonLink: "/about",
    imageUrl: "/images/Hero-slide-3.png",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideData.length;

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      id="hero-section"
      className="relative w-full h-[785px] md:h-[700px] overflow-hidden"
    >
      {/* Slides */}
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.imageUrl || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/50"></div>
          </div>
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-xl">
                <Title isH1={false} className="uppercase">
                  {slide.title}
                </Title>
                <p className="text-lg md:text-xl text-white mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  variant="secondary"
                  href={slide.buttonLink}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Dots navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-start container mx-auto px-6 md:px-12 gap-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-1 transition-all ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
