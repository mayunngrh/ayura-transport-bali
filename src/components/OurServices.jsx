import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 ">
      {/* Title */}
      <h2 className="max-w-[1240px] mx-auto text-3xl md:text-4xl font-bold text-black mb-6">
        Our Services
      </h2>

      {/* Item1 */}
      <div className="mt-12 flex max-w-[1240px] justify-center items-center mx-auto">
        <div className="relative mx-8 w-full text-white rounded-3xl bg-black h-64 p-8 overflow-hidden">
          <h2 className="text-3xl font-bold text-white">Air Transport</h2>
          <p className="mt-8 max-w-[350px]">
            We will escort you from the airport to your travel destination!
          </p>
          <button
            onClick={() => {
              navigate("/airport-transfer");
            }}
            className="mt-8 flex justify-center items-center rounded-full bg-white w-60 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer"
          >
            <p className="px-4">Learn More</p>
            <FaArrowRight />
          </button>

          {/* Airplane Image Positioned Correctly */}
          <img
            src="/lined_plane.svg"
            alt="Airplane"
            className="absolute -bottom-10 -right-30 w-96 opacity-75"
          />
        </div>

        {/* Item2 */}
        <div className="relative mx-8 w-full text-white rounded-3xl bg-black h-64 p-8 overflow-hidden">
          <h2 className="text-3xl font-bold text-white">Charter Car</h2>
          <p className="mt-8 max-w-[350px]">
            We provide charter car service to take you around our beautiful
            island!
          </p>
          <button
            onClick={() => {
              navigate("/charter-car");
            }}
            className="mt-8 flex justify-center items-center rounded-full bg-white w-60 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer"
          >
            <p className="px-4">Learn More</p>
            <FaArrowRight />
          </button>

          {/* Airplane Image Positioned Correctly */}
          <img
            src="/lined_car.svg"
            alt="Airplane"
            className="absolute -bottom-5 -right-10 w-74 opacity-75"
          />
        </div>
      </div>
      {/* Item3 */}
      <div className="max-w-[1180px] mx-auto relative mt-12  w-full text-white rounded-3xl bg-black h-64 p-8 overflow-hidden">
        <h2 className="text-3xl font-bold text-white">Trip Package</h2>
        <p className="mt-8 max-w-[600px]">
          We also provide trip packages for those who are too busy to plan their
          trips!
        </p>
        <button
          onClick={() => {
            navigate("/package");
          }}
          className="mt-8 flex justify-center items-center rounded-full bg-white w-60 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer"
        >
          <p className="px-4">Learn More</p>
          <FaArrowRight />
        </button>

        {/* Airplane Image Positioned Correctly */}
        <img
          src="/lined_travel.svg"
          alt="Airplane"
          className="absolute -bottom-20 -right-10 w-160 opacity-75"
        />
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default OurServices;
