import { MessageSquare, BarChart3, PieChart, Award } from "lucide-react";
import Title from "../ui/Title";
import Image from "next/image";

const FeatureCard = ({ icon, title, description, index, total }) => {
  return (
    <div className="relative h-full">
      <div className="flex flex-col items-center px-6 py-8 h-full">
        <div className="flex items-center mb-4">
          <div className="text-primary mr-3">
            <Image src={`${icon}`} width={65} height={50} />
          </div>
          <h3 className="text-primary font-bold uppercase">{title}</h3>
        </div>
        <p className="text-center text-sm text-[#585958]">{description}</p>
      </div>

      {index < total - 1 && index % 4 !== 3 && (
        <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-16 bg-primary"></div>
      )}
      <div className="h-px w-18 bg-primary mx-auto md:hidden"></div>
    </div>
  );
};

export default function Features() {
  const features = [
    {
      icon: "/images/icons/question.svg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "/images/icons/chart.svg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "/images/icons/server-gear.svg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "/images/icons/award.svg",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section
      className="py-20 mt-0 relative flex items-center min-h-[760px] bg-white"
      style={{
        backgroundImage: `url('/images/bg-wave.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase mb-2">
            ¿POR QUÉ NOSOTROS?
          </p>
          <div className="divider w-12 h-1 m-4 mx-auto bg-light-gray"></div>
          <Title className="text-3xl md:text-4xl font-bold text-primary">
            LOREM IPSUM DOLOR
          </Title>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                total={features.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
