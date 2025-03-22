// Button.js
import Link from "next/link";
import Image from "next/image";

export default function Button({
  href = "",
  children,
  className = "",
  onClick,
  variant = "button",
  showImage = true, // New prop to control image visibility
  ...props
}) {
  // Common button styles
  const baseStyles =
    "inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic";
  const primaryStyles = `${baseStyles} bg-primary text-white`; // Updated for primary variant

  // Common image props
  const imageProps = {
    height: 25,
    width: 25,
  };

  // If variant is "secondary", render a Link
  if (variant === "secondary") {
    return (
      <Link {...props} href={href} className={`${baseStyles} ${className}`}>
        {children}
        {showImage && (
          <Image
            src="/images/box-icon.png"
            alt="Next.js Logo"
            {...imageProps}
            className="ml-2"
            
          />
        )}
      </Link>
    );
  }

  // If variant is "primary", render a button with primary styles
  if (variant === "primary") {
    return (
      <Link href={href} {...props} className={`${primaryStyles} ${className}`}>
        {children}
        {showImage && (
          <span className="ml-2.5">
            <Image
              src="/images/box-icon-white.png"
              alt="button image"
              {...imageProps}
            />
          </span>
        )}
      </Link>
    );
  }

  // Default button rendering
  return (
    <button onClick={onClick} {...props} className={`${baseStyles} ${className}`}>
      {children}
      {showImage && (
        <Image
          src="/images/box-icon.png"
          alt="button image"
          {...imageProps}
          className="ml-2"
        />
      )}
    </button>
  );
}
