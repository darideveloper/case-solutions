function Hobelmos({ title, children}) {
  return (
    <div className="h-96 w-full mt-12 bg-[url(/images/large-hablemos.jpg)] bg-cover bg-center bg-no-repeat md:mt-20 py-18">
      <div className="max-w-7xl mx-auto md:mt-12">
        <h2 className="text-primary mb-0 md:mb-4 text-center text-xl font-bold italic lg:text-3xl">
          {title}
        </h2>
        <div className="relative max-w-7xl md:mx-auto flex">
          <p className="text-primary p-4 max-w-3xl font-thin mx-auto pe-24 md:pe-0 md:text-center lg:text-2xl">
            {children}
          </p>
          <img
            src={`/images/icons/half-circle.svg`}
            className="absolute top-0 right-0 md:-top-20 lfet-20 md:w-[400px] md:h-[400px]  grayscale opacity-30"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hobelmos;
