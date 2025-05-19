import Heading from "../components/Heading";
import Banner from "../Layouts/Banner";
import Footer from '../Layouts/Footer'
import DataR from '../data/recentlyProduct.json'
import DataP from '../data/topProduct.json'
import Card from "../components/Card";
import Button from "../components/Button";
import Article from "../components/Article";
import Others from "../components/Others";
const HomePage = () => {
  return (
    <div>
      {/* --------{  Banner section  }----------- */}
      <Banner />
      <div className="MyWeb p-4">
      {/* --------{  Discover section  }----------- */}
        <Heading title='Discover New Arrivals' desc='Recently added shirts!'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DataR.map(({title, src, price, key}) => <Card title={title} src={src} key={key} price={price} />)}
        </div>
      {/* --------{  Support & Other's section  }----------- */}
        <div className="others pt-10 pb-16 lg:pt-16 lg:pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Others title="FREE SHIPPING" desc="Enjoy free shipping on all orders above $100" icon={ <i className="fa-regular fa-truck-fast fa-2xl"></i> } />
          <Others title="SUPPORT 24/7" desc="Our support team is there to help you for queries" icon={ <i className="fa-regular fa-headset fa-2xl"></i> } />
          <Others title="30 DAYS RETURN" desc="Simply return it within  30 days for an exchange" icon={ <i className="fa-2x fa-regular fa-arrow-rotate-left fa-2xl"></i> } />
          <Others title="100% PAYMENT SECURE" desc="Our payments are secured with256 bit encryption" icon={ <i className="fa-regular fa-fingerprint fa-2xl"></i> } />
        </div>
      {/* --------{  Article section  }----------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 center justify-center gap-4 py-8">
          <Article title="PEACE OF MIND" desc="A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind"/>
          <Article title="BUY 2 GET 1 FREE" desc="End of season sale. buy any 2 items of your choice and get 1 free"/>
        </div>
      {/* --------{  Top Sellers section  }----------- */}
        <Heading title='Top Sellers' desc='Browse our top-selling products'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DataP.map(({title, src, price, key}) => <Card title={title} src={src} key={key} price={price} />)}
        </div>
      {/* --------{  Shop button section  }----------- */}
        <div className="shopButton flex justify-center mt-6 mb-10 lg:mt-10 lg:mb-14">
         <Button input=' Shop now'className='px-6 py-2 border bg-slate-500 text-white rounded-3 text-2xl' icon={ <i className="fw-bolder fa-solid fa-cart-shopping-fast"></i> }></Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;