import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const CharterCar = () => {
  return (
    <div>

      <div class="bg-black min-h-screen mx-20 px-20 py-50">
        {/* Page Title */}
        <div className="max-w-300 mx-auto flex justify-left">
          <h1 className="text-[32px] text-white font-bold">Charter Car</h1>
        </div>

        {/* Half Day Card */}
        <div className="flex flex-wrap justify-center items-center">
          <div className='bg-white py-10 my-10 w-300 rounded-4xl'>
            <div>
              <h2 className="text-[32px] text-black  text-center font-extrabold">Small Car</h2>
              <hr className="border-4 border-black my-4 mx-20 rounded" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 my-20 w-full">
              <div class="group border border-black hover:invert transition duration-300 w-100 bg-white  py-5 px-10 mx-12 rounded-4xl">
                <img
                  src="/half_day.png"
                  className='mx-auto mb-10 '
                />
                <h2 className="text-[24px] text-black  text-center font-extrabold">Half Day</h2>
                <hr className="border-4 border-black  my-4 rounded" />
                <h2 className="text-[20px]  font-thin text-center">1-5 Hours</h2>
                <h2 className="text-[20px] text-black  text-center font-extrabold mt-5">
                  <p>IDR 450K</p>
                  <p>US $27</p>
                </h2>
                <div className='flex justify-center mt-5'>
                  <button className="text-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-500 transition duration-300 cursor-pointer">
                    <p className="px-4">Reserve Now</p>
                    <FaArrowRight className="" />
                  </button>
                </div>
              </div>

              {/* Full Day Card */}
              <div class="group border border-black hover:invert transition duration-300 w-100 bg-white py-5 px-10 mx-12 rounded-4xl">
                <img
                  src="/full_day.png"
                  className='mx-auto mb-4'
                />
                <h2 className="text-[24px] text-black text-center font-extrabold">Full Day</h2>
                <hr className="border-4 border-black my-4 rounded" />
                <h2 className="text-[20px] font-thin text-center">1-5 Hours</h2>
                <h2 className="text-[20px] text-black text-center font-extrabold mt-5">
                  <p>IDR 750K</p>
                  <p>US $45</p>
                </h2>
                <div className='flex justify-center mt-5'>
                  <button className="text-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-500 transition duration-300 cursor-pointer">
                    <p className="px-4">Reserve Now</p>
                    <FaArrowRight className="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className='bg-white py-10 my-10 w-300 rounded-4xl'>
            <h2 className="text-[32px] text-black  text-center font-extrabold">Big Car</h2>
            <hr className="border-4 border-black my-4 mx-20 rounded" />
            <h2 className="text-[32px] text-black  text-center font-light">1-10 Hours</h2>
            <div className="flex flex-wrap justify-center my-10">
              <div className='my-5 mx-20'>
                <div>
                  <h2 className="text-[24px] text-black  text-center font-light">HIACE</h2>
                  <div className="flex flex-wrap justify-center w-100">
                    <img src="/Hiace.png" alt="placeholder" className='h-50' />
                  </div>
                  <div>
                    <h2 className="text-[24px] text-black  text-center font-light">(1-15 Person)</h2>
                    <h2 className="text-[32px] text-black  text-center font-extrabold">IDR 1300K</h2>
                    <h2 className="text-[32px] text-black  text-center font-extrabold">US $78</h2>
                  </div>
                </div>
              </div>
              <div className='my-5 mx-20'>
                <div>
                  <h2 className="text-[24px] text-black  text-center font-light">ELF GIGA</h2>
                  <div className="flex flex-wrap justify-center w-100">
                    <img src="/Elf Giga.png" alt="placeholder" className='h-50' />
                  </div>
                  <div>
                    <h2 className="text-[24px] text-black  text-center font-light">(1-20 Person)</h2>
                    <h2 className="text-[32px] text-black  text-center font-extrabold">IDR 1600K</h2>
                    <h2 className="text-[32px] text-black  text-center font-extrabold">US $100</h2>
                  </div>
                </div>
              </div>
              <div className='my-5 mx-20'>
                <div>
                  <h2 className="text-[24px] text-black  text-center font-light">LONG BUS</h2>
                  <div className="flex flex-wrap justify-center w-100">
                    <img src="/Long Bus.png" alt="placeholder" className='h-50' />
                  </div>
                  <div>
                    <h2 className="text-[24px] text-black  text-center font-light">(1-35 Person)</h2>
                    <h2 className="text-[32px] text-black  text-center font-extrabold">IDR 4000K</h2>
                    <h2 className="text-[32px] text-black  text-center font-extrabold">US $238</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-5'>
              <button className="text-white border border-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold hover:invert transition duration-300 cursor-pointer">
                <p className="px-4">Reserve Now</p>
                <FaArrowRight className="" />
              </button>
            </div>
          </div>
        </div>
        <p className='my-5 text-white text-[20px] font-thin text-center'>Prices apply in the area of:</p>
        <p className='my-5 text-white text-[20px] font-extrabold text-center'>Nusa Dua, Jimbaran, Kuta, Seminyak, Ubud, Gianyar</p>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CharterCar
