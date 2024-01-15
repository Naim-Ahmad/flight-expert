import { useContext } from "react";
import { SearchContext } from "../../context/state/searchSection/SearchProvider";
import { ChangeCheckbox } from '../../context/state/searchSection/actions';

export default function Radio(props) {

  const { dispatch } = useContext(SearchContext)

  const handleClick = () => {
    dispatch(ChangeCheckbox({ ...props, checked: true }))
  }

  let classes;

  if (props.checked) {
    classes = 'radio radio-error border-[7px] checked:bg-slate-100'
  } else {
    classes = 'radio border-gray-400 border-2'
  }

  return (
    <div onClick={handleClick}>
      <label htmlFor={props.name} className="flex items-center gap-2 text-gray-500 font-semibold">
        <input
          type="radio"
          name={props.name}
          className={classes}
          checked={props.checked}
          readOnly
        />
        {props.label}
      </label>
    </div>
  )
}