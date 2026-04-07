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
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Pool" 
              className="w-full h-full object-cover"
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
               <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200" alt="Hotel" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden translate-x-8">
               <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=200" alt="Hotel" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="flex items-center p-2 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
          <div className="w-32 h-24 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506929113670-b429f1f05244?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Maldives" />
          </div>
          <div className="ml-4 pr-4">
            <h4 className="font-bold text-slate-800">Book & Enjoy</h4>
            <p className="text-xs text-slate-500">20% off on the best available room rate.</p>
          </div>
        </div>

        <div className="flex items-center p-2 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
          <div className="w-32 h-24 bg-blue-50 rounded-2xl flex items-center justify-center p-2">
             <div className="bg-blue-600 text-white p-4 rounded-full font-black text-center text-[10px] leading-tight">PREMIUM<br/>BOOKING</div>
          </div>
          <div className="ml-4 pr-4">
            <h4 className="font-bold text-slate-800">Hot Summer Nights</h4>
            <p className="text-xs text-slate-500">Up to 2 nights free!</p>
          </div>
        </div>

        <div className="flex items-center p-2 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
          <div className="w-32 h-24 bg-green-50 rounded-2xl flex flex-col items-center justify-center p-2 overflow-hidden relative">
             <span className="font-bold text-green-700 text-center text-xs leading-none">DAILY<br/>JACKPOT</span>
             <div className="absolute -bottom-2 -right-2 opacity-20 text-4xl text-green-600">🎉</div>
          </div>
          <div className="ml-4 pr-4">
            <h4 className="font-bold text-slate-800">Daily 10 Lucky Winners</h4>
            <p className="text-xs text-slate-500">Valid till: 15 Nov</p>
          </div>
        </div>

      </section> */}
    </div>

        <PromoSection/>
        <HotelAboutPage/>
        <HotelDestination/>
        </>
    )
}
