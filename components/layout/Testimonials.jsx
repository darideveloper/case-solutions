import TestimonialCard from "../ui/TestimonialCard";
import Title from "../ui/Title";

const data = [
  {
    title: "SECRETARÍA DE MARINA",
    subtitle: "Nuestros productos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tortor ut elit hendrerit, in dictum sem blandit. Proin at placerat turpis. Vivamus ac sapien sed est porttitor rhoncus.",
  },
  {
    title: "PGJ (procuraduría general de justicia)",
    subtitle: "Nuestros productos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tortor ut elit hendrerit, in dictum sem blandit. Proin at placerat turpis. Vivamus ac sapien sed est porttitor rhoncus.",
  },
  {
    title: "Municipio de Cuautitlán Izcalli",
    subtitle: "Nuestros productos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tortor ut elit hendrerit, in dictum sem blandit. Proin at placerat turpis. Vivamus ac sapien sed est porttitor rhoncus.",
  },
  {
    title: "Cablemás S.A. de C.V.",
    subtitle: "Nuestros productos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  },
  {
    title: "Cablemás S.A. de C.V.",
    subtitle: "Nuestros productos tienen la flexibilidad de adaptarse a las necesidades de nuestros clientes.",
  },
];

const Introduction = () => {
  return (
    <div className="w-full md:w-[400px] border-box border-l-4 ps-8 ">
      <div>
        <div className="title">
          <Title isH1={false}>Casos de éxito</Title>
        </div>
        <div className="subtitle">
          <p className="font-thin mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-primary my-12 w-full p-4 md:p-8 lg:p-12 md:my-20">
      <img src="/images/bg-curve-3.png" alt="" className="w-full absolute inset-0 top-0 opacity-100 mix-blend-multiply" />
      <div className="max-w-7xl mx-auto py-12  md:py-20 ">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-y-24">
          <div className="w-full md:w-auto flex justify-center">
            <Introduction />
          </div>
          
          {data.map((item, index) => (
            <div key={index} className="w-full md:w-[380px]">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
