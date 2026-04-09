import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactPage from './pages/ContactUsPage'
import FlightPage from './pages/FlightPage'
import AboutUsPage from './pages/AboutUsPage'
import Cancellation from './pages/Policy/Cancellation'
import TermsCondition from './pages/Policy/Term-condition'
import PrivacyPolicy from './pages/Policy/Privacy-Policy'
import Disclaimer from './pages/Policy/Disclaimer'
import RefundPolicy from './pages/Policy/Refund-Policy'
import LatestNews from './pages/LatestNewsPage'
import Flight from './components/Flight'
import CarRentalPage from './pages/CarRentalPage'
import HotelPage from './pages/HotelPage'
import Faq from './components/Faq'
import CruisePage from './pages/CruisePage'
import TravelsDeal from './components/TravelsDeal'
import California from './components/Location/California'
import Chicago from './components/Location/Chicago'
import LasVegas from './components/Location/LasVegas'
import LosAngeles from './components/Location/LosAngeles'
import Miami from './components/Location/Miami'
import NewYork from './components/Location/NewYork'
import SanFrancisco from './components/Location/SanFrancisco'
import Sanjosh from './components/Location/Sanjosh'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<FlightPage/>}/>
        <Route path='/car-rental' element={<CarRentalPage/>}/>
        <Route path='/hotel' element={<HotelPage/>}/>
        <Route path='/about-us' element={<AboutUsPage/>}/>
        <Route path='/cruise' element={<CruisePage/>}/>
        <Route path='/flight' element={<Flight/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/travel-deals' element={<TravelsDeal/>}/>

        {/* location pages */}

        <Route path='/california' element={<California/>}/>
        <Route path='/chicago' element={<Chicago/>}/>
        <Route path='/las-vegas' element={<LasVegas/>}/>
        <Route path='/los-angeles' element={<LosAngeles/>}/>
        <Route path='/miami' element={<Miami/>}/>
        <Route path='/new-york' element={<NewYork/>}/>
        <Route path='/san-francisco' element={<SanFrancisco/>}/>
        <Route path='/sanjosh' element={<Sanjosh/>}/>



        {/* Policy Page */}
        <Route path='/cancellation' element={<Cancellation/>}/>
        <Route path='/terms-condition' element={<TermsCondition/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>

        {/* <Route path='/latest' element={<FlightSearchSection/>}/> */}



        <Route path='/contact-us' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
