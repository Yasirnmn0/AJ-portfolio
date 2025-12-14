"use client";
// app/components/Hero.tsx
import AnimatedTitle from "./AnimatedTitle";
import { ChevronDown } from "lucide-react"; // Import Lucide icon

export default function Hero() {
  const accentColorHex = "#20C997";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slider3.jpg')",
          filter: "brightness(20%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center text-center h-screen">
        {/* Welcome Text */}
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-medium mb-4 mt-0">
          Welcome
        </h1>

        {/* Animated Title Component */}
        <span className="mb-4">
          <AnimatedTitle />
        </span>

        {/* Location Text */}
        <p className="text-white text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium mb-4 mt-0">
          Senior Technology Leader in Cloud, AI, Retail ERP
        </p>

        {/* Hire Me Button */}
        <button
          className="rounded-full text-[#20C997] text-base font-medium uppercase tracking-wider hover:bg-[#20C997] hover:text-white border-2 transition-colors mt-2"
          style={{
            borderColor: accentColorHex,
            padding: "12.8px 41.6px",
          }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Hire Me
        </button>

        {/* Down Arrow */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  );
}
