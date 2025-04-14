const Timeline = ({ className }) => {
  const data = [
    { title: "REDUCIR TIEMPOS DE PROCESO" },
    { title: "ELEVAR EL RENDIMIENTO" },
    { title: "REDUCCIÓN DE COSTOS" },
    { title: "AGILIZACIÓN Y DISPONIBILIDAD DE LA INFORMACIÓN" },
  ];
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-0 py-12 md:py-18 ${className}`}>

      {/* Horizontal Timeline (md and up) */}
      <div className="hidden md:flex items-start justify-between relative">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 px-4 relative">
            {/* Line connecting circles (except for the last item) */}
            {index < data.length - 1 && (
              <div className="absolute left-1/2 right-0 top-[13px] h-0.5 bg-gray-light w-full"></div>
            )}
            <div className="w-8 h-8 bg-white rounded-full mb-3 z-10 flex items-center justify-center border border-gray-light">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Timeline (mobile) */}
      <div className="md:hidden space-y-8 max-w-md mx-auto">
        <div className="relative pl-8">
          {/* Continuous vertical line */}
          <div className="absolute left-[15px] top-0 w-0.5 bg-gray-light" style={{
            height: `calc(100% - ${data.length > 0 ? (data.length - 1) * 8 : 0}px)`
          }}></div>

          <div className="items-wrapper flex flex-col gap-12">
            {data.map((item, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="absolute -left-8 top-0 w-8 h-8 bg-white rounded-full z-10 flex items-center justify-center border border-gray-light">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text font-bold text-primary mb-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;