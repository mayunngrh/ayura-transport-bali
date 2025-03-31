import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tabContent, { specialTabContent } from "../components/TabContent";
import { tabs } from "../components/TabContent";
import { FaArrowRight } from "react-icons/fa";
import { handleWhatsAppRedirect } from "../data/WhatsApp";

const Package = () => {
  const [activeTab, setActiveTab] = useState("Ubud");

  return (
    <div>
      <div className="bg-black min-h-screen  px-5 md:px-20 py-50">
        {/* PackageNavBar */}
        <div className="min-w-full border-separate text-center align-middle">
          <div className="flex justify-center space-x-3 md:space-x-6 my-2 text-lg md:text-2xl lg:text-3xl relative">
            {/* Options */}
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`relative ${
                  tab === activeTab
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Line */}
          <div className="my-5 border border-white rounded-full border-3 flex justify-center"></div>
        </div>

        {/* NormalPackage - Except Pecatu*/}
        {activeTab != "Pecatu" && (
          <div className="flex flex-wrap justify-center items-center gap-10 my-20 w-full">
            {tabContent[activeTab].length > 0
              ? tabContent[activeTab].map((trip, index) => {
                  return (
                    <div
                      key={index}
                      className={`hover:invert transition duration-300 border border-black bg-white text-black py-6 px-10 rounded-4xl shadow-lg w-auto flex flex-col justify-between min-h-80`}
                    >
                      <h2 className="text-[24px] font-bold flex justify-center">
                        {trip.title}
                      </h2>
                      <div className="border border-black rounded-full border-3 flex justify-center"></div>
                      <div className="h-full">
                        <ul
                          className={`list-disc ml-5 mt-2 px-2 grid text-justify gap-1 ${
                            trip.activities.length >= 11
                              ? "grid-cols-3"
                              : trip.activities.length >= 6
                              ? "grid-cols-2"
                              : "grid-cols-1"
                          } gap-x-10 `}
                        >
                          {trip.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-center mt-5">
                        <button
                          onClick={handleWhatsAppRedirect}
                          className="group-hover:bg-white group-hover:text-black text-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold hover:bg-gray-500 transition duration-300 cursor-pointer"
                        >
                          <p className="px-4">Reserve Now</p>
                          <FaArrowRight className="" />
                        </button>
                      </div>
                    </div>
                  );
                })
              : undefined}
          </div>
        )}

        {/* SpecialPackage - Only for Ubud and Pecatu */}
        {(activeTab === "Ubud" || activeTab === "Pecatu") &&
          specialTabContent[activeTab]?.trips?.length > 0 && (
            <div className="flex justify-center my-20">
              <div className="rounded-4xl bg-white h-auto max-w-250 px-5 md:px-20 py-10">
                {/* PackageTitle */}
                <div className="text-center">
                  <h1 className="text-black text-2xl md:text-3xl font-bold">
                    {specialTabContent[activeTab]?.displayName || activeTab}
                  </h1>
                  <div className="border border-black border-3 w-full mx-auto my-2"></div>
                </div>

                {/* Package Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 min-w-100">
                  {specialTabContent[activeTab]?.trips.map((trip, index) => (
                    <div
                      key={index}
                      className="hover:invert transition duration-300 border border-black bg-white text-black p-6 border border-1 border-black w-full"
                    >
                      <div className="bg-black text-white text-center py-1 px-4 rounded-full mb-4">
                        <h2 className="font-bold">{trip.title}</h2>
                      </div>
                      <ul
                        className={`list-disc pl-5 grid ${
                          trip.activities.length >= 11
                            ? "grid-cols-3"
                            : trip.activities.length >= 6
                            ? "grid-cols-2"
                            : "grid-cols-1"
                        } gap-x-4`}
                      >
                        {trip.activities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Reserve Button */}
                <div className="flex justify-center mt-5">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="hover:invert border border-white text-white flex justify-center items-center rounded-full bg-black w-60 mt-4 py-2 text-[#003000] font-semibold transition duration-300 cursor-pointer"
                  >
                    <p className="px-4">Reserve Now</p>
                    <FaArrowRight className="" />
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Package;
