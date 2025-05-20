import LandingImg from '../components/LandingImg'
import Footer from '../Layouts/Footer'
export default function ContactPage() {
  return (
    <div>
      {/* --------{  Landing Img section  }----------- */}
        <LandingImg title="CONTACT US" img="/img/contact/contact.jpg" />
        
      <div className="MyWeb p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 pt-16">
      {/* --------{  Form section  }----------- */}
      <div className="intro md:col-span-2">
        <h1 className='text-3xl text-black font-bold pb-3'>We would love to hear from you.</h1>
        <p className='ml-3 w-9/12'>if you have any query or any type of suggestion, you can contact us hare. we would love to hear from you.</p>
      <form action="">

      </form>
      </div>

      {/* --------{  Contact section  }----------- */}
      <div className="contact md:col-span-1">
        <h1 className='text-3xl text-black font-bold pb-1'>Visit Us</h1>
        <p className='pb-2'>UET Lahore, Punjab, Pakistan</p>
        <p className='text-black font-bold mb-5'>Phone : <span className='italic text-violet-900'>+92303098987</span></p>
        <h1 className='text-3xl text-black font-bold pb-1'>Get In Touch</h1>
        <p className='pb-2'>you can get in touch with us on this provided email.</p>
        <p className='text-black font-bold mb-5'>Email : <span className='italic text-violet-900'>hmjawad087@gmailcom</span></p>
      </div>
        </div>
      </div>

      {/* --------{  Footer section  }----------- */}
      <Footer />
    </div>
  )
}
