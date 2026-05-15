import { icons } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function OurServices() {

  const services = [
    {
      title: "Cheap Domestic & International Flight Bookings",
      description:
        "Get all your flight booking done easily through us. You have a variety of options to choose from including easy and quick confirmation.",
      icon: "Plane",
      color: "text-sky-500",
      bg: "bg-sky-100",
    },
    {
      title: "Hotel Bookings – Affordable Accommodations Globally",
      description:
        "Search and reserve the best rated and most economical hotels around the world. Have access to great offers on hotel reservations from affordable hotels to luxury hotels and everything in between.",
      icon: "Hotel",
      color: "text-rose-500",
      bg: "bg-rose-100",
    },
    {
      title: "Cruise Bookings – Luxury Cruise Tours",
      description:
        "Book yourself into luxurious cruise tours with state-of-the-art amenities and services for the ultimate relaxation experience. Discover new places and make memories on a cruise of your life!",
      icon: "Ship",
      color: "text-cyan-500",
      bg: "bg-cyan-100",
    },
    {
      title: "Tour Guides – Expert Local Tour Guides",
      description:
        "Get local expertise on your next travel destination by booking expert local tour guides who will provide you with unique travel experiences and information.",
      icon: "Map",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "Car Rentals – Dependable and Affordable Car Rentals",
      description:
        "Book a car for yourself while you are on a vacation to explore cities at your own pace. Enjoy a hassle-free travel experience.",
      icon: "Car",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      title: "24/7 Support – 24/7 Travel Help",
      description:
        "Have access to our round-the-clock customer care help center where you can easily contact us for any questions or concerns about your travels.",
      icon: "Headphones",
      color: "text-red-500",
      bg: "bg-red-100",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-blue-600 font-medium tracking-wide uppercase mb-2">
          Our Travel Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Travel Services Designed For You
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {services.map((item, id) => {

          const Icon = icons[item.icon];

          return (
            <motion.div
              key={id}

              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: id * 0.15,
              }}

              viewport={{ once: true }}

              className="group bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
            >

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} mb-5 group-hover:scale-110 transition`}
              >
                <Icon className={item.color} size={28} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}