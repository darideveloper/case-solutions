import Link from "next/link";

const ProductShowcase = ({
  imagePosition = "left", // 'left' or 'right'
  title = "LOREM IPSUM DOLOR",
  subtitle = "NUESTROS PRODUCTOS",
  description = "Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  ctaText = "LEER MÁS",
  imageSrc = "/images/showcase-image.png",
  imageAlt = "Product showcase image",
  className = "",
}) => {
  // Determine the order of content based on imagePosition
  const isImageOnRight = imagePosition === "right";

  return (
    <div className={`w-full py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <div className={`md:w-1/2 ${isImageOnRight ? "order-1" : "order-2"}`}>
            <div className="max-w-lg">
              <h3 className="text-indigo-900 font-medium mb-2 uppercase text-sm tracking-wide">
                {subtitle}
              </h3>
              <h2 className="text-3xl font-bold text-indigo-900 mb-4 uppercase">
                {title}
              </h2>
              <p className="text-gray-700 mb-6">{description}</p>
              <Link
                href={"/"}
                className="text-primary hover:text-secondary hover:font-bold underline hover:decoration-accent font-medium uppercase tracking-wide hover:text-indigo-800 transition-colors"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`md:w-1/2 relative ${
              isImageOnRight ? "order-2" : "order-1"
            }`}
          >
            <div className="rounded-lg shadow-[15px_-15px_3px_3px_rgba(0,0,0,0.1)] bg-primary">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
