// ui elements
import Title from "@/components/ui/Title";
import Image from "next/image";

export default function Hero({ title, image, className = "" }) {
  return (
    <div
      className="bg-cover bg-center lg:h-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container max-w-7xl mx-auto flex relative justify-start items-center h-full">
        <Title
          isH1={true}
          className="text-[40px] font-black text-white uppercase md:text-[60px] py-18 md:p-18 md:pl-0 z-10 overflow-hidden"
        >
          {title}
        </Title>
        <Image
          height={200}
          width={200}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[150px] md:h-[200px] "
          alt="shape"
          src="/images/half-circle-hero.svg"
          loading="eager"
        />
      </div>
    </div>
  );
}
