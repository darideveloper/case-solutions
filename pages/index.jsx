import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Components
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";


export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
    </>
  );
}
