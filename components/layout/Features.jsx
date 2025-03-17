import { MessageSquare, BarChart3, PieChart, Award } from "lucide-react"

const FeatureCard = ({ icon, title, description, isLast = false }) => {
  return (
    <div className={`flex flex-col items-center px-6 py-8`}>
      <div className="text-blue mb-4">{icon}</div>
      <h3 className="text-blue font-medium mb-4 uppercase">{title}</h3>
      <p className="text-center text-sm text-[#585958]">{description}</p>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 stroke-[1.25px]" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 stroke-[1.25px]" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <PieChart className="h-10 w-10 stroke-[1.25px]" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Award className="h-10 w-10 stroke-[1.25px]" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg.jfif-H43AIhT0XAdH4KPcI8DYUurzTDzKCD.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-orange font-medium uppercase mb-2">¿POR QUÉ NOSOTROS?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue">LOREM IPSUM DOLOR</h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isLast={index === features.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

