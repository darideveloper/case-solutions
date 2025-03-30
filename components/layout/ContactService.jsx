// ui elements
import HoverCard from "@/components/ui/HoverCard";

export default function ContactService() {
  return (
    <div className="max-w-7xl mx-auto mt-35 flex flex-col gap-y-5.5 md:flex-row md:gap-x-5">
      <HoverCard
        title={"Nestros Servicios"}
        className={`bg-[url(/images/service-card.png)]`}
      >
        Los productos que vendemos tienen la flexibilidad de adaptarse a las
        necesidades de nuestros clientes.
      </HoverCard>

      <HoverCard
        title={"Nestros Servicios"}
        className={`bg-[url(/images/product-card.png)]`}
      >
        Los productos que vendemos tienen la flexibilidad de adaptarse a las
        necesidades de nuestros clientes.
      </HoverCard>
    </div>
  );
}
