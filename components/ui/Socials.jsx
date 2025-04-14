import Link from "next/link";
import Image from "next/image";


export default function Socials() {
  const socials = [
    {
      "link": "https://wa.me/message/EPV5DCXTRF65E1",
      "icon": "/images/icons/whatsapp.svg",
    },
    {
      "link": "https://www.facebook.com/share/1ADTQfDSw2/ ",
      "icon": "/images/icons/facebook.svg",
    },
    {
      "link": "https://x.com/CASESOLUTIONSC1?t=0T3gwTXlRvh01HFVsm1HYw&s=09 ",
      "icon": "/images/icons/twitterx.svg",
    },
  ]

  return (
    <div className="flex justify-center gap-4 md:justify-start">
    {
      socials.map((social, index) => (
      <Link
        key={index}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            duration-300
            hover:opacity-80
          `}
      >
        <Image alt="whatsapp" src={social.icon} width={30} height={30} />
      </Link>
      ))
    }
    </div>
  )
}