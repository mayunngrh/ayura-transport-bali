import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const location = useLocation();

  function handleNav() {
    setNav(!nav);
  }

  const navBarItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Package", path: "/package" },
    { name: "Airport Transfer", path: "/airport-transfer" },
    { name: "Charter Car", path: "/charter-car" },
  ];
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1240px] rounded-full z-50 px-4">
      <div className=" flex justify-between items-center h-48 px-4 max-w-[1240px] mx-auto text-white">
        {/* Company Logo */}
        <img
          src="/ayura_logo.svg"
          alt="Ayura Transport Logo"
          className="w-48 h-48 "
        />

        {/* Navbar Tabs */}
        <ul className="hidden md:flex justify-center border-2 rounded-full backdrop-blur-md shadow-lg z-200 px-4 py-4 mx-auto h-16 items-center">
          {navBarItems.map((item) => (
            <li
              key={item.path}
              className={`px-4 py-2 font-bold text-[16px] rounded-full ${
                location.pathname === item.path ? "bg-gray-500/60" : ""
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Menu Responsive */}
        <div onClick={handleNav} className="md:hidden ">
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={25} />}
        </div>

        <div
          className={
            !nav
              ? "fixed px-4 left-0 top-0 w-[60%] border-r h-screen z-150 border-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed px-4 left-0 top-0 w-[60%] border-r h-screen z-150 border-gray-900 bg-[#000300] ease-in-out left-[-100%] duration-300"
          }
        >
          <img
            src="/ayura_logo.svg"
            alt="Ayura Transport Logo"
            className="w-36 h-36"
            style={{
              clipPath: "inset(0px 0px 20px 0px)",
              transform: "translateY(20px) translateX(10px)",
            }}
          />
          <ul className="uppercase">
            <li className="px-5 py-2 mt-4 font-bold border-b border-gray-900 ">
              Home
            </li>
            <li className="px-5 py-2 mt-4 font-bold border-b border-gray-900 ">
              About Us
            </li>
            <li className="px-5 py-2 mt-4 font-bold border-b border-gray-900 ">
              Package
            </li>
            <li className="px-5 py-2 mt-4 font-bold border-b border-gray-900 ">
              Airport Transfer
            </li>
            <li className="px-5 py-2 mt-4 font-bold">Charter Car</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
