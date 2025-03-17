import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Savehr() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 pb-32 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue mb-4">
            Administre su flota vehicular con{" "}
            <span className="text-orange relative">
              SAVEHR
              <span className="absolute -top-3 -right-3 text-orange">®</span>
            </span>
          </h2>
          <p className="text-[#585958] mb-8 max-w-2xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tortor ut elit hendrerit, in dictum
            sem blandit. Proin at placerat turpis. Vivamus ac sapien sed est porttitor rhoncus.
          </p>
          <Link
            href="#"
            className="inline-flex items-center bg-blue hover:bg-orange text-white px-6 py-2.5 rounded-full font-medium transition-colors text-sm"
          >
            Quiero saber más
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Wave background image */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src="/images/wave-bottom.webp"
          alt="Wave background"
          width={1920}
          height={300}
          className="w-full object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}

