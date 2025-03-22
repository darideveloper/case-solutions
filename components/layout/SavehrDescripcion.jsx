import React from "react";
import Button from "../ui/Button";

const SavehrDescripcion = ({ className=''}) => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className={`relative bg-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto p-8 bg-white">
        {/* Main content container */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-8">
          {/* Left Column - Video Section and Navigation */}
          <div className="w-full flex flex-col">
            {/* YouTube video placeholder */}
            <div className="relative mb-6 p-6 w-full md:max-w-4/5 mx-auto">
              {isVideoPlaying ? (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <button
                  className="w-full h-full bg-transparent border-none outline-none"
                  onClick={handleVideoClick}
                >
                  <img
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                    alt="Play video"
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
            </div>

            {/* Navigation buttons - now directly below the video */}
            <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 justify-center">
              <Button
                className="text-primary"
                variant="primary"
                showImage={false}
              >
                <p className="text-nowrap">Video 1</p>
              </Button>

              <Button
                variant="secondary"
                className="border border-primary text-primary border-2"
                showImage={false}
              >
                <p className="text-nowrap">Video 2</p>
              </Button>
              <Button
                variant="secondary"
                showImage={false}
                className="border border-primary text-primary border-2 text-center"
              >
                <p>
                  <span className="font-bold">SAVEHR</span> Combustible
                </p>
              </Button>
              <Button
                variant="secondary"
                showImage={false}
                className="border border-primary text-primary border-2 text-center"
              >
                <p>
                  <span className="font-bold">SAVEHR</span> Mantenimiento
                </p>
              </Button>
            </div>
          </div>

          {/* Right Column - Text Section */}
          <div className="w-full md:max-w-md mt-8 md:mt-16">
            <div>
              <h2 className="text-lg font-bold text-blue-900 uppercase underline mb-4 decoration-2 decoration-gray-light underline-offset-8">
                Lorem ipsum dolor sit
              </h2>
              {/* <div className="w-2/3 h-1 bg-gray-light mb-4"></div> */}
              <h1 className="text-4xl font-bold text-orange-500 mb-4">
                SAVEHR
              </h1>
              <p className="text-gray-700 text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <Button variant="primary">Descargar </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavehrDescripcion;
