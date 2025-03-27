export default function ({
  name,
  slogan,
  logo,
  shortDescription,
  className = "",
}) {
  return (
    <div className={`text-center max-w-xl ${className}`}>
      <div className="flex justify-center items-center mb-4">
        <div className="max-w-xl h-48 flex items-center justify-center">
          <img src={logo} className="justify-center mx-auto" />
        </div>
      </div>
      <div className="text-center">
        <div className="w-32 mx-auto border-t-2 border-gray my-2" />
        <h2 className="text-2xl font-bold text-primary mb-2">{name}</h2>
        <p className="text-xl italic text-primary opacity-50 mb-6">{slogan}</p>
        <div className="flex justify-center">
          <ul className="list-disc list-outside pl-12">
            {shortDescription &&
              shortDescription?.map((item, index) => (
                <li
                  className="text-primary text-start text-[18px] mb-1"
                  key={index}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
