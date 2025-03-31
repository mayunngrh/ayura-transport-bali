import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import funActivitiesData from "../data/FunActiviesData";

const FunActivities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet (md)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Mobile (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-12 px-6 ">
      {/* Title */}
      <h2 className="max-w-[1240px] mb-12 mx-auto text-3xl md:text-4xl font-bold text-black ">
        Fun Activities
      </h2>

      <div className=" mx-auto">
        <Slider {...settings}>
          {funActivitiesData.map((activity) => (
            <div key={activity.id} className="px-2">
              <div className="bg-white mx-4 md:mx-6 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-[250px] md:h-[300px] object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FunActivities;
