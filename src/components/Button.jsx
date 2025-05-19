//G_---------------{  Button Component  }---------------_G//
export default function Button({input, className, icon}) {
  return (
    <div>
      <button className={className} type="submit">
        {icon}
        {input}
      </button>
    </div>
  )
}