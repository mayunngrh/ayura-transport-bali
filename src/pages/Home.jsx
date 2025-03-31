import React from "react";
import { ReactTyped } from "react-typed";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import DestinationGrid from "../components/DestinationGrid";
import ExperienceSection from "../components/ExperienceSection";
import FunActivities from "../components/FunActivities";
import Footer from "../components/Footer";
import OurServices from "../components/OurServices";
import { handleWhatsAppRedirect } from "../data/WhatsApp";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen">
        <img
          src="/hero.png"
          alt="Hero Bedugul"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="absolute max-w-[1240px] w-full left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 text-white text-center">
          <div>
            <div className="mt-24 sm:mt-12  md:mt-48  flex justify-center rounded-full bg-gray-400/20 w-60 mb-4 mx-auto">
              <p className="py-2">Your Travel Companion</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Welcome to Ayura Travel Bali
            </h1>
            <ReactTyped
              strings={["EXPLORE.", "FEEL.", "EXPERIENCE."]}
              typeSpeed={120}
              backSpeed={50}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
              loop
            />
            <p className="text-lg mt-4">
              Explore Bali with the best travel experience
            </p>
            <button
              onClick={handleWhatsAppRedirect}
              className="flex justify-center items-center rounded-full bg-white w-48 sm:w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer mx-auto"
            >
              <FaWhatsapp size={20} />
              <p className="px-4">Reserve Now</p>
              <FaArrowRight />
            </button>
          </div>

          {/* Bottom Description */}
          <div className="mt-24 sm:mt-32 md:mt-36 hidden md:flex  flex-col md:flex-row justify-center items-center gap-6 px-4">
            {/* Item 1 */}
            <div className="flex items-center">
              <div className="rounded-full bg-gray-400/20 p-3">
                <IoDiamondOutline size={25} />
              </div>
              <p className="px-4 text-sm sm:text-[14px] text-center md:text-left">
                Explore Bali’s hidden gems through exotic destinations and
                unique travel routes.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center mt-4 md:mt-0">
              <div className="rounded-full bg-gray-400/20 p-3">
                <GiMeditation size={25} />
              </div>
              <p className="px-4 text-sm sm:text-[14px] text-center md:text-left">
                Feel the richness of its culture and spirituality with authentic
                local experiences.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center mt-4 md:mt-0">
              <div className="rounded-full bg-gray-400/20 p-3">
                <GrMapLocation size={25} />
              </div>
              <p className="px-4 text-sm sm:text-[14px] text-center md:text-left">
                Experience unforgettable adventures with thrilling activities in
                breathtaking landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Section */}
      <div>
        <DestinationGrid />
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <ExperienceSection />
      </div>

      {/* Fun Activities Section */}
      <div className="mt-12">
        <FunActivities />
      </div>

      {/* Our Services */}
      <div className="mt-12">
        <OurServices />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
