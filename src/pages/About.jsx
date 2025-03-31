import React from 'react'
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div class="grid bg-black min-h-screen mx-20 px-20 py-50">

        {/* Ayura Logo */}
        <div className="flex justify-center">
          <img
            src="/ayura_logo.svg"
            alt="Ayura Transport Logo"
            className="w-75 h-75 "
          />
        </div>

        {/* Description */}
        <div className="max-w-140 mx-auto">
          <p className='text-white text-[20px] text-justify'> is a trusted transportation service providing safe, comfortable, and reliable travel across Bali. With well-maintained vehicles and professional drivers, we offer personalized solutions for tourists, business travelers, and locals. From airport transfers to private tours, we ensure a seamless journey to explore Bali with ease.</p>
        </div>

        {/* Slogan */}
        <div className="mx-auto my-20">
          <p className='text-white text-[48px] text-center font-bold'> We are ready to accompany you on your journey.</p>
        </div>

        {/* Learn More */}
        <div className="mx-auto my-20">
          <button className="flex border border-1 border-black justify-center items-center rounded-full bg-white w-60 mt-4 py-2 text-[#003000] font-semibold hover:invert transition duration-300 cursor-pointer">
            <FaWhatsapp size={20} />
            <p className="px-4">Learn More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
