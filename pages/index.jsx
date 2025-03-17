import Image from "next/image"
import { fontRegular } from "@/lib/fonts"

// Components
import Hero from "@/components/layout/Hero"
import Features from "@/components/layout/Features"
import Savehr from "@/components/layout/Savehr"


export default function Home() {
  return (
    <div
      className={`
        ${fontRegular.className}
      `}
    >
      <Hero />
      <Features />
      <Savehr />
    </div>
  )
}
