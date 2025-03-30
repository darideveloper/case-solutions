import Link from "next/link";
import Title from "./Title";
import ImageEffect from "./ImageEffect";

const ProductShowcase = ({
  imagePosition = "left", // 'left' or 'right'
  title = "LOREM IPSUM DOLOR",
  subtitle = "NUESTROS PRODUCTOS",
  description = "Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  imageSrc = "/images/showcase-image.png",
  imageAlt = "Product showcase image",
  className = "",
}) => {
  // Determine the order of content based on imagePosition (only for desktop)
  const isImageOnRight = imagePosition === "right";

  return (
    <div className={`w-full py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap:8 md:gap-16">
          {/* Image Section - always first on mobile */}
          <div
            className={`w-full md:w-1/2 order-1 ${
              isImageOnRight ? "md:order-2" : "md:order-1"
            }`}
          >
            <ImageEffect imageSrc={imageSrc} imageAlt={imageAlt} />
          </div>

          {/* Content Section - always second on mobile */}
          <div
            className={`w-full md:w-1/2 order-2 ${
              isImageOnRight ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="max-w-lg mt-8 md:mt-0">
              <h3 className="text-indigo-900 font-medium mb-2 uppercase text-sm tracking-wide underline decoration-gray-light decoration-2 underline-offset-4">
                {subtitle}
              </h3>
              <Title className="text-3xl font-bold text-primary py-3">
                {title}
              </Title>
              <p className="text-gray-700 mb-6">{description}</p>
              <Link
                href={"/"}
                className="text-primary hover:text-secondary hover:font-bold underline hover:decoration-accent font-medium uppercase tracking-wide hover:text-indigo-800 transition-colors"
              >
                LEER MÁS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
