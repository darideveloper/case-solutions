// ui elements
import TitleText from "@/components/ui/TitleText";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Features({ className = "", title=null, subtitle, features=[] }) {

  return (
    <section
      className={`py-20 mt-0 relative flex items-center min-h-[760px] bg-white ${className}`}
      style={{
        backgroundImage: `url('/images/bg-wave.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <TitleText title={title} subtitle={subtitle} />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-[90%] mx-auto">
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
