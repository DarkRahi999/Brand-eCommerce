import Heading from "../components/Heading";
import Banner from "../Layouts/Banner";
import Footer from '../Layouts/Footer'
import DataR from '../data/recentlyProduct.json'
import Card from "../components/Card";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="MyWeb p-4">
      <Heading title='Discover New Arrivals'/>
      <p className="center text-lg pb-6">Recently added shirts!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {DataR.map(({title, src, price, key}) => <Card title={title} src={src} key={key} price={price} />)}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;