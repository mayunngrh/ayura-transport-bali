import React, { useState } from "react";
import { FaWhatsapp, FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function ExpandableTable() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Expand And Minimize Control
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Data
    const locations = [
        { name: "Kuta", sprice: "150K", susd: "$9", bprice: "150K", busd: "$9" },
        { name: "Legian", sprice: "200K", susd: "$12", bprice: "150K", busd: "$9" },
        { name: "Seminyak", sprice: "250K", susd: "$15", bprice: "150K", busd: "$9" },
        { name: "Jimbaran", sprice: "250K", susd: "$15", bprice: "150K", busd: "$9" },
        { name: "Nusa Dua", sprice: "250K", susd: "$15", bprice: "150K", busd: "$9" },
        { name: "Sanur", sprice: "250K", susd: "$15", bprice: "150K", busd: "$9" },
        { name: "Kerobokan", sprice: "250K", susd: "$15", bprice: "150K", busd: "$9" },
        { name: "Canggu", sprice: "300K", susd: "$18", bprice: "150K", busd: "$9" },
        { name: "Munggu", sprice: "400K", susd: "$24", bprice: "150K", busd: "$9" },
        { name: "Uluwatu", sprice: "400K", susd: "$24", bprice: "150K", busd: "$9" },
        { name: "Tanah Lot", sprice: "400K", susd: "$24", bprice: "150K", busd: "$9" },
        { name: "Ubud", sprice: "400K", susd: "$24", bprice: "150K", busd: "$9" },
        { name: "Padang Bai", sprice: "500K", susd: "$30", bprice: "150K", busd: "$9" },
        { name: "Candidasa", sprice: "600K", susd: "$36", bprice: "150K", busd: "$9" },
        { name: "Kintamani", sprice: "650K", susd: "$39", bprice: "150K", busd: "$9" },
        { name: "Lovina", sprice: "750K", susd: "$45", bprice: "150K", busd: "$9" },
        { name: "Amed", sprice: "800K", susd: "$48", bprice: "150K", busd: "$9" },
        { name: "Pamutaran", sprice: "900K", susd: "$54", bprice: "150K", busd: "$9" },
        { name: "Gilimanuk", sprice: "950K", susd: "$57", bprice: "150K", busd: "$9" }
    ];

    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full border-separate text-center align-middle">

                {/* Head Of Table  */}
                <thead className="bg-gray-200 text-center">
                    <tr>
                        <th className="px-4 py-2 rounded-full w-100 font-bold">District</th>
                        <th className="px-4 py-2 rounded-full w-60 font-bold">Small Car</th>
                        <th className="px-4 py-2 rounded-full w-60 font-bold">Big Car</th>
                        <th className="px-4 py-2 rounded-full w-50 font-bold">Booking</th>
                    </tr>
                </thead>

                {/* Body/Content Of Table */}
                <tbody className="bg-white text-center align-middle">
                    {locations.slice(0, isExpanded ? locations.length : 5).map((location, index) => (
                        <tr key={index} className="group bg-white hover:bg-black hover:text-white">
                            <td className="px-4 py-2 rounded-full italic">{location.name}</td>
                            <td className="px-4 py-2 rounded-full font-bold">IDR {location.sprice} / US {location.susd}</td>
                            <td className="px-4 py-2 rounded-full font-bold">IDR {location.bprice} / US {location.busd}</td>
                            <td className="px-4 py-2 rounded-full">
                                <div className="rounded-full border border-white flex w-full h-full justify-center items-center bg-white hover:bg-black text-[#003000] font-semibold transition duration-300 cursor-pointer">
                                    <p className="text-blue-500 italic font-black">Book Now</p>
                                    <FaWhatsapp className="text-green-500" size={20} />
                                </div>
                            </td>
                        </tr>
                    ))}

                    {/* Toggle Expand/Minimize */}
                    <tr className="bg-white hover:bg-black hover:text-white transition duration-300" onClick={toggleExpand}>
                        <td className="px-4 py-2 rounded-full text-center border border-black hover:border-white" colSpan="4">
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
        </div >
    );
}
