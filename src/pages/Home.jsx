import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/hero.png"
        alt="Hero Bedugul"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Overlay (optional for darkening the image) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute max-w-[1240px] w-full left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 text-white">
        <div className="flex justify-center rounded-full bg-gray-400/10 w-60">
          <p className="py-2">Your Travel Companion</p>
        </div>
        <h1 className="text-2xl font-bold">Welcome to Ayura Travel Bali</h1>
        <ReactTyped
          strings={["EXPLORE.", "FEEL.", "EXPERIENCE."]}
          typeSpeed={120}
          backSpeed={50}
          className="text-8xl font-bold"
          loop
        />
        <p className="text-lg mt-4">
          Explore Bali with the best travel experience
        </p>
      </div>

      <div className="h-1500"></div>
    </div>
  );
};

export default Home;
