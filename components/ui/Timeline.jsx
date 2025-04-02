const Timeline = () => {
  const data = [
    { title: "REDUCIR TIEMPOS DE PROCESO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "ELEVAR EL RENDIMIENTO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "REDUCCIÓN DE COSTOS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "AGILIZACIÓN Y DISPONIBILIDAD DE LA INFORMACIÓN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div className="p-8">
      {/* Horizontal Timeline (md and up) */}
      <div className="hidden md:flex items-start justify-between relative">
        <div className="absolute left-0 right-0 top-[13px] h-0.5 bg-gray-200"></div>

        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 px-4 relative">
            <div className="w-6 h-6 bg-blue-900 rounded-full mb-3 z-10"></div>
            <div className="text-center">
              <h3 className="text-sm font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Timeline (mobile) */}
      <div className="md:hidden space-y-8">
        <div className="relative pl-8">
          <div className="absolute left-[11px] top-0 w-0.5 h-full bg-gray-200"></div>

          {data.map((item, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              <div className="absolute -left-8 top-0 w-6 h-6 bg-blue-900 rounded-full z-10"></div>
              <div className="ml-4">
                <h3 className="text-sm font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
