import Heading from "../components/Heading";
import Banner from "../Layouts/Banner";
import Footer from '../Layouts/Footer'
import DataR from '../data/recentlyProduct.json'
import DataP from '../data/topProduct.json'
import Card from "../components/Card";
import Button from "../components/Button";
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
      {/* --------{  Top Sellers section  }----------- */}
        <Heading title='Top Sellers' desc='Browse our top-selling products'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DataP.map(({title, src, price, key}) => <Card title={title} src={src} key={key} price={price} />)}
        </div>
      {/* --------{  Shop button section  }----------- */}
        <div className="shopButton flex justify-center mt-6 mb-10">
         <Button input=' Shop now'className='px-6 py-2 border bg-slate-500 text-white rounded-3 text-2xl' icon={ <i className="fw-bolder fa-solid fa-cart-shopping-fast"></i> }></Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;