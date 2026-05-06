import React from 'react'
import HowItWorks from './HowItWorks'
import { Link, useNavigate } from 'react-router-dom'
import LatestNews from './LatestNewsPage'

export default function CruisePage() {
    const navigate = useNavigate()
  return (
    <>
      <section className="mt-20 px-4">
        
        <div className="relative max-w-7xl mx-auto rounded-[30px] overflow-hidden">
          
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="cruise"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

            <div className="text-white max-w-xl text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                Explore Luxury Cruise Trips
              </h1>

              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-200">
                Discover the world with premium cruise experiences. Enjoy
                comfort, adventure and unforgettable memories.
              </p>

              <button className="mt-4 md:mt-6 px-5 py-2 md:px-6 md:py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition">
                Book Now
              </button>
            </div>

            <div className="mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19"
                alt="cruise ship"
                className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[260px] md:h-[260px] object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>

          </div>
        </div>

      </section>

      <HowItWorks />

      <section>
        <div className='pt-5 px-5 max-w-7xl mx-auto'>
            <h2 className='text-xl font-bold mb-4'>Cruise Booking by Our Support Team</h2>
            <p className='font-semibold text-gray-500'>
            Booking a cruise can be an exciting but sometimes overwhelming experience. With so many destinations, ships, and cabin options available, it’s easy to feel unsure about where to start. That’s why our dedicated support team is here to assist you every step of the way, making your cruise booking seamless and stress-free.
            </p>

            <h2 className='text-xl font-bold mb-4 mt-5'>Why Choose Our Support Team for Your Cruise Booking?</h2>
            <p className='font-semibold text-gray-500'>
                Our support team consists of knowledgeable travel experts who specialize in cruises. They understand the nuances of various cruise lines, itineraries, and onboard experiences, ensuring you get the best possible options tailored to your preferences and budget.
            </p>

            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li><b>Personalized Assistance:</b> Get customized cruise recommendations based on your interests, travel dates, and budget.</li>
                <li><b>Expert Knowledge:</b> Benefit from our in-depth understanding of cruise packages, special offers, and exclusive deals.</li>
                <li><b>Time-Saving:</b> Avoid endless online searching and confusion—our team does the heavy lifting for you.</li>
                <li><b>24/7 Support:</b> Receive continuous help before, during, and after your booking to ensure a smooth travel experience.</li>
            </ul>

            <h2 className='text-xl font-bold mb-4 mt-5'>The Cruise Booking Process Made Easy</h2>
            <p className='text-gray-500'>Here is how our support team helps you book your perfect cruise:</p>

            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li><b>Step 1: Consultation – </b>Tell us about your travel preferences, such as destinations, duration, and cruise line choices.</li>
                <li><b>Step 2: Options Presentation – </b>We provide a curated list of cruise options that fit your criteria.</li>
                <li><b>Step 3: Booking Assistance –</b> Once you select your preferred cruise, our team handles all booking details securely.</li>
                <li><b>Step 4: Documentation –</b> We assist with ticket issuance, travel insurance, and visa requirements if applicable.</li>
                <li><b>Step 5: Pre-Departure Support –</b> Receive reminders, packing tips, and any last-minute travel advisories.</li>
            </ul>

             <h2 className='text-xl font-bold mb-4 mt-5'>Benefits of Booking Cruises with Support</h2>
            <p className='text-gray-500'>Booking your cruise through our support team offers numerous advantages beyond convenience:</p>

            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li><b>Access to Exclusive Deals: </b> We have partnerships with cruise lines that allow us to offer special discounts and onboard credits.</li>
                <li><b>Flexible Payment Options: </b>Choose payment plans that suit your budget, including deposits and installment plans.</li>
                <li><b>Group Bookings:</b>Planning a family or group cruise? Our team coordinates group discounts and cabin arrangements.</li>
                <li><b>Travel Insurance:</b>  Get advice and assistance on selecting the right insurance coverage for peace of mind.</li>
                <li><b>Customized Excursions: </b>  We can help you book shore excursions tailored to your interests.</li>
            </ul>

            <h2 className='text-xl font-bold mb-4 mt-4'>Common Questions About Cruise Booking</h2>
            <h4 className='text-md font-semibold text-gray-500'>Q: Can I change or cancel my cruise booking?</h4>
            <p className='text-gray-500 mt-5 mb-4'>
                A: Yes, most cruise lines offer flexible cancellation policies, but conditions vary. Our team explains these terms before you book.
            </p>
            <h4 className='text-gray-500 font-semibold text-md mb-4 mt-4'>Q: How early should I book my cruise?</h4>
            <p className='text-gray-500'>A: Early bookings often secure better prices and cabin choices. However, last-minute deals can also be available.</p>
        
        <h4 className='text-gray-500 font-semibold text-md mb-4 mt-4'>Q: Are group discounts available?</h4>
            <p className='text-gray-500 font-md'>A: Absolutely! We specialize in coordinating group bookings and ensuring you get the best possible rates.</p>
        
            <h2 className='text-xl font-bold mt-5 mb-5'>Top Tips for a Smooth Cruise Booking Experience</h2>
            
            <ul className='list-disc pl-10 text-gray-500 font-md'>
                <li>Have your travel documents ready and up to date.</li>
                <li>Be clear about your budget and preferred travel dates.</li>
                <li>Ask about all fees and taxes to avoid surprises.</li>
                <li>Request information on onboard amenities and activities.</li>
                <li>Communicate any special needs or dietary restrictions early.</li>
            </ul>

                <h2 className='text-lg font-bold mt-5 mb-5'>Why Book Your Cruise with 7uptravel?</h2>
                <p className='text-gray-500'>
                    At <Link className='text-blue-600'>7UPTRAVEL LLC,</Link> we strive to make your cruise dreams a reality. Our expert support team ensures personalized service, competitive pricing, and a hassle-free booking process from start to finish.
                </p>

                <p className='text-gray-500 mt- mb-5'>
                    Ready to embark on your next ocean adventure? Contact our support team today and let us guide you to the perfect cruise experience.
                </p>
                <p className='text-gray-500 font-bold'>
                    Book smart, travel happy — only with <Link className='text-blue-500'>7UPTRAVEL LLC.</Link>
                </p>

            <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            It's time to discover ✈️
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            From insider guidance to seamless booking, we'll be with you every step of the way.
          </p>
        </div>

        <button onClick={()=>navigate("/flight")} className="bg-black cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
          Book a Flight
        </button>

      </div>

        </div>
      </section>
      <LatestNews/>
    </>
  )
}