"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample slide data - this could come from an API or CMS
const slideData = [
  {
    id: 1,
    title: "CALIDAD Y SERVICIO",
    subtitle: "Elaboramos estrategias integrales que impulsan la productividad en su negocio.",
    buttonText: "Conocer más",
    buttonLink: "/services",
    imageUrl:
      "/placeholder.svg?height=800&width=1600",
  },
  {
    id: 2,
    title: "INNOVACIÓN CONSTANTE",
    subtitle: "Desarrollamos soluciones tecnológicas adaptadas a las necesidades de cada cliente.",
    buttonText: "Descubrir",
    buttonLink: "/innovation",
    imageUrl: "/placeholder.svg?height=800&width=1600",
  },
  {
    id: 3,
    title: "COMPROMISO TOTAL",
    subtitle: "Nuestro equipo trabaja con dedicación para superar sus expectativas.",
    buttonText: "Nuestro equipo",
    buttonLink: "/about",
    imageUrl: "/placeholder.svg?height=800&width=1600",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slideData.length

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
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
            <div className="absolute inset-0 bg-blue-900/50"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white mb-8">{slide.subtitle}</p>
                <Link
                  href={slide.buttonLink}
                  className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
                >
                  {slide.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-start container mx-auto px-6 md:px-12 gap-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

