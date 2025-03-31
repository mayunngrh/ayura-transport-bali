import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="pl-24 text-5xl font-black leading-tight">
          We Are Ready To <br /> Accompany You On <br /> Your Journey.
        </h2>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 text-sm text-gray-300 mt-6 md:mt-0">
        <div className="flex flex-col items-center md:items-end">
          {/* Logo */}
          <img
            src="/ayura_logo.svg"
            alt="Ayura Transport Bali"
            className="h-32 object-contain"
          />

          {/* Description */}
          <p className="text-justify leading-relaxed">
            Ayura Transport Bali is a trusted transportation service providing
            safe, comfortable, and reliable travel across Bali. With
            well-maintained vehicles and professional drivers, we offer
            personalized solutions for tourists, business travelers, and locals.
            From airport transfers to private tours, we ensure a seamless
            journey to explore Bali with ease.
          </p>

          {/* Learn More Button */}
          <button className="mt-8 bg-white border border-1 border-black text-black px-5 py-2 rounded-full flex items-center gap-2 hover:invert transition">
            <FaWhatsapp size={24} />
            Learn More
          </button>
        </div>
      </div>
    </footer>
  );
}
