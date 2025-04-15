import Title from "@/components/ui/Title";

function TestimonialText({ title, children, className = "" }) {
  return (
    <div className="h-96 w-full mt-12 bg-[url(/images/large-hablemos.jpg)] bg-cover bg-center bg-no-repeat md:mt-20 py-18">
      <div className={`container ${className} max-w-7xl mx-auto md:mt-12`}>
        <Title
          isH1={false}
          className="text-primary mb-0 md:mb-4 text-xl font-bold italic lg:text-3xl"
        >
          {title}
        </Title>
        <div className="relative max-w-7xl md:mx-auto flex">
          <p className="text-primary max-w-5xl pe-24 md:pe-0 lg:text-2xl">
            {children}
          </p>
          <Image
            height={400}
            width={400}
            src={`/images/icons/half-circle.svg`}
            className="absolute top-0 right-0 md:-top-30 lfet-20 md:w-[400px] md:h-[400px]  grayscale opacity-30"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialText;
