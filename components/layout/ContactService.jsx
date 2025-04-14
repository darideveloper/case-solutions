// ui elements
import HoverCard from "@/components/ui/HoverCard";

export default function ContactService() {
  return (
    <div className="container max-w-7xl mx-auto mt-35 flex flex-col gap-y-5.5 md:flex-row md:gap-x-5">
      <HoverCard
        title={"NUESTROS Servicios"}
        className={`bg-[url(/images/service-card.png)]`}
        href="/services"
      >
        Los productos que vendemos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.
      </HoverCard>

      <HoverCard
        title={"NUESTROS Productos"}
        className={`bg-[url(/images/product-card.png)]`}
        href="/products"
      >
        Consultores especializados en ofrecer soluciones de sistemas que le permitan incrementar su productividad y tomar mejores decisiones en su negocio.
      </HoverCard>
    </div>
  );
}
