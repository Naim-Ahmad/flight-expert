
export default function Checkbox(props = { checked: true }) {

  const handleClick = () => {
    // dispatch(ChangeCheckbox({ ...props, checked: true }))
  }

  return (
    <div onClick={handleClick}>
      <label htmlFor={props.name} className="flex items-center gap-2 text-gray-500">
        <input
          type="checkbox"
          name={props.name}
          className={``}
          id="checkbox"
        />
        {props.label}
      </label>
    </div>
    

  )
}