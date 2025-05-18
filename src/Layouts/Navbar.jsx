import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-24">
        <div className="logo">
            <h1 className="text-3xl text-black font-bold">NorthStar</h1>
        </div>
        <div className="menu">
            <NavLink to='/' className='text-md p-3 hover:text-red-600 font-bold'>Home</NavLink>
            <NavLink to='/about' className='text-md p-3 hover:text-red-600 font-bold'>About</NavLink>
            <NavLink to='/contact' className='text-md p-3 hover:text-red-600 font-bold'>Contact Us</NavLink>
        </div>
        <div className="btnList">
            <button className="px-2 py-1 text-black"><i class="fw-bolder fa-solid fa-cart-shopping-fast"></i></button>
            <button className="px-2 py-1 text-black"><i class="fw-bolder fa-solid fa-heart"></i></button>
            <button className="px-2 py-1 text-black"><i class="fw-bolder fa-duotone fa-solid fa-bars"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
