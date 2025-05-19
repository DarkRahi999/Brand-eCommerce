import Button from "./Button"

const Article = ({title, desc}) => {
  return (
    <div className="bg-black w-1/2">
      <h1 className="text-2xl center text-white">{title}</h1>
      <p className="text-wrap text-white">{desc}</p>
      <Button input="Buy Now" className="px-4 py-1 border bg-white text-blue-800 rounded"/>
    </div>
  )
}

export default Article
