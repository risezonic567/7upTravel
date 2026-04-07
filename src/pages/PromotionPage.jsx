import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function PromoSection() {
  const promos = [
    {
      title: "Book & Enjoy",
      desc: "20% off on the best available room rate.",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Hot Summer Nights",
      desc: "Up to 2 nights free!",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Daily 10 Lucky Winners",
      desc: "Valid till: 15 Nov",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Weekend Deals",
      desc: "Flat 30% off on weekends",
      img: "https://via.placeholder.com/300",
    },
    {
      title: "Mega Offer",
      desc: "50% discount today only",
      img: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative group">

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {promos.map((promo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center p-4  border  rounded-3xl shadow-sm hover:shadow-md transition">
              
              <div className="w-1/3">
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-24 object-cover rounded-2xl"
                />
              </div>

              <div className="ml-4 w-2/3">
                <h3 className="text-lg font-bold text-gray-800">
                  {promo.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {promo.desc}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="prevBtn opacity-0 group-hover:opacity-100 transition absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10">
        ❮
      </button>

      <button className="nextBtn opacity-0 group-hover:opacity-100 transition absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10">
        ❯
      </button>

    </div>
  );
}