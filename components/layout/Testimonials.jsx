// ui elements
import TestimonialCard from "@/components/ui/TestimonialCard"
import Title from "@/components/ui/Title"

//libs
import Image from 'next/image'

const data = [
  {
    title: "SECRETARÍA DE MARINA",
  },
  {
    title: "PGJ (procuraduría general de justicia)",
  },
  {
    title: "Municipio de Cuautitlán Izcalli",
  },
  {
    title: "Cablemás S.A. de C.V.",
  },
  {
    title: "Cablemás S.A. de C.V.",
  },
]

const Introduction = () => {
  return (
    <div className="w-full md:w-[400px] border-box border-l-4 ps-8 !text-white">
      <div>
        <div className="title">
          <Title isH1={false}>Casos de éxito</Title>
        </div>
        <div className="subtitle">
          <p className="font-thin mt-2">
            Nuestra experiencia se respalda en alianzas con empresas que impulsan el cambio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-primary my-12 w-full p-4 md:p-8 lg:p-12 md:my-20">
      <Image width={1000} height={1000} src="/images/bg-curve-3.png" alt="" className="w-full absolute inset-0 top-0 opacity-100 mix-blend-multiply" />
      <div className="max-w-7xl mx-auto py-12  md:py-20 ">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-y-24">
          <div className="w-full md:w-auto flex justify-center !text-white">
            <Introduction />
          </div>

          {data.map((item, index) => (
            <div key={index} className="w-full md:w-[380px] !text-white">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
