// Button.js
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Button({
  href,
  children,
  style,
  onClick,
  type = "button",
}) {
  // If href is provided, render a Link

  if (type == "slider") {
    return (
      <button
        type="button"
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${style}`}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${style}`}
      >
        {children}

        <Image src="/images/box-icon.png" alt="Next.js Logo" height={25} width={25} className="ml-2"/>
      </Link>
    );
  }

  // If href is not provided, render a button
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors ${style}`}
    >
      {children}
      <Image src="/next.svg" alt="Next.js Logo" height={25} width={25} />
    </button>
  );
}
