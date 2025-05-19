import Button from "./Button"

const Article = ({title, desc}) => {
  return (
    <div className="bg-black grid items-center h-80 rounded-lg">
      <h1 className="text-3xl font-bold text-white mt-8">{title}</h1>
      <p className="text-white font-bold w-8/12 m-auto">{desc}</p>
      <Button input="Buy Now" className="px-4 py-1 border bg-white text-blue-800 rounded text-xl"/>
    </div>
  )
}

export default Article
