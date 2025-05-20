import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-xl md:py-1">
      <div className="px-6 md:px-24 py-2 md:py-4 flex justify-between items-center">
        {/* Logo section */}
        <div className="logo"><span className="text-2xl md:text-3xl font-bold text-black ">North</span><i className="fa-regular fa-star-sharp text-black"></i><span className="text-2xl md:text-3xl font-bold text-black ">Star</span></div>

        {/* Desktop Menu section */}
        <div className="hidden md:flex gap-6 lg:gap-8 font-bold">
          <NavLink to='/' className='hover:text-red-600 lg:text-lg'>Home</NavLink>
          <NavLink to='/about' className='hover:text-red-600 lg:text-lg'>About</NavLink>
          <NavLink to='/contact' className='hover:text-red-600 lg:text-lg'>Contact Us</NavLink>
        </div>

        {/* Cart, Favorite button section */}
        <div className="flex items-center gap-4">
          <button className="text-black text-xl">
            <i className="fw-bolder fa-solid fa-cart-shopping-fast"></i>
          </button>
          <button className="text-black text-xl">
            <i className="fw-bolder fa-solid fa-heart"></i>
          </button>

          {/* button only on mobile section */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fw-bolder fa-duotone fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown section */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 font-bold">
          <NavLink to='/' className='hover:text-red-600' onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to='/about' className='hover:text-red-600' onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to='/contact' className='hover:text-red-600' onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
