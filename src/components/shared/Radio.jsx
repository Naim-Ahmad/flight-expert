import { useContext } from "react";
import { GlobalStateContext } from "../../context/state/GlobalStateProvider";
import { addNewTrip, oneWayTrip } from "../../context/state/multiStrip/actions";
import { ChangeCheckbox } from '../../context/state/tripTypes/actions';

export default function Radio(props) {

  const { dispatch } = useContext(GlobalStateContext)

  // console.log(dispatch)

  const handleClick = () => {
    dispatch(ChangeCheckbox({ ...props, checked: true }))
    if(props.label === 'Multi City'){
      dispatch(addNewTrip())
    }
    if(props.label !== 'Multi City'){
      dispatch(oneWayTrip())
    }
    // if(props.label !== 'Multi City'){
    //   dispatch()
    // }
  }

  let classes;

  if (props.checked) {
    classes = 'radio radio-error border-[4px] sm:border-[7px]  checked:bg-slate-100'
  } else {
    classes = 'radio border-gray-400 border-2'
  }

  return (
    <div onClick={handleClick}>
      <label htmlFor={props.name} className="flex items-center gap-1 sm:gap-2 text-gray-500 text-sm sm:text-base font-semibold">
        <input
          type="radio"
          name={props.name}
          className={`${classes} radio-xs sm:radio-md`}
          checked={props.checked}
          readOnly
        />
        {props.label}
      </label>
    </div>
  )
}