const Heading = ({title, desc}) => {
  return (
    <div>
      <h1 className="center font-bold text-black text-3xl pt-10 pb-2">{title}</h1>
      <p className="center text-lg pb-6 md:pb-14">{desc}</p>
    </div>
  )
}
export default Heading