// Button.js
import Link from "next/link";
import Image from "next/image";

export default function Button({
  href = "",
  children,
  className = "",
  onClick,
  variant = "button",
  showImage = true,
  ...props
}) {
  // Base button styles
  const baseStyles =
    "inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic group";

  // Style variants
  const primaryStyles = `${baseStyles} bg-primary text-white`;
  const secondaryStyles = baseStyles;
  const defaultStyles = baseStyles;

  // Shared image props
  const imageProps = {
    height: 25,
    width: 25,
    className:
      "ml-2 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-90",
  };

  // Choose image based on variant
  const imageSrc =
    variant === "primary"
      ? "/images/box-icon-white.png"
      : "/images/box-icon.png";

  // Secondary variant
  if (variant === "secondary") {
    return (
      <Link
        {...props}
        href={href}
        className={`${secondaryStyles} ${className}`}
      >
        {children}
        {showImage && (
          <Image src={imageSrc} alt="button image" {...imageProps} />
        )}
      </Link>
    );
  }

  // Primary variant
  if (variant === "primary") {
    return (
      <Link href={href} {...props} className={`${primaryStyles} ${className}`}>
        {children}
        {showImage && (
          <Image src={imageSrc} alt="button image" {...imageProps} />
        )}
      </Link>
    );
  }

  // Default button
  return (
    <button
      onClick={onClick}
      {...props}
      className={`${defaultStyles} ${className}`}
    >
      {children}
      {showImage && <Image src={imageSrc} alt="button image" {...imageProps} />}
    </button>
  );
}
