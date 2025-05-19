//G_---------------{  Button Component  }---------------_G//
export default function Button({input}) {
  return (
    <div>
      <button className="px-4 py-1 border bg-slate-500 text-white rounded" type="submit">
        {input}
      </button>
    </div>
  )
}