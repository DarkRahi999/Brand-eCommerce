import Button from "../components/button";
import InputEmail from '../components/InputEmail'
//G_---------------{  Footer section  }---------------_G//
export default function Footer() {
  return (
    <div className="footer p-4">
      <div className="flex flex-col gap-4 md:flex-row mb-4 sm:mb-20">
        <div className="row-1 w-fill md:w-1/4">
          <h1>Company Information</h1>
          <ol className="quick-links">
            <li><a href="http://" className="hover:text-black hover:underline">About Us</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Lates Posts</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Contact Us</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Shop</a></li>
          </ol>
        </div>
        <div className="row-1 w-fill md:w-1/4">
          <h1>Help Links</h1>
          <ol className="quick-links">
            <li><a href="http://" className="hover:text-black hover:underline">Returns</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Order Status</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Delivery</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Shipping Info</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">FAQ</a></li>
          </ol>
        </div>
        <div className="row-1 w-fill md:w-1/4">
          <h1>Useful Links</h1>
          <ol className="quick-links">
            <li><a href="http://" className="hover:text-black hover:underline">Special Offers</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Gift Cards</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Advertising</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Terms of use</a></li>
          </ol>
        </div>
        <div className="row-1 w-fill md:w-1/4">
          <h1>Get In The Know</h1>
            <InputEmail />
        </div>
      </div>
      <hr className="mb-6 mt-2 rounded-lg" />
      <div className='footer-bottom md:flex justify-between'>
        <div className="copyright mb-4 md:mb-0">
            <p className="mb-2">&copy; 2025 NorthStar eCommerce</p>
            <ol className="md:flex  ">
              <li className="ml-3 md:mr-4 lg:mr-16"><a href="" className=" hover:text-black hover:underline">Privacy Policy</a></li>
              <li className="ml-3"><a href="" className="hover:text-black hover:underline">Terms & Conditions</a></li>
            </ol>
        </div>
        <div className="footer-conner">
            <img src="/img/footer/payments.png" alt="payments" />
        </div>
      </div>
    </div>
  )
}
