const Card = ({title, price, key, src}) => {
  return (
    <div id={key} className="mb-6">
      <img src={src} alt="" />
        <h2 className='center font-bold text-xl pt-3 pb-2 text-black'>{title}</h2>
        <h4 className="text-violet-900 center font-bold italic">{price}</h4>
    </div>
  )
}

export default Card;