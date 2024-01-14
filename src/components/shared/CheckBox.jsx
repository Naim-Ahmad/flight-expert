import { useState } from "react";

export default function CheckBox(props) {

  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  let classes;

  if (checked) {
    classes = 'radio radio-error border-[7px] checked:bg-slate-100'
  } else {
    classes = 'radio border-gray-400 border-2'
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name={props.name}
        className={classes}
      />
      <label htmlFor={props.name} className="text-gray-500 font-semibold">{props.label}</label>
    </div>
  )
}