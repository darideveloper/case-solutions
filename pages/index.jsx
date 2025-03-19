import Image from "next/image"
import { fontRegular } from "@/lib/fonts"

// Components
import Hero from "@/components/layout/Hero"
import Features from "@/components/layout/Features"
import Savehr from "@/components/layout/Savehr"
import Navbar from "@/components/layout/Navbar"


export default function Home() {
  return (
    <div
      className={`
        ${fontRegular.className}
      `}
    >
      <Navbar/>
      <Hero />
      <Features />
      <Savehr />
    </div>
  )
}
