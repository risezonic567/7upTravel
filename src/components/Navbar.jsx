import { Menu, X, Plane, Car, Hotel, Ship, Phone, PlaneTakeoffIcon, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navClass = (path) =>
    `flex items-center gap-2 transition-all duration-200 ${
      isActive(path)
        ? "text-blue-600 font-semibold"
        : "text-gray-700 "
    }`;

  return (
    <nav className="w-full bg-white  fixed top-0 left-0 z-100">
      
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        
        <Link to="/" className="flex items-center">
          <img src="/logo/7up.png" alt="logo" className="h-10" />
        </Link>

        <button className="xl:hidden" onClick={() => setOpen(!open)}>
          {open ? "" : <Menu size={28} />}
        </button>

        <ul className="hidden xl:flex items-center font-bold mt-3 gap-6">
          <li><Link to="/about-us" className={navClass("/about-us")}>About Us</Link></li>
          <li><Link to="/contact-us" className={navClass("/contact-us")}>Contact Us</Link></li>
          <li><Link to="/" className={navClass("/")}><PlaneTakeoffIcon size={18}/> Flight</Link></li>
          <li><Link to="/car-rental" className={navClass("/car-rental")}><Car size={18}/> Car Rental</Link></li>
          <li><Link to="/hotel" className={navClass("/hotel")}><Hotel size={18}/> Hotel</Link></li>
          <li><Link to="/cruise" className={navClass("/cruise")}><Ship size={18}/> Cruise</Link></li>
          <li> <Link to="tel:+1888-315-3380" className="flex items-center gap-2 text-blue-600  font-semibold">
                <Phone size={18} /> +1-888-315-3380
              </Link></li>
            <li>
              <Link to="/login" className="text-blue-600"><User /></Link>
            </li>
        </ul>
      </div>

      <div className={`xl:hidden fixed top-0 left-0 w-full h-screen bg-black/40 transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        
        <div className={`bg-white w-[80%] max-w-sm h-full p-5 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          
          <div className="flex justify-between items-center mb-6">
            <img src="/logo/7up.png" className="h-8" />
            <button onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <ul className="flex flex-col gap-5 text-lg">
            <li><Link onClick={()=>setOpen(false)} to="/about-us" className={navClass("/about-us")}>About Us</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="/contact-us" className={navClass("/contact-us")}>Contact Us</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="/" className={navClass("/")}><Plane size={18}/> Flight</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="/car-rental" className={navClass("/car-rental")}><Car size={18}/> Car Rental</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="/hotel" className={navClass("/hotel")}><Hotel size={18}/> Hotel</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="/cruise" className={navClass("/cruise")}><Ship size={18}/> Cruise</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="tel:+18883153380" className="flex items-center gap-2 text-green-600"><Phone size={18}/> Call Now</Link></li>
            <li><Link onClick={()=>setOpen(false)} to="/login" className="flex items-center gap-2 text-green-600">Log In</Link></li>
          </ul>
        </div>
      </div>

    </nav>
  );
}