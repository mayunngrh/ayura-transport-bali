import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 md:px-6">
      {/* Title */}
      <h2 className="max-w-[1240px] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1240px] mx-auto">
        {/* Service 1 */}
        <div className="relative w-full text-white rounded-3xl bg-black p-8 overflow-hidden h-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
            Air Transport
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-[350px]">
            We will escort you from the airport to your travel destination!
          </p>
          <button
            onClick={() => navigate("/airport-transfer")}
            className="mt-6 flex justify-center items-center rounded-full bg-white w-full md:w-60 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer"
          >
            <p className="px-4">Learn More</p>
            <FaArrowRight />
          </button>
          <img
            src="/lined_plane.svg"
            alt="Airplane"
            className="absolute bottom-0 right-0 max-w-[150px] md:max-w-[200px] lg:max-w-[250px] opacity-75"
          />
        </div>

        {/* Service 2 */}
        <div className="relative w-full text-white rounded-3xl bg-black p-8 overflow-hidden h-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
            Charter Car
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-[350px]">
            We provide charter car service to take you around our beautiful
            island!
          </p>
          <button
            onClick={() => navigate("/charter-car")}
            className="mt-6 flex justify-center items-center rounded-full bg-white w-full md:w-60 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer"
          >
            <p className="px-4">Learn More</p>
            <FaArrowRight />
          </button>
          <img
            src="/lined_car.svg"
            alt="Car"
            className="absolute bottom-0 right-0 max-w-[150px] md:max-w-[200px] lg:max-w-[250px] opacity-75"
          />
        </div>
      </div>

      {/* Single Service (Trip Package) */}
      <div className="max-w-[1240px] mx-auto mt-8">
        <div className="relative w-full text-white rounded-3xl bg-black p-8 overflow-hidden h-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
            Trip Package
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-[600px]">
            We also provide trip packages for those who are too busy to plan
            their trips!
          </p>
          <button
            onClick={() => navigate("/package")}
            className="mt-6 flex justify-center items-center rounded-full bg-white w-full md:w-60 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer"
          >
            <p className="px-4">Learn More</p>
            <FaArrowRight />
          </button>
          <img
            src="/lined_travel.svg"
            alt="Trip"
            className="absolute bottom-0 right-0 max-w-[300px] md:max-w-[400px] lg:max-w-[400px] opacity-75"
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 md:h-24"></div>
    </div>
  );
};

export default OurServices;
