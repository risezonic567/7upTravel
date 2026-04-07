import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How Does it Work?",
      answer:
        "Renting a car with 7UPTRAVEL LLC is quick and easy. Start by entering your pickup location, date, and time. Browse a wide range of vehicles, from compact cars to SUVs, and choose the one that suits your needs. Book instantly with transparent pricing and no hidden fees. On the day of your rental, bring your ID and booking confirmation to pick up the vehicle. Enjoy your journey with reliable support if you need assistance. When your trip ends, simply return the car at the agreed location. 7UPTRAVEL LLC makes car rental stress-free and convenient for every traveler.",
    },
    {
      id: 2,
      question: "What are monthly tracked users?",
      answer:
        "What deal evil rent real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.",
    },
    {
      id: 3,
      question: "What if I go with my prepaid monthly?",
      answer:
        "Choosing a prepaid monthly plan with 7UPTRAVEL LLC means peace of mind and great savings. Pay once at the start of the month and enjoy a car without daily charges or repeated paperwork. Your vehicle is reserved for you throughout the month, ready when you need it. Insurance, maintenance, and support are included, so there are no surprise costs. Just pick up your car and drive — it's that easy. If your plans change, flexible upgrade or cancellation options are available. With prepaid monthly rental, you get freedom, value, and convenience all in one simple package.",
    },
    {
      id: 4,
      question: "What's the difference between cabs and taxi",
      answer:
        "The words “cab” and “taxi” are often used interchangeably, but they can carry slightly different meanings depending on where you are. “Taxi” is the formal term used worldwide for vehicles that pick up passengers and charge based on distance or time. “Cab” is a more casual or American slang version of the same thing. In some places, “cab” may also refer to ride-hailing or app-based services, while “taxi” is used for traditional street pickups. However, both terms generally describe the same type of transportation service — a hired vehicle to take you where you need to go.",
    },
    {
      id: 5,
      question: "How can I check the fare for my Booking ride?",
      answer:
        "Checking the fare for your ride with 7UPTRAVEL LLC is quick and easy. Simply enter your pick-up and drop-off locations, along with the date and time, in our booking form. The system will instantly show you the estimated fare based on the vehicle type, distance, and travel time. If you're using a promo code, it will be applied automatically. You’ll see the full price upfront—no hidden fees or extra charges. Once you confirm your booking, the fare details will also be sent to your email. It's transparent, simple, and designed for your convenience.",
    },
    {
      id: 6,
      question: "Do and Don'ts – Tips for a Safe Trip",
      answer:
        `Do: Research your destination, carry essential documents, and keep emergency contacts handy. Pack a first-aid kit and necessary medications. Stay aware of local customs and laws. Keep valuables secure and inform someone about your itinerary. Use reliable transportation and stay hydrated. Don’t: Don’t flash cash or expensive items. Avoid isolated or poorly lit areas, especially at night. Don’t ignore travel advisories or safety warnings. Don’t share personal details with strangers. Avoid overpacking to stay mobile. Don’t leave belongings unattended. Trust your instincts—if something feels off, stay cautious and seek help if needed`,
    },
  ];

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="min-h-screen  text-black px-4 py-16">
      
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-700 rounded-xl overflow-hidden bg-white/5 backdrop-blur"
            >
              
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">
                  {active === faq.id ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-600 font-semibold"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}