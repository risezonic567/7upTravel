import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function ExploreNearby() {
  const places = [
    {
      id: 1,
      name: "San Francisco",
      img: "/images/San Francisco.jpg.jpeg",
      path: "/san-francisco",
    },
    {
      id: 2,
      name: "Los Angeles",
      img: "/images/Los Angeles.jpg.jpeg",
      path: "/los-angeles",
    },
    {
      id: 3,
      name: "Miami",
      img: "/images/Miami.jpg.jpeg",
      path: "/miami",
    },
     {
      id: 4,
      name: "Switzerland",
      img: "/images/Switzerland.jpg.jpeg",
      path: "/switzerland",
    },
     {
      id: 5,
      name: "Thailand",
      img: "/images/Thailand.jpg.jpeg",
      path: "/thailand",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">
          Explore Nearby
        </h2>

        <Swiper
          modules={[FreeMode, Navigation, Autoplay]}
          freeMode={true}
          navigation={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1.2}
          className="!overflow-visible"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {places.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <Link to={item.path} className="group block h-full">
                <div className="flex flex-col h-full">

                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="mt-5 flex justify-between items-center">
                    <div>
                      <p className="text-xl font-bold text-gray-800 group-hover:text-[#3aa0c9] transition-colors">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500 font-medium">
                        Explore Deals
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#3aa0c9] group-hover:text-white group-hover:border-[#3aa0c9] transition-all">
                      →
                    </div>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}