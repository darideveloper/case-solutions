// ui elements
import Button from "@/components/ui/Button";

export default function Savehr({ className='' }) {
  return (
    <section
      className={`relative overflow-hidden bg-white py-[50px] ${className}`}
      style={{
        backgroundImage: `url('/images/bg-curve.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pb-32 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-4xl italic font-bold text-primary mb-4 inline-flex">
            Administre su flota vehicular con 
            <span className="text-orange relative inline-block">
              <img src="/images/savehr-logo.svg" alt="box-icon" className="p-2"/>
            </span>
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto text p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tortor ut elit hendrerit, in dictum sem blandit. Proin at
            placerat turpis. Vivamus ac sapien sed est porttitor rhoncus.
          </p>
          <Button className="text-primary mr-4" variant="primary">
            Quiero saber más
          </Button>
        </div>
      </div>

      <span className="block pb-32"></span>
    </section>
  );
}
