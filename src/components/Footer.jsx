import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-4 border-white bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            We Are Ready To <br /> Accompany You On <br /> Your Journey.
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-gray-300 flex flex-col items-center md:items-end text-sm">
          {/* Logo */}
          <img
            src="/ayura_logo.svg"
            alt="Ayura Transport Bali"
            className="h-24 md:h-32 object-contain"
          />

          {/* Description */}
          <p className="text-justify leading-relaxed mt-4 max-w-lg">
            Ayura Transport Bali is a trusted transportation service providing
            safe, comfortable, and reliable travel across Bali. From airport
            transfers to private tours, we ensure a seamless journey to explore
            Bali with ease.
          </p>

          {/* Learn More Button */}
          <button className="mt-6 bg-white border border-black text-black px-5 py-2 rounded-full flex items-center gap-2 hover:invert transition">
            <FaWhatsapp size={20} />
            Learn More
          </button>
        </div>
      </div>
    </footer>
  );
}
