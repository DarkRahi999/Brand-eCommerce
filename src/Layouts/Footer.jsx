export default function Footer() {
  return (
    <div className="footer p-4">
      <div className="flex gap-44 mb-20">
        <div className="row-1">
          <h1>Company Information</h1>
          <ol className="quick-links">
            <li><a href="http://" className="hover:text-black hover:underline">About Us</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Lates Posts</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Contact Us</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Shop</a></li>
          </ol>
        </div>
        <div className="row-1">
          <h1>Help Links</h1>
          <ol className="quick-links">
            <li><a href="http://" className="hover:text-black hover:underline">Returns</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Order Status</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Delivery</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Shipping Info</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">FAQ</a></li>
          </ol>
        </div>
        <div className="row-1">
          <h1>Useful Links</h1>
          <ol className="quick-links">
            <li><a href="http://" className="hover:text-black hover:underline">Special Offers</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Gift Cards</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Advertising</a></li>
            <li><a href="http://" className="hover:text-black hover:underline">Terms of use</a></li>
          </ol>
        </div>
        <div className="row-1">
          <h1>Get In The Know</h1>
          <input type="text" placeholder="Enter Your Email ..."/>
        </div>
      </div>
      <hr className="mb-6 mt-2 border-2" />
      <div className='footer-bottom flex justify-between'>
        <div className="copyright">
            <p>&copy; 2025 NorthStar eCommerce</p>
            <a href="" className="mr-4 hover:text-black hover:underline">Privacy Policy</a> 
            <a href="" className=" hover:text-black hover:underline">Terms & Conditions</a>
        </div>
        <div className="footer-conner">
            <img src="/img/footer/payments.png" alt="" />
        </div>
      </div>
    </div>
  )
}
