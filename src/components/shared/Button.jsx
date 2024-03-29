
export default function Button(props) {

  return (
    <button className={`btn btn-error text-white hover:text-red-500 hover:bg-slate-100 ${props.className}`}>{props.children}</button>
  )
}