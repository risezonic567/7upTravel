import React from 'react';
import { Hotel, Plane, Globe, Car } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Hotel Booking",
      desc: "Book top-rated hotels easily and enjoy a comfortable stay wherever you travel.",
      icon: <Hotel className="text-orange-500 w-6 h-6" />,
      bgColor: "bg-orange-50"
    },
    {
      title: "Flight Booking",
      desc: "Book domestic and international flights with ease — fast, secure, and hassle-free.",
      icon: <Plane className="text-teal-500 w-6 h-6" />,
      bgColor: "bg-teal-50"
    },
    {
      title: "Tour Booking",
      desc: "Easily book guided tours and explore top destinations with trusted local experts.",
      icon: <Globe className="text-blue-500 w-6 h-6" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Cab Booking",
      desc: "Easily book reliable cabs anytime for a comfortable, hassle-free journey.",
      icon: <Car className="text-cyan-500 w-6 h-6" />,
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="group relative p-6 cursor-pointer rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>

        <div
          className={`${service.bgColor} w-14 h-14 flex items-center justify-center rounded-xl text-white text-xl shadow-lg transform group-hover:scale-110 transition duration-300`}
        >
          {service.icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-5 group-hover:text-blue-600 transition">
          {service.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm mt-2">
          {service.desc}
        </p>

        <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 group-hover:w-full transition-all duration-300 rounded-full"></div>
      </div>
    ))}
  </div>
</section>
  );
};

export default ServicesSection;