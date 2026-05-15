import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Headset } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Guaranteed Best Price",
      desc: "Our prices guarantee the best deals in the industry and give our clients the assurance that their travels will not be too costly.",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      color: "from-amber-500/10 to-orange-500/10"
    },
    {
      title: "Safe Transaction",
      desc: "Our transaction process is guaranteed safe with all security measures put in place to keep your information completely secure.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Worldwide Destination",
      desc: "Access over 630 worldwide destinations through our various travel services including booking services.",
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "24/7 Support",
      desc: "We offer round the clock customer service support to serve your needs at any point of the day or night.",
      icon: <Headset className="w-8 h-8 text-rose-500" />,
      color: "from-rose-500/10 to-pink-500/10"
    }
  ];

  return (
    <section className="py-24 bg-[#FCFCFD]/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-20 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-4 tracking-tighter"
          >
            Why Book With <span className="text-blue-600">7UP TRAVEL?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-gray-600 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Your ultimate gateway to world-class travel experiences, exceptional value, and dedicated support.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02, 
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              className="p-10 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center text-center group transition-shadow duration-300 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-300/60"
            >
              <div className={`relative w-20 h-15 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8`}>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>

                <div className="absolute inset-0 rounded-3xl group-hover:bg-current group-hover:opacity-10 group-hover:blur-sm transition-opacity opacity-0"></div>
              </div>

              <h3 className="text-2xl font-extrabold text-gray-950 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed font-semibold">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;