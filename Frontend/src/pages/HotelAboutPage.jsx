import React from "react";
import { Utensils, Timer, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-24 overflow-hidden relative">

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          <div>

            <div className="inline-flex items-center px-5 py-2 rounded-full bg-black/20 border border-black/10 text-black text-sm font-semibold backdrop-blur-md">
              ✨ Why Choose Us
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight mt-7">
              The Best Holidays <br />
              <span className="text-blue-700/60">Start Here!</span>
            </h2>

            <p className="text-black/70 text-lg leading-relaxed mt-8 max-w-xl">
              Reserve your room today and enjoy exclusive offers with unbeatable savings.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h2 className="text-4xl font-bold text-black">15+</h2>
                <p className="text-slate-400 mt-2 text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-black">4.9</h2>
                <p className="text-slate-400 mt-2 text-sm">
                  Client Rating
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-black">24/7</h2>
                <p className="text-slate-400 mt-2 text-sm">
                  Live Support
                </p>
              </div>

            </div>
          </div>

          <div className="relative">

            <div className="relative rounded-[40px] overflow-hidden h-[600px] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

              <img
                src="/images/hotel page intro.jpg.jpeg"
                alt="Luxury Hotel"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-xl border border-black/10 rounded-3xl p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-white/70 text-sm">
                      Trusted Luxury Stay
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-2">
                      1K+ Happy Clients
                    </h3>
                  </div>

                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-2 border-black overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 20}`}
                          alt="client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>

            <div className="absolute -top-8 -left-8 bg-black rounded-3xl p-5 shadow-2xl hidden lg:block">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    High Security
                  </h3>

                  <p className="text-sm text-white">
                    24 Hours Monitoring
                  </p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-24"
        >

          <div className="bg-black/5 border border-black/10 backdrop-blur-xl rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Utensils size={30} />
            </div>

            <h3 className="text-2xl font-bold text-black mt-6">
              Quality Food
            </h3>

            <p className="text-slate-600 leading-relaxed mt-4">
              Savor delicious, high-quality meals crafted to enhance your travel experience.
            </p>
          </div>

          <div className="bg-black/5 border border-black/10 backdrop-blur-xl rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Timer size={30} />
            </div>

            <h3 className="text-2xl font-bold text-black mt-6">
              Quick Services
            </h3>

            <p className="text-slate-600 leading-relaxed mt-4">
              Enjoy fast and efficient service with seamless hospitality.
            </p>
          </div>

          <div className="bg-black/5 border border-black/10 backdrop-blur-xl rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <ShieldCheck size={30} />
            </div>

            <h3 className="text-2xl font-bold text-black mt-6">
              High Security
            </h3>

            <p className="text-slate-600 leading-relaxed mt-4">
              Your safety is our priority with top-tier security systems.
            </p>
          </div>

          <div className="bg-black/5 border border-black/10 backdrop-blur-xl rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Zap size={30} />
            </div>

            <h3 className="text-2xl font-bold text-black mt-6">
              24 Hours Alert
            </h3>

            <p className="text-slate-600 leading-relaxed mt-4">
              Continuous monitoring and support anytime, day or night.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}