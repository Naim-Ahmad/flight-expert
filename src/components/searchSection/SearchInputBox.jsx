
export default function SearchInputBox({className, children}) {

  return (
    <div className={`rounded-lg border flex flex-col py-2 px-4 ${className}`}>
      {children}
    </div>
  )
}