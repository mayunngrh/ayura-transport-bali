import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ExpandableTable from "../components/ExpandableTable";
import { handleWhatsAppRedirect } from "../data/WhatsApp";

const AirportTransfer = () => {
  return (
    <div>
      <div className="bg-black min-h-screen  px-5 md:px-20 py-50">
        {/* Page Title */}
        <div className="max-w-300 mx-auto flex justify-left">
          <h1 className="text-[32px] text-white font-bold">
            Airport Transfer Package
          </h1>
        </div>

        {/* Table */}
        <div>
          <ExpandableTable />
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AirportTransfer;
