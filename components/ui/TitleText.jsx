import Title from "@/components/ui/Title";

export default function TitleText({ title, subtitle}) {
  return (
    <div className="text-center mb-12">
      <Title isH1={false} className="text-primary text-xl md:text-3xl max-w-3xl mx-auto font-bold mb-2">
        {subtitle}
      </Title>
      {title && (
        <>
          <div className="divider w-12 h-1 m-4 mx-auto bg-gray-light"></div>
          <Title className="text-3xl md:text-4xl font-bold text-primary">
            {title}
          </Title>
        </>
      )}
    </div>
  );
}
