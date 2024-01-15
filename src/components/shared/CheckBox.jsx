
export default function Checkbox(props = {checked: true}) {


  const handleClick = () => {
    // dispatch(ChangeCheckbox({ ...props, checked: true }))
  }

  let classes;

  if (true) {
    classes = ''
  } else {
    classes = ' border-gray-400 border-2'
  }

  return (
    <div onClick={handleClick}>
      <label htmlFor={props.name} className="flex items-center gap-2 text-gray-500">
        <input
          type="checkbox"
          name={props.name}
          className={`${classes} checkbox checkbox-sm`}
          checked={true}
          readOnly
        />
        {props.label}
      </label>
    </div>
  )
}