import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="w-full px-6 py-12">
      {/* Title */}
      <h2 className="max-w-[1240px] mx-auto text-3xl md:text-4xl font-bold text-black mb-6">
        Our Services
      </h2>

      <div className=" flex max-w-[1240px] justify-center items-center mx-auto">
        <div className="mx-8 w-full text-white rounded-3xl bg-black  h-64 p-8">
          <h2 className="text-3xl font-bold text-white">Air Transport</h2>
          <p className="mt-8 max-w-[350px]">
            We will escort you from the airport to your travel destination!
          </p>
          <button className="mt-8 flex justify-center items-center rounded-full bg-white w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer">
            <p className="px-4">Reserve Now</p>
            <FaArrowRight className="" />
          </button>
        </div>
        <div className="mx-8 w-full text-white rounded-3xl bg-black  h-64">
          2
        </div>
      </div>
    </div>
  );
};

export default OurServices;
