
export default function FilterSubSectionHeader(props) {

  return (
    <header className={`text-lg text-black ${props.className}`}>{props.children}</header>
  )
}