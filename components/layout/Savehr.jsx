// ui elements
import Button from "@/components/ui/Button"

export default function Savehr({ className = "" }) {
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
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-xl md:text-4xl italic font-bold text-primary mb-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-block">
              Administre su flota vehicular con
            </span>
            <img src="/images/savehr-logo.svg" alt="box-icon" className="w-40" />
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto text p-4">
            Con SAVEHR puedes llevar un control preciso en tiempo real, gestionar mantenimientos preventivos y correctivos, controlar gastos operativos, y conservar un historial detallado de cada vehículo, todo desde una plataforma intuitiva, segura y fácil de usar.
            <br /><br />
            Nuestro objetivo es ayudarte a reducir costos operativos, mejorar la eficiencia de tu equipo y tomar decisiones informadas basadas en datos confiables.
            <br /><br />
            SAVEHR se adapta a las necesidades de tu negocio, brindándote una herramienta flexible, escalable y fácil de usar.
          </p>
          <Button className="text-primary mr-4" variant="primary" href="/contact">
            Quiero saber más
          </Button>
        </div>
      </div>

      <span className="block pb-32"></span>
    </section>
  )
}
