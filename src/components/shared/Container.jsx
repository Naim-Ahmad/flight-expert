
export default function Container(props) {

  return (
    <div className={`max-w-[85rem] mx-auto px-2 md:px-6 ${props?.className}`}>
      {props.children}
    </div>
  )
}