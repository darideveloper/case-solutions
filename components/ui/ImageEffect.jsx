import React from "react";

const ImageEffect = ({ imageSrc, imageAlt, className = "" }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Offset white background */}
      <div className="absolute bg-white shadow-lg shadow-gray-light w-full h-full bottom-4 right-4"></div>
      {/* Image with primary color overlay */}
      <div className="relative shadow-md">
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
          {/* Primary color overlay */}
          <div className="absolute inset-0 bg-primary opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageEffect;
