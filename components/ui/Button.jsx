// Button.js
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Button({
  href,
  children,
  className = "",
  onClick,
  type = "button",
}) {
  // If href is provided, render a Link

  if (type == "slider") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic ${className}`}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic ${className}`}
      >
        {children}

        <Image
          src="/images/box-icon.png"
          alt="Next.js Logo"
          height={25}
          width={25}
          className="ml-2"
        />
      </Link>
    );
  }

  if (type === "cta") {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic bg-primary text-white ${className}`}
      >
        {children}
        <span className="ml-2.5">
          <Image
            src="/images/box-icon-white.png"
            alt="button image"
            height={25}
            width={25}
          />
        </span>
      </button>
    );
  }

  // If href is not provided, render a button
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic ${className}`}
    >
      {children}
      <Image
        src="/images/box-icon.png"
        alt="button image"
        className="mr-2"
        height={25}
        width={25}
      />
    </button>
  );
}
