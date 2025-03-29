import React from "react";
import { ReactTyped } from "react-typed";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import DestinationGrid from "../components/DestinationGrid";
import ExperienceSection from "../components/ExperienceSection";
import FunActivities from "../components/FunActivities";

const Home = () => {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Added flex-col to stack sections properly */}
      {/* HERO SECTION */}
      <div className="relative w-full h-screen">
        <img
          src="/hero.png"
          alt="Hero Bedugul"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="absolute max-w-[1240px] w-full left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 text-white">
          <div>
            <div className="flex justify-center rounded-full bg-gray-400/20 w-60 mb-4">
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
            <button className="flex justify-center items-center rounded-full bg-white w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-400/20 transition duration-300 cursor-pointer">
              <FaWhatsapp size={20} />
              <p className="px-4">Reserve Now</p>
              <FaArrowRight className="" />
            </button>
          </div>

          {/* bottom description */}
          <div className="flex justify-between absolute top-120">
            {/* Item 1 */}
            <div className="flex items-center">
              <div className="rounded-full bg-gray-400/20">
                <IoDiamondOutline className=" m-4" size={25} />
              </div>
              <p className="px-4 capitalize text-justify text-[12px]">
                Explore Bali’s hidden gems through exotic destinations and
                unique travel routes.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center ml-6">
              <div className="rounded-full bg-gray-400/20">
                <GiMeditation className=" m-4" size={25} />
              </div>
              <p className="px-4 capitalize text-justify text-[12px]">
                Feel the richness of its culture and spirituality with authentic
                local experiences.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center ml-6">
              <div className="rounded-full bg-gray-400/20">
                <GrMapLocation className=" m-4" size={25} />
              </div>
              <p className="px-4 capitalize text-justify text-[12px]">
                Experience unforgettable adventures with thrilling activities in
                its breathtaking tropical landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Countless Destination */}
      <div className="">
        <DestinationGrid />
      </div>
      {/* Experience Section Destination */}
      <div className="mt-115">
        <ExperienceSection />
      </div>
      {/* Experience Section Destination */}
      <div className="mt-115">
        <FunActivities />
      </div>
    </div>
  );
};

export default Home;
