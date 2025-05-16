export default function Footer() {
  return (
    <div className="footer">
      this is footer
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
