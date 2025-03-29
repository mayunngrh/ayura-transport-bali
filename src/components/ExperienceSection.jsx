import React from "react";
import { FaHandshake, FaBus } from "react-icons/fa"; // Import icons

const ExperienceSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Text & Features */}
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-4xl font-bold leading-tight">
          Experience Your Story With <br /> Our Expert Guides
        </h2>
        <p className="mt-4 text-gray-700">
          Our professional team will ensure that you have{" "}
          <span className="font-bold">THE</span> best experience possible!
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-6">
          {/* Safe Traveling */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center bg-black text-white rounded-full">
              <FaHandshake className="m-4" size={48} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Safe Traveling</h3>
              <p className="text-gray-600 text-sm">
                With our professional guides, we will ensure your safety
                throughout your journey!
              </p>
            </div>
          </div>

          {/* Easy Transport */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center bg-black text-white rounded-full">
              <FaBus className="m-4" size={48} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Easy Transport</h3>
              <p className="text-gray-600 text-sm">
                Our trusted transportation service will ensure you have the best
                ride across Bali!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <img
          src="/rice-field.jpg"
          alt="Rice fields in Bali"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
