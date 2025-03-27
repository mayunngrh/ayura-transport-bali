import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className=" flex justify-between items-center h-36 px-4 max-w-[1240px] mx-auto text-white">
      {/* Company Logo */}
      <img
        src="/ayura_logo.svg"
        alt="Ayura Transport Logo"
        className="w-36 h-36 mix-blend-screen"
      />

      {/* Navbar Tabs */}
      <ul className="hidden md:flex justify-center border-2 rounded-full px-4 py-2 mx-auto h-12 items-center ">
        {/* Desktop Navbar */}
        <ul className="hidden md:flex justify-center border-2 rounded-full px-4 py-2 mx-auto h-12 items-center">
          <li className="px-4 py-2 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2 font-bold">
            <Link to="/package">Package</Link>
          </li>
          <li className="px-4 py-2 font-bold">
            <Link to="/airport-transfer">Airport Transfer</Link>
          </li>
          <li className="px-4 py-2 font-bold">
            <Link to="/charter-car">Charter Car</Link>
          </li>
        </ul>
      </ul>

      {/* Menu Responsive */}
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed px-4 left-0 top-0 w-[60%] border-r h-full border-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed px-4 left-0 top-0 w-[60%] border-r h-full border-gray-900 bg-[#000300] ease-in-out left-[-100%] duration-300"
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
  );
};

export default Navbar;
