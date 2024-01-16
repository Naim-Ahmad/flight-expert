import moment from "moment";
import { useContext } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { GlobalStateContext } from "../../context/state/GlobalStateProvider";
import { addTrip, swapDestination } from "../../context/state/multiStrip/actions";
import useToggle from "../../hooks/useToggle";
import Button from "../shared/Button";
import SearchInputBox from "./SearchInputBox";

export default function SearchBody({ trip, ind }) {

  const { state, dispatch } = useContext(GlobalStateContext)

  const [isShowList, showListHandler] = useToggle()

  console.log(isShowList)
  const activeStripType = state.tripTypes.find(trip => trip.checked)


  // console.log(moment(trip.departure).format('DD MMM YY'))

  const handleAddTrip = () => {
    dispatch(addTrip())
  }

  const handleShowList = e => {
    console.log(e)
    showListHandler()
  }

  // console.log(isShowList, showListHandler)

  return (
    <div className={`grid ${activeStripType.label === 'Multi City' ? "lg:grid-cols-4" : "lg:grid-cols-5"} grid-cols-1 gap-3 lg:gap-0`}>
      {/* COL 1 */}
      <div className="relative">
        <SearchInputBox onClick={handleShowList} className="relative">
          <span className="text-sm text-gray-600">From</span>
          <span className="text-xl text-gray-700 font-bold">{trip.from.city?.split(',')[0]}</span>
          <span className="text-xs text-gray-600 tracking-wide">{trip.from.airport}</span>

          {/* destination toggler */}
          <div onClick={() => dispatch(swapDestination({ id: trip.id }))} className="w-14 h-14 lg:w-10 lg:h-10 absolute right-2 lg:-right-5 bg-white mt-14 rotate-90 lg:rotate-0 lg:mt-3 text-red-500 cursor-pointer -space-y-1 border shadow-md rounded-full flex flex-col items-center justify-center">
            <FaArrowRightLong />
            <FaArrowLeftLong />
          </div>
        </SearchInputBox>
      </div>

      {/* COL 2 */}
      <div>
        <SearchInputBox className="pl-7">
          <span className="text-sm text-gray-600">To</span>
          <span className="text-xl text-gray-700 font-bold">{trip.to.city?.split(',')[0]}</span>
          <span className="text-xs text-gray-600 tracking-wide">{trip.to.airport}</span>
        </SearchInputBox>
      </div>
      {/* COL 3 */}
      <div className={`card  ${activeStripType.label === 'Multi City' ? "lg:col-span-0" : "lg:col-span-2"} lg:mx-2`}>

        <div className="flex flex-row py-0">

          <div className="flex-1">
            <div>
              <SearchInputBox className={activeStripType.label !== "Multi City" && "!rounded-r-none"}>
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
            </div>
          </div>

          {activeStripType.label !== 'Multi City' &&
            <div className="flex-1">
              <div className="">
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
          <SearchInputBox>
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