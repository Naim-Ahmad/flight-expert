import moment from "moment";
import { useContext, useRef } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { GlobalStateContext } from "../../context/state/GlobalStateProvider";
import { addTrip, swapDestination } from "../../context/state/multiStrip/actions";
import { toggleDropDown } from "../../context/state/showDropDown/action";
import Button from "../shared/Button";
import DatePicker from "./DatePicker";
import DropDownList from "./DropDownList";
import SearchInputBox from "./SearchInputBox";



export default function SearchBody({ trip, ind }) {

  const { state, dispatch } = useContext(GlobalStateContext)

  const fromRef = useRef()

  const showMenuList = state.showMenuList;


  const activeStripType = state.tripTypes.find(trip => trip.checked)

  const handleShowMenu = (target) => {
    // console.log(target)
    dispatch(toggleDropDown({ target }))
    if (target === 'departure' && !showMenuList.departure) {
      document.getElementById('datePicker').click()
    }
  }

  const handleAddTrip = () => {
    dispatch(addTrip())
  }

  const changeDest = (e) => {
    e.stopPropagation()
    dispatch(swapDestination({ id: trip.id }))

  }

  // console.log(showMenuList)

  return (
    <div id="parent" className={`grid ${activeStripType.label === 'Multi City' ? "lg:grid-cols-4" : "lg:grid-cols-5"} grid-cols-1 gap-3 lg:gap-0`}>
      {/* COL 1 */}
      <div className={`${showMenuList.from && 'bg-[#DFEBFE]'} relative`} >
        <SearchInputBox onClick={() => handleShowMenu('from')} className="relative">
          <span className="text-sm text-gray-600">From</span>
          <span ref={fromRef} className="text-xl text-gray-700 font-bold">{trip.from.city?.split(',')[0]}</span>
          <span className="text-xs text-gray-600 tracking-wide">{trip.from.airport}</span>

          {/* destination toggler */}
          <div onClick={changeDest} className="w-14 h-14 lg:w-10 z-10 lg:h-10 absolute right-10 lg:-right-5 bg-white mt-24  rotate-90 lg:rotate-0 lg:mt-1 text-red-500 cursor-pointer -space-y-1 border shadow-md rounded-full flex flex-col items-center justify-center">
            <FaArrowRightLong />
            <FaArrowLeftLong />
          </div>
        </SearchInputBox>


        {showMenuList.from && <DropDownList trip={trip} />}
      </div>

      {/* COL 2 */}
      <div className={`${showMenuList.to && 'bg-[#DFEBFE]'} relative`} >
        <SearchInputBox onClick={() => handleShowMenu('to')} className="pl-7">
          <span className="text-sm text-gray-600">To</span>
          <span className="text-xl text-gray-700 font-bold">{trip.to.city?.split(',')[0]}</span>
          <span className="text-xs text-gray-600 tracking-wide">{trip.to.airport}</span>
        </SearchInputBox>

        {showMenuList.to && <DropDownList trip={trip} />}
      </div>

      {/* COL 3 departure */}
      <div className={`card  ${activeStripType.label === 'Multi City' ? "lg:col-span-0" : "lg:col-span-2"} lg:mx-2`}>

        <div className="flex flex-row py-0">

          <div className="flex-1">
            <div className={`${showMenuList.departure && 'bg-[#DFEBFE]'} relative`}>
              <SearchInputBox onClick={() => handleShowMenu('departure')} className={activeStripType.label !== "Multi City" && "!rounded-r-none"}>
                <span className="text-sm text-gray-600 flex gap-1 items-center">Departure <RiArrowDownSLine size={25} /></span>
                <span className="text-xl text-gray-700 font-bold">{
                  typeof trip.departure === 'string' ? trip.departure : moment(trip.departure.toString()).format('DD MMM YY')
                }</span>
                <span className="text-xs text-gray-600 tracking-wide">
                  {
                    typeof trip.departure === 'string' ? trip.departure : moment(trip.departure.toString()).format('ddd')
                  }
                </span>
              </SearchInputBox>

              {/* date picker */}
              {
               <div className="absolute top-14" >
                  <DatePicker className="absolute" />
                </div>
              }
            </div>
          </div>

          {activeStripType.label !== 'Multi City' &&
            <div className="flex-1">
              <div onClick={() => handleShowMenu('return')} className="">
                <SearchInputBox className="!rounded-l-none">
                  <span className="text-sm text-gray-600 flex gap-1 items-center">Return
                    <RiArrowDownSLine size={25} /></span>
                  {activeStripType.label === 'One Way' ? <span className="text-sm text-gray-700 pb-2">Tap to book return ticket</span> : <span className="text-xl text-gray-700 font-bold">{moment().format('DD')} {moment().format('MMMM')}</span>}
                  <span className="text-xs text-gray-600 tracking-wide">For more saving</span>
                </SearchInputBox>
              </div>
            </div>
          }

        </div>

      </div>

      {/* COL 4 */}
      <div>
        {ind === 0 ?
          <SearchInputBox onClick={() => handleShowMenu('travelers')}>
            <span className="text-sm text-gray-600">Travelers & Booking Class</span>
            <span className="text-xl text-gray-700 font-bold">1 Traveler</span>
            <span className="text-xs text-gray-600 tracking-wide">Tap to book return ticket</span>
          </SearchInputBox>
          : <SearchInputBox onClick={handleAddTrip}>
            <span className="text-red-500 gap-1 font-bold flex justify-center items-center rounded-md border-2 border-red-400 py-1 text-xs px-4 w-max "><BsPlusCircleFill />Add another trip</span>
          </SearchInputBox>
        }
      </div>

      <Button className="px-16 w-full block lg:hidden">Search </Button>
    </div>
  )
}