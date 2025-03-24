"use client";
import Image from "next/image";
import { useState } from "react";

export default function TestimonialCard({title, subtitle, className = "" }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div
      className={`relative w-full h-full p-8 border-2 border-gray-light rounded-lg transition-opacity duration-300 cursor-pointer opacity-60 hover:opacity-100 ${className}`}
      onClick={() => setOpen(!open)}
    >
      <Image
        src="/images/box-icon-white.png"
        className="absolute top-[-14px] left-8 bg-primary"
        alt="Box Icon"
        width={25}
        height={25}
      />
      <div className="flex flex-col">
        <div className="title">
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <div className={`mt-4 ${open ? "" : "hidden"}`}>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}