import React from "react";

const FunActivities = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Fun Activities
      </h2>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image 1 */}
        <div className="w-full md:w-1/2">
          <img
            src="/kecak-dance.jpg" // Change this to the actual image path
            alt="Kecak Dance at Uluwatu"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full md:w-1/2">
          <img
            src="/coffee-roasting.jpg" // Change this to the actual image path
            alt="Bali Coffee Roasting"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FunActivities;
