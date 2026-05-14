import react from 'react'
import PromoSection from './PromotionPage'
import { BiHeadphone } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import HotelAboutPage from './HotelAboutPage'
import HotelDestination from './Destination/HotelDestination'

export default function HotelPage(){
    return (
        <>
        <div className="min-h-screen bg-white font-sans text-slate-900">
      <section className="relative max-w-7xl mx-auto px-6 pt-16 lg:pt-24 flex flex-col lg:flex-row items-center">
        
        <div className="z-10 w-full lg:w-1/2 space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Find the top <br /> 
            <span className="relative">
              Hotels nearby.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-purple-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-slate-500 text-lg max-w-md leading-relaxed">
            We offer more than just a place to stay — we create luxury experiences that fit your budget.
          </p>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Check Availability</h3>
            <div className="relative max-w-xl">
              <div className="w-full h-16 bg-white rounded-full border border-slate-300 shadow-xl shadow-slate-200/50 flex items-center px-5">
                <span className="text-black">
                    <input type="text" placeholder='Search Hotels....' className='w-full outline-none'/>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-end">
          <div className="relative w-[500px] h-[600px] rounded-tl-[100px] overflow-hidden shadow-2xl">
            <img 
              src="/images/hotel homepage.jpg.jpeg" 
              alt="Luxury Pool" 
              className="w-full h-full  object-cover"
            />
             <Link to="tel:+1888-315-3380">
                 <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-balck">
                <div className="">
                    <BiHeadphone size={30} className='text-red-600'/>
                </div>
              <p className="font-bold text-xl leading-none">24/7</p>
              <p className="text-xs opacity-80 uppercase tracking-widest">Guide Support</p>
            </div>
            </Link>
          </div>
          
          <div className="absolute -left-12 top-1/4 space-y-4">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden">
               <img src="/images/hote homepage circle 1.jpg.jpeg"
                alt="Hotel" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden translate-x-8">
               <img src="/images/hote homepage circle 2.jpg.jpeg" alt="Hotel" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>

        <PromoSection/>
        <HotelAboutPage/>
        <HotelDestination/>
        </>
    )
}
