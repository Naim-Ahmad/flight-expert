
export default function Container(props) {

  return (
    <div className={`max-w-[85rem] mx-auto px-3 md:px-6 ${props?.class}`}>
      {props.children}
    </div>
  )
}