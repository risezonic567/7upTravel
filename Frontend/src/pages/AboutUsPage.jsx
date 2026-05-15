import React from 'react'
import AboutServices from './AboutServices'
import { motion } from "framer-motion"
import Testimonials from '../components/Testimonials'

export default function AboutUsPage() {
  return (
    <div className="bg-slate-50 font-sans text-gray-900 overflow">

      <section className="relative  h-[70vh] md:h-[95vh] overflow-hidden">

        <motion.img
          src="/images/7upTravel About banner.jpg.jpeg"
          alt="Travel Banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-blue-200 text-sm md:text-base font-semibold mb-5"
            >
              About 7UP Travel
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-tight max-w-5xl"
            >
              Discover the World—We’ll <br />
              Guide You Every Step 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-slate-200 text-base md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed"
            >
            Customized travel plans, safety guidance, and unwavering support turn dreams into reality.
            </motion.p>

          </div>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 py-20 my-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Our Story
          </h2>

          <div className="h-1 w-12 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-600 text-base leading-relaxed text-justify">

  <div className="space-y-6">

    <p className="text-lg font-medium text-slate-800 border-l-4 border-indigo-500 pl-4 italic">
      Founded in 2025,
      <span className="font-bold tracking-wider text-indigo-600 uppercase">
        {" "}7uptravel llc
      </span>
      {" "}began as a spark in the minds of wanderers—those who longed not merely to travel, but to arrive in style.
    </p>

    <p>
      Every detail—a car here, a flight there, the perfect hotel—was placed
      with care, like a painter balancing the hues of a grand journey.
      It was never simply about getting from A to B, but about the story that unfolded.
    </p>

    <p>
      Guided by the unspoken wish to “make it easy, make it delightful,”
      we gather preferences and lead hearts kindly. We anticipate early flights
      and late arrivals, smoothing every step of your journey.
    </p>

  </div>

  <div className="space-y-6 md:mt-2">

    <p>
    Bookings unfold as gently as a path through rolling hills, and confirmations arrive like whispers on the breeze.

Rooms are chosen not just for sleep, but for serenity.
    </p>

    <p>
    Cars are selected not merely for transit, but to match pace and purpose. Flights are booked not only for convenience, but in harmony with your rhythm and schedule. Dashwood might have called it excessive—we call it travel done properly.
    </p>

    <p className="font-medium text-slate-800 bg-slate-50 p-5 rounded-2xl border border-slate-100">
     With discretion in service and admiration in detail, we fit even the smallest purse without ever compromising on charm. It is our pleasure to be entrusted with your travels. The stories that follow—many doors opened, many miles traveled—are made seamless by our simple promise. Wherever you go, we’ll ensure the journey feels just right.
    </p>

  </div>
</div>
      </section>

      <AboutServices />

     <Testimonials/>

    </div>
  )
}