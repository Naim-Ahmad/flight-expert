
export default function SearchInputBox(props) {

  const {className, children} = props

  return (
    <div {...props} className={`rounded-lg border flex flex-col py-2 px-4 h-24 justify-center cursor-pointer ${className}`}>
      {children}
    </div>
  )
}