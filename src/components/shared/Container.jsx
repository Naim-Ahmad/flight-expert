
export default function Container(props) {

  return (
    <div {...props} className={`max-w-[85rem] mx-auto px-3 md:px-6 ${props?.className}`}>
      {props.children}
    </div>
  )
}