export default function LandingImg({img, title}) {
  return (
    <div className="landing relative">
      <img src={img} alt="Contact" className="w-full h-52 md:h-auto" />
      <h1 className="absolute text-white sm:text-lg md:text-xl lg:text-2xl  xl:text-4xl bottom-3 sm:bottom-5 md:bottom-8 lg:bottom-10 xl:bottom-12 left-4 sm:left-8 md:left-15 lg:left-28 xl:left-36">
        {title}
      </h1>
    </div>
  )
}
