// libs
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const SavehrDescripcion = ({ className = "" }) => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [currentVideo, setCurrentVideo] = React.useState(0);

  // Video data array with IDs and thumbnails
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Video 1",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "9bZkp7q19f0",
      title: "Video 2",
      thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    },
    {
      id: "JGwWNGJdvx8",
      title: "SAVEHR Combustible",
      thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "SAVEHR Mantenimiento",
      thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    },
  ];

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleButtonClick = (index) => {
    setCurrentVideo(index);
    setIsVideoPlaying(false);
  };

  // Button styles from Button.js
  const baseStyles =
    "inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic group";
  const primaryStyles = `${baseStyles} bg-primary text-white`;
  const secondaryStyles = baseStyles;

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
                  src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=1`}
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
                    src={videos[currentVideo].thumbnail}
                    alt={`Play ${videos[currentVideo].title}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
            </div>

            {/* Navigation buttons - now directly below the video */}
            <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 justify-center">
              {videos.map((video, index) => {
                const isActive = index === currentVideo;
                const buttonStyles = isActive ? primaryStyles : secondaryStyles;
                const additionalStyles = isActive
                  ? "text-primary"
                  : "border border-primary text-primary border-2";

                return (
                  <button
                    key={video.id}
                    className={`${buttonStyles} ${additionalStyles}`}
                    onClick={() => handleButtonClick(index)}
                  >
                    <p
                      className={
                        video.title.includes("SAVEHR") ? "" : "text-nowrap"
                      }
                    >
                      {video.title.includes("SAVEHR") ? (
                        <>
                          <span className="font-bold">SAVEHR</span>{" "}
                          {video.title.split(" ")[1]}
                        </>
                      ) : (
                        video.title
                      )}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Text Section */}
          <div className="w-full md:max-w-md mt-8 md:mt-16">
            <div>
              <h2 className="text-lg font-bold text-blue-900 uppercase underline mb-4 decoration-2 decoration-gray-light underline-offset-8">
                Lorem ipsum dolor sit
              </h2>
              <h1 className="text-4xl font-bold text-orange-500 mb-4">
                SAVEHR
              </h1>
              <p className="text-gray-700 text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <Button variant="primary">
                Quiero saber más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavehrDescripcion;
