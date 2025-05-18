const Card = ({title, price, key, src}) => {
  return (
    <div id={key} className="mb-6">
      <img src={src} alt="" />
        <h2 className='center font-bold'>{title}</h2>
        <h4>{price}</h4>
    </div>
  )
}

export default Card;