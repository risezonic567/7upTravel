import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'
import { Quote } from 'lucide-react'
import { clientReviews } from '../data/testimonials'

export default function Testimonials() {

  const [tabs] = useState([
    { title: "Flights", val: "flights" },
    { title: "Hotels", val: "hotels" },
    { title: "Cruise", val: "cruise" },
    { title: "Cars", val: "cars" }
  ])

  const [selected, setSelected] = useState("flights")

  const filteredData = clientReviews[selected] || []

  return (
    <section className='relative py-16 bg-gray-700'>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,#ff00cc20,transparent_40%),radial-gradient(circle_at_80%_70%,#00ffe520,transparent_40%)]"></div>

      <div className='flex justify-center flex-wrap gap-3 mb-10 px-4'>
        {tabs.map((item, id) => (
          <button
            key={id}
            onClick={() => setSelected(item.val)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${item.val === selected
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className='text-center mb-10 px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Why Customers Love 7upTravel
        </h2>

        <div className='max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-6'>
          {[
            { num: "140+", label: "Years Legacy" },
            { num: "4000+", label: "Tours" },
            { num: "1M+", label: "Happy Travelers" },
            { num: "50+", label: "Awards" }
          ].map((item, i) => (
            <div key={i} className="text-white">
              <h3 className="text-2xl font-bold text-yellow-400">
                {item.num}
              </h3>

              <p className="text-xs text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4'>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='!pb-14'
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >

          {filteredData.map((item, id) => (
            <SwiperSlide key={id} className='h-auto'>

              <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 h-full">

                <div className="bg-white rounded-2xl p-6 h-full shadow-xl relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2">

                  {/* Quote Icon */}
                  <Quote
                    size={28}
                    className="text-yellow-500 mb-3 scale-x-[-1]"
                  />

                  {/* Message */}
                  <p className='text-sm text-gray-700 leading-relaxed min-h-[120px]'>
                    {item.message}
                  </p>

                  {/* User */}
                  <div className='flex items-center gap-3 mt-6'>

                  
                    <div>
                      <h3 className='font-semibold text-sm text-black'>
                        {item.name}
                      </h3>

                      <p className='text-xs text-gray-500'>
                        {item.date}
                      </p>
                    </div>

                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 via-pink-500/10 to-purple-500/10 pointer-events-none"></div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}