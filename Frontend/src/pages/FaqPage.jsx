import React, { useState } from "react";
import { faqdata } from "../data/faq";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Faq() {

  const tabs = [
    { label: "Booking", key: "booking_services" },
    { label: "Payment", key: "payment_pricing" },
    { label: "Cancellation", key: "cancellation_refund" },
    { label: "Changes", key: "changes_rescheduling" },
    { label: "Flights", key: "flight_services" },
    { label: "Hotels", key: "hotel_services" },
    { label: "Car Rental", key: "car_rental" },
    { label: "Cruises", key: "cruise_services" },
    { label: "Delays", key: "delays_cancellations" },
  ];

  const [tab, setTab] = useState("booking_services");
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const Selectedfaqdata = faqdata[tab] || [];

  const filterdata = Selectedfaqdata.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >

          <p className="uppercase tracking-[4px] text-blue-600 text-md  font-medium mb-4">
            Support Center
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            How Can We Help <br /> <span className="text-blue-400">You Today?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-black-100 mt-6 leading-relaxed text-lg">
            Find quick answers for bookings, cancellations, payments,
            refunds, hotels, flights, and more with our premium support.
          </p>

          <div className="max-w-2xl mx-auto mt-10">
            <input
              type="text"
              placeholder="Search your question..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl p-5 px-6 outline-none text-slate-700 shadow-2xl focus:ring-4 focus:ring-blue-200 transition"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 flex flex-wrap justify-center gap-3">

          {tabs.map((item, id) => (

            <button
              key={id}
              onClick={() => {
                setTab(item.key);
                setOpen(null);
              }}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                item.key === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              {tabs.find((t) => t.key === tab)?.label} FAQs
            </h2>

            <p className="text-slate-500 mt-2">
              Frequently asked questions and answers.
            </p>
          </div>

          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-semibold">
            {filterdata.length} Questions
          </div>
        </div>

        {filterdata.length === 0 ? (

          <div className="text-center py-20 bg-white rounded-3xl shadow-md border border-dashed border-slate-300">
            <p className="text-slate-500 text-lg">
              No results found for "{search}"
            </p>
          </div>

        ) : (

          <div className="space-y-5">

            {filterdata.map((item, id) => {

              const isOpen = open === id;

              return (
                <motion.div
                  key={id}

                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: id * 0.1,
                  }}

                  viewport={{ once: true }}

                  className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-blue-300 shadow-xl"
                      : "border-slate-200 hover:border-blue-200 hover:shadow-lg"
                  }`}
                >

                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpen(isOpen ? null : id)}
                  >

                    <h3
                      className={`font-semibold text-lg transition ${
                        isOpen
                          ? "text-blue-600"
                          : "text-slate-800"
                      }`}
                    >
                      {item.question}
                    </h3>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "bg-blue-600 text-white rotate-45"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FaPlus size={12} />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-7 text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}