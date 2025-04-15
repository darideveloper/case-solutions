// libs
import React from "react"
import Title from "../ui/Title"
import Button from "../ui/Button"

const SavehrDescripcion = ({ className = "" }) => {
  const [currentVideo, setCurrentVideo] = React.useState(0)

  // Video data array with IDs and thumbnails
  const videos = [
    {
      id: "qs-GD-BkzcI",
      title: "Video",
    },
    {
      id: "nFA65dZW7Bw",
      title: "SAVEHR Combustible",
    },
    {
      id: "xew1OmJSrrs",
      title: "SAVEHR Mantenimiento",
    },
  ]

  const handleButtonClick = (index) => {
    setCurrentVideo(index)
  }

  // Button styles from Button.js
  const baseStyles =
    "inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors italic group"
  const primaryStyles = `${baseStyles} bg-primary text-white`
  const secondaryStyles = baseStyles

  return (
    <section className={`relative bg-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto p-8 bg-white">
        {/* Main content container */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-8">
          {/* Left Column - Video Section and Navigation */}
          <div className="w-full flex flex-col">
            {/* YouTube video placeholder */}
            <div className="relative mb-6 p-6 w-full md:max-w-4/5 mx-auto">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videos[currentVideo].id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Navigation buttons - now directly below the video */}
            <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 justify-center">
              {videos.map((video, index) => {
                const isActive = index === currentVideo
                const buttonStyles = isActive ? primaryStyles : secondaryStyles
                const additionalStyles = isActive
                  ? "text-primary"
                  : "border border-primary text-primary border-2"

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
                )
              })}
            </div>
          </div>

          {/* Right Column - Text Section */}
          <div className="w-full md:max-w-md mt-8 md:mt-16">
            <div>
              <Title className="text-4xl font-bold text-orange-500 mb-4">
                SAVEHR
              </Title>
              <p className="text-gray-700 text-sm mb-6">
                <strong>SAVEHR</strong> es un software para gestionar y monitorear la flota vehicular de su empresa, brindando visibilidad completa sobre cada unidad: mantenimiento, costos, disponibilidad, y más.
              </p>
              <Button variant="primary" href="/contact">
                Quiero saber más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SavehrDescripcion
