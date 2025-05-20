import LandingImg from '../components/LandingImg'
import Footer from '../Layouts/Footer'
export default function ContactPage() {
  return (
    <div>
      {/* --------{  Landing Img section  }----------- */}
        <LandingImg title="CONTACT US" img="/img/contact/contact.jpg" />
        
      <div className="MyWeb p-4">
      </div>

      {/* --------{  Footer section  }----------- */}
      <Footer />
    </div>
  )
}
