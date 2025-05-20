import LandingImg from "../components/LandingImg";
import Footer from "../Layouts/Footer";

const AboutPage = () => {
  return (
    <div>
      <div className=" MyWeb p-4">

      {/* --------{  Landing Img section  }----------- */}
        <LandingImg />
        <h2>
          This is About Page
        </h2>
      </div>
      
      {/* --------{  Footer section  }----------- */}
      <Footer />
    </div>
  )
}

export default AboutPage;