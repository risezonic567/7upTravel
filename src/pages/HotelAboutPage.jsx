import React from "react";
import { Utensils, Timer, ShieldCheck, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16 items-stretch">

        <div className="w-full lg:w-5/12 relative flex">

          <div className="absolute -top-10 -left-10 text-yellow-500 opacity-50">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="rounded-tr-[100px] rounded-bl-2xl overflow-hidden shadow-2xl w-full">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
              alt="Pool side"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-8 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-4">
            
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                1K+
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-medium">Client Rating</p>
              <p className="text-lg font-bold">
                4.5 <span className="text-yellow-500">★</span>
              </p>
            </div>
          </div>

        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-between">

          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
              The Best Holidays Start Here!
            </h1>

            <p className="text-slate-500 mt-6 text-lg max-w-xl">
              Reserve your room today and enjoy exclusive offers with unbeatable savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mt-12">

            <div className="p-6 space-y-3 bg-white rounded-2xl  shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                <Utensils size={24} />
              </div>
              <h3 className="text-xl font-bold">Quality Food</h3>
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                Savor delicious, high-quality meals crafted to enhance your travel experience. Every detail is served with excellence.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-white rounded-2xl  shadow-[0_10px_40px_rgba(0,0,0,0.08)]  transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                <Timer size={24} />
              </div>
              <h3 className="text-xl font-bold">Quick Services</h3>
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                Enjoy fast and efficient service, with breakfast served promptly to help you start your day right.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-white rounded-2xl  shadow-[0_10px_40px_rgba(0,0,0,0.08)]  transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold">High Security</h3>
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                Your safety is our priority. We provide dependable, top-tier security for a completely worry-free stay.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-white rounded-2xl  shadow-[0_10px_40px_rgba(0,0,0,0.08)]  transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">24 Hours Alert</h3>
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
              We offer continuous monitoring and support to ensure your peace of mind — anytime, day or night.
              </p>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}