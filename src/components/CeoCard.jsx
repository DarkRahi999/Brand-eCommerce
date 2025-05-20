import Button from "./Button"

const CeoCard = ({ img, alt }) => {
  return (
    <div className="relative">
    {/* -----------{  Img section  }----------  */}
      <div className="imgDiv relative hover:scale-110 transition p-4 duration-300 ease-in-out">
        <img src={img} alt={alt} className="w-full rounded h-auto  shadow-md hover:shadow-2xl" />
        
    {/* -----------{  Button section  }----------  */}
        <div className="btnDiv absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Button input="Shop Now" className="px-8 py-2 bg-white text-blue-900 text-lg rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default CeoCard
