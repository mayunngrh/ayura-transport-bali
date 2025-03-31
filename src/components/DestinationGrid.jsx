import React from "react";
import destinations from "../data/Destinations"; // Import data

const DestinationGrid = () => {
  return (
    <div className="max-w-[1240px] max-h-[800px] mx-auto mt-10 px-4">
      <h2 className="text-4xl font-bold text-start mt-28 mb-12  stroke-2 stroke-black">
        Countless Destination
      </h2>
      <div className="grid grid-cols-3 gap-4 max-h-[450px]">
        {destinations.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative m-4 overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ${item.span} cursor-pointer transform hover:scale-105`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">{item.location}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;
