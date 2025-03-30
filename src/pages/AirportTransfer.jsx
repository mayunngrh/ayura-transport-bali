import React from 'react'
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ExpandableTable from '../components/ExpandableTable';

const AirportTransfer = () => {
  return (
    <div>
      <div className="bg-black mx-20 px-20 py-50">
        <div className="max-w-300 mx-auto flex justify-left">
          <h1 className="text-[32px] text-white font-bold">Airport Transfer Package</h1>
        </div>
        <div>
          <ExpandableTable />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AirportTransfer
