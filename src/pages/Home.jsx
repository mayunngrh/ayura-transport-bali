import React from "react";

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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to Ayura Travel</h1>
        <p className="text-lg mt-4">
          Explore Bali with the best travel experience
        </p>
      </div>
    </div>
  );
};

export default Home;
