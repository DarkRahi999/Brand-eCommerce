import Heading from "../components/Heading";
import Banner from "../Layouts/Banner";
import Footer from '../Layouts/Footer'
import DataR from '../data/recentlyProduct.json'
import DataP from '../data/topProduct.json'
import Card from "../components/Card";
import Button from "../components/Button";
import Article from "../components/Article";
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
      {/* --------{  Article section  }----------- */}
        <div className="flex center justify-center gap-4">
          <Article title="PEACE OF MIND" desc="A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind"/>
          <Article title="BUY 2 GET 1 FREE" desc="End of season sale. buy any 2 items of your choice and get 1 free"/>
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