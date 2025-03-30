// libs
import Link from "next/link";

function HoverCard({ title, className, children, href = "#" }) {
  return (
    <div
      className={`group relative flex w-full flex-col gap-y-7 bg-cover bg-center bg-no-repeat px-6 py-7 text-white transition-all duration-300 hover:cursor-pointer lg:flex lg:items-center lg:justify-center ${className}`}
    >
      <Link href={href} className="absolute inset-0 z-20">
        <span className="sr-only">Go to {title}</span>
      </Link>

      <div className="bg-primary/70 absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"></div>

      <h3 className="relative text-xl font-black uppercase transition-transform duration-300 md:group-hover:-translate-y-2">
        {title}
      </h3>

      <div className="w-52 border-b-3 border-gray-400 transition-transform md:group-hover:-translate-y-2"></div>

      <p className="z-10 text-center text-sm opacity-0 transition-all md:group-hover:opacity-100 hidden md:block">
        {children}
      </p>

      {/* Mobile link text - now a span instead of an anchor */}
      <span className="text-lg font-semibold transition-opacity duration-300 md:hidden">
        Visitar página &gt;&gt;
      </span>
    </div>
  );
}

export default HoverCard;
