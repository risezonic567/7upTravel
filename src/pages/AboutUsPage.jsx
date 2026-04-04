import React from 'react'
import AboutServices from './AboutServices'
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <div >
      <div className="bg-white font-sans  text-gray-900">

        {/* 1. Header & Image Grid Section */}
        <section className="max-w-7xl mx-auto px-6  py-36">
          {/* Title Section */}
          <div className="text-center  mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Discover the World—We’ll Guide <br />
              You Every Step
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Customized travel plans, safety guidance, and unwavering support turn dreams into reality.
            </p>
          </div>

          {/* Asymmetrical Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Left Large Image */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000"
                alt="Beach resort"
                className="w-[600px] md:h-[600px] border object-cover rounded-[2rem] shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Right Smaller Images */}
            <div className="flex flex-col gap-6">

              <motion.img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000"
                alt="People at cafe"
                className="w-[600px] h-[280px] border object-cover rounded-[2rem] shadow-lg"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />

              <motion.img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07dee3?q=80&w=1000"
                alt="Friends on beach"
                className="w-full h-[280px] object-cover rounded-[2rem] shadow-lg"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              />

            </div>
          </div>

        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-extrabold mb-8">Our Story</h2>

          <div className="space-y-6 text-gray-600 text-justify leading-6 text-md">
            <p className='text-gray-500 font-bold'>
              Founded in 2025, <span className="font-bold text-gray-600 uppercase">7uptravel llc</span> began as a spark in the minds of wanderers—those who longed not merely to travel, but to arrive in style. Every detail—a car here, a flight there, the perfect hotel—was placed with care, like a painter balancing the hues of a grand journey. It was never simply about getting from A to B, but about the story that unfolded.
            </p>

            <p className='text-gray-500 font-semibold'>
              Guided by the unspoken wish to "make it easy, make it delightful," we gather preferences and lead hearts kindly. We anticipate early flights and late arrivals, smoothing every step of your journey. Bookings unfold as gently as a path through rolling hills, and confirmations arrive like whispers on the breeze.
            </p>

            <p className='text-gray-500 font-semibold'>
              Rooms are chosen not just for sleep, but for serenity. Cars are selected not merely for transit, but to match pace and purpose. Flights are booked not only for convenience, but in harmony with your rhythm and schedule. Dashwood might have called it excessive—we call it travel done properly.
            </p>

            <p className='text-gray-500 font-semibold'>
              With discretion in service and admiration in detail, we fit even the smallest purse without ever compromising on charm. It is our pleasure to be entrusted with your travels. The stories that follow—many doors opened, many miles traveled—are made seamless by our simple promise: Wherever you go, we'll ensure the journey feels just right.
            </p>
          </div>
        </section>

      </div>




      <AboutServices />
    </div>
  )
}
