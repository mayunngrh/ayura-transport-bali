import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { handleWhatsAppRedirect } from "../data/WhatsApp";

const CharterCar = () => {
  return (
    <div>
      <div class="bg-black min-h-screen  px-5 md:px-20 py-50">
        {/* Page Title */}
        <div className="max-w-300 mx-auto flex justify-left">
          <h1 className="text-[32px] text-white font-bold">Charter Car</h1>
        </div>

        {/* Half Day Card */}
        <div className="flex flex-wrap justify-center items-center gap-10 my-20 w-full">
          <div class="group border border-black hover:invert transition duration-300 w-100 bg-white  py-5 px-10 mx-12 rounded-4xl">
            <img src="/half_day.png" className="mx-auto mb-10 " />
            <h2 className="text-[24px] text-black  text-center font-extrabold">
              Half Day
            </h2>
            <hr className="border-4 border-black  my-4 rounded" />
            <h2 className="text-[20px]  font-thin text-center">1-5 Hours</h2>
            <h2 className="text-[20px] text-black  text-center font-extrabold mt-5">
              <p>IDR 450K</p>
              <p>US $27</p>
            </h2>
            <div className="flex justify-center mt-5">
              <button
                onClick={handleWhatsAppRedirect}
                className="text-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-500 transition duration-300 cursor-pointer"
              >
                <p className="px-4">Reserve Now</p>
                <FaArrowRight className="" />
              </button>
            </div>
          </div>

          {/* Full Day Card */}
          <div class="group border border-black hover:invert transition duration-300 w-100 bg-white py-5 px-10 mx-12 rounded-4xl">
            <img src="/full_day.png" className="mx-auto mb-4" />
            <h2 className="text-[24px] text-black text-center font-extrabold">
              Full Day
            </h2>
            <hr className="border-4 border-black my-4 rounded" />
            <h2 className="text-[20px] font-thin text-center">1-5 Hours</h2>
            <h2 className="text-[20px] text-black text-center font-extrabold mt-5">
              <p>IDR 750K</p>
              <p>US $45</p>
            </h2>
            <div className="flex justify-center mt-5">
              <button
                onClick={handleWhatsAppRedirect}
                className="text-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-500 transition duration-300 cursor-pointer"
              >
                <p className="px-4">Reserve Now</p>
                <FaArrowRight className="" />
              </button>
            </div>
          </div>
        </div>
        <p className="my-5 text-white text-[20px] font-thin text-center">
          Prices apply in the area of:
        </p>
        <p className="my-5 text-white text-[20px] font-extrabold text-center">
          Nusa Dua, Jimbaran, Kuta, Seminyak, Ubud, Gianyar
        </p>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CharterCar;
