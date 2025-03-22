import Image from "next/image";
const FeatureCard = ({
  icon,
  title,
  description,
  index,
  total,
  className = "",
}) => {
  const showVerticalDivider = index < total - 1 && index % 4 !== 3;

  return (
    <div className="relative h-full">
      <div className="flex flex-col items-center px-6 py-8 h-full">
        <div className="flex items-center mb-4">
          <div className="text-primary mr-3">
            <Image src={icon} width={65} height={50} />
          </div>
          <h3 className="text-primary font-bold uppercase">{title}</h3>
        </div>
        <p className="text-center text-sm text-black">{description}</p>
      </div>

      {showVerticalDivider && (
        <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-1/2 bg-primary"></div>
      )}
      <div className="h-px w-1/2 bg-primary mx-auto md:hidden"></div>
    </div>
  );
};

export default FeatureCard;
