import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
// import { range } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { GlobalStateContext } from '../../context/state/GlobalStateProvider';
import { toggleDropDown } from '../../context/state/showDropDown/action';

export default function DatePicker() {

  const [startDate, setStartDate] = useState(new Date());
  const { state, dispatch } = useContext(GlobalStateContext)

  // console.log(state)
  const {showMenuList} = state;

  const showMenuField = Object.keys(showMenuList).find((key)=> showMenuList[key])

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (

    <ReactDatePicker
      id="datePicker"
      onClickOutside={()=> {
        dispatch(toggleDropDown({ target: showMenuField }))
      }}
      className='hidden'
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "between",
            alignItems: "center"
          }}
        >
          <button className='btn btn-error btn-xs px-0 text-white' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <IoMdArrowDropleft size={20} />
          </button>
          <select
            className='focus:outline-0 cursor-pointer hover:bg-gray-300 px-3 py-2 ml-3 rounded-md'
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            className='focus:outline-0 cursor-pointer hover:bg-gray-300 px-3 py-2 mr-3 rounded-md'
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button className='btn btn-error btn-xs px-0 text-white' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            <IoMdArrowDropright size={20} />
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}