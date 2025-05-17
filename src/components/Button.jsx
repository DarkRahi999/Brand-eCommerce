export default function Button({input ,className }) {
  return (
    <div>
      <button className="px-4 py-1 border bg-slate-500 text-white rounded">
        {input}
      </button>
    </div>
  )
}