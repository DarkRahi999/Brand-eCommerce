import Card from "../components/Card";
import CeoCard from "../components/CeoCard";
import LandingImg from "../components/LandingImg";
import Footer from "../Layouts/Footer";
import Heading from "../components/Heading"

const AboutPage = () => {
  return (
    <div>
      {/* --------{  Landing Img section  }----------- */}
      <LandingImg title="ABOUT NORTHSTAR" img="/img/about/cover.jpg" />
        
      <div className="MyWeb p-4">
      {/* --------{  Ad Card section  }----------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-12 justify-center">
          <CeoCard img="/img/about/founder/t2.png" alt="founder 1" />
          <CeoCard img="/img/about/founder/t1.png" alt="founder 2" />
        </div>

      {/* --------{  Founder section  }----------- */}
          <Heading title="The Founders" />
        <div className="founder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 md:gap-8 pb-8">
          <Card src="/img/about/founder/1.png" />
          <Card src="/img/about/founder/2.png" />
          <Card src="/img/about/founder/3.png" />
          <Card src="/img/about/founder/4.png" />
        </div>

        <Heading title="Testimonials" />
      </div>
      {/* --------{  Footer section  }----------- */}
      <Footer />
    </div>
  )
}

export default AboutPage;