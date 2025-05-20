import Card from "../components/Card";
import CeoCard from "../components/CeoCard";
import LandingImg from "../components/LandingImg";
import Footer from "../Layouts/Footer";
import Heading from "../components/Heading"
import Testimonial from "../components/testimonial";

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

      {/* --------{  Testimonials section  }----------- */}
        <Heading title="Testimonials" />
        <Testimonial imgCl="mt-6 w-1/2" img="/img/about/testimonial/3.png" desc="Once We ordered some assessor's items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries" intro="Stacy" />
        <Testimonial imgCl="mt-3 w-3/12" img="/img/about/testimonial/1.png" desc="I ordered 5 shirts from them and received them in no time .the customer support was awesome!" intro="Tiffany" />
        <Testimonial imgCl="w-4/12" img="/img/about/testimonial/2.png" desc="I got a wrong shirt so I contacted them and happily offered me a refund. I will surely shop from them again" intro="James"/>
      </div>
      
      {/* --------{  Footer section  }----------- */}
      <Footer />
    </div>
  )
}

export default AboutPage;