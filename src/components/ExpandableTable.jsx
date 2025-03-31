import React, { useState } from "react";
import { FaWhatsapp, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { handleWhatsAppRedirect } from "../data/WhatsApp";

export default function ExpandableTable() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Expand And Minimize Control
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Data
  const locations = [
    { name: "Kuta", price: "150K", usd: "$9" },
    { name: "Legian", price: "200K", usd: "$12" },
    { name: "Seminyak", price: "250K", usd: "$15" },
    { name: "Jimbaran", price: "250K", usd: "$15" },
    { name: "Nusa Dua", price: "250K", usd: "$15" },
    { name: "Sanur", price: "250K", usd: "$15" },
    { name: "Kerobokan", price: "250K", usd: "$15" },
    { name: "Canggu", price: "300K", usd: "$18" },
    { name: "Munggu", price: "400K", usd: "$24" },
    { name: "Uluwatu", price: "400K", usd: "$24" },
    { name: "Tanah Lot", price: "400K", usd: "$24" },
    { name: "Ubud", price: "400K", usd: "$24" },
    { name: "Padang Bai", price: "500K", usd: "$30" },
    { name: "Candidasa", price: "600K", usd: "$36" },
    { name: "Kintamani", price: "650K", usd: "$39" },
    { name: "Lovina", price: "750K", usd: "$45" },
    { name: "Amed", price: "800K", usd: "$48" },
    { name: "Pamutaran", price: "900K", usd: "$54" },
    { name: "Gilimanuk", price: "950K", usd: "$57" },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-separate text-center align-middle">
        {/* Head Of Table  */}
        <thead className="bg-gray-200 text-center">
          <tr>
            <th className="px-4 py-2 rounded-full w-100 font-bold">District</th>
            <th className="px-4 py-2 rounded-full w-60 font-bold">Price</th>
            <th className="px-4 py-2 rounded-full w-50 font-bold">Booking</th>
          </tr>
        </thead>

        {/* Body/Content Of Table */}
        <tbody className="bg-white text-center align-middle">
          {locations
            .slice(0, isExpanded ? locations.length : 5)
            .map((location, index) => (
              <tr
                key={index}
                className="group bg-white hover:bg-black hover:text-white"
              >
                <td className="rounded-full italic">{location.name}</td>
                <td className=" rounded-full font-bold">
                  IDR {location.price} / US {location.usd}
                </td>
                <td className="rounded-full" onClick={handleWhatsAppRedirect}>
                  <div className="rounded-full border border-white flex w-full h-full justify-center items-center bg-white hover:bg-black text-[#003000] font-semibold transition duration-300 cursor-pointer">
                    <p className="text-blue-500 italic font-black py-2">
                      Book Now
                    </p>
                    <FaWhatsapp className="text-green-500" size={20} />
                  </div>
                </td>
              </tr>
            ))}

          {/* Toggle Expand/Minimize */}
          <tr
            className="bg-white hover:bg-black hover:text-white transition duration-300"
            onClick={toggleExpand}
          >
            <td
              className="px-4 py-2 rounded-full text-center border border-black hover:border-white"
              colSpan="3"
            >
              {isExpanded ? (
                <div className="flex flex-col items-center">
                  <span>See Less</span>
                  <FaCaretUp className="-mt-1 scale-x-300 scale-y-150" />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <span>See More</span>
                  <FaCaretDown className="-mt-1 scale-x-300 scale-y-150" />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
