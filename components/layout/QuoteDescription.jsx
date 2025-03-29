import Title from "@/components/ui/Title";

export default function QuoteDescription() {
  return (
    <div className="max-w-7xl p-8 mx-auto text-primary block md:flex mb-24 mt-24 items-center">
      <div className="quote w-full md:max-w-1/2">
        <Title isH1={false}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        </Title>
      </div>

      <div className="description w-full md:max-w-1/2">
        <p className="text-gray md:ps-18 mt-6 md:mt-0">
          Somos una empresa orientada al logro de resultados y a la satisfacción
          de las necesidades del cliente que a través del esfuerzo y
          profesionalismo hemos logrado objetivos importantes, tanto en la
          industria privada como en el gobierno.
        </p>
      </div>
    </div>
  );
}
