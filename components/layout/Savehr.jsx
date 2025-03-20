import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Savehr() {
  return (
    <section
      className="relative overflow-hidden bg-white py-[50px]"
      style={{
        backgroundImage: `url('/images/bg-curve.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 pb-32 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Administre su flota vehicular con{" "}
            <span className="text-orange relative">
              SAVEHR
              <span className="absolute -top-3 -right-3 text-orange">®</span>
            </span>
          </h2>
          <p className="text-[#585958] mb-8 max-w-2xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tortor ut elit hendrerit, in dictum sem blandit. Proin at
            placerat turpis. Vivamus ac sapien sed est porttitor rhoncus.
          </p>
          <Button className="text-primary mr-4" type="cta">Quiero saber más</Button>
        </div>
      </div>

      {/* Wave background image */}
    </section>
  );
}
