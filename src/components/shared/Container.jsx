
export default function Container(props) {

  return (
    <div {...props} className={`max-w-[85rem] mx-auto px-4 md:px-8 ${props?.className}`}>
      {props.children}
    </div>
  )
}