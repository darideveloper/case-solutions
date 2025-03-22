const ProductShowcase = ({
  imagePosition = "left", // 'left' or 'right'
  title = "LOREM IPSUM DOLOR",
  subtitle = "NUESTROS PRODUCTOS",
  description = "Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  ctaText = "LEER MÁS",
  imageSrc = "/images/showcase-image.png",
  imageAlt = "Product showcase image",
}) => {
  // Determine the order of content based on imagePosition
  const isImageOnRight = imagePosition === "right";

  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
              <button className="text-indigo-700 font-medium uppercase tracking-wide hover:text-indigo-800 transition-colors">
                {ctaText}
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className={`md:w-1/2 ${isImageOnRight ? "order-2" : "order-1"}`}>
            <div className="bg-indigo-800 rounded-lg p-2 shadow-xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
