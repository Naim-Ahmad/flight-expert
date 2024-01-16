import moment from "moment";
import { useContext } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { GlobalStateContext } from "../../context/state/GlobalStateProvider";
import { swapDestination } from "../../context/state/multiStrip/actions";
import Button from "../shared/Button";
import SearchInputBox from "./SearchInputBox";

export default function SearchBody({trip}) {

  const { state, dispatch } = useContext(GlobalStateContext)

  const activeStripType = state.tripTypes.find(trip => trip.checked)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-0">
      {/* COL 1 */}
      <div className="relative">
        <SearchInputBox className="relative">
          <span className="text-sm text-gray-600">From</span>
          <span className="text-xl text-gray-700 font-bold">{trip.from.city.split(',')[0]}</span>
          <span className="text-xs text-gray-600 tracking-wide">{trip.from.airport}</span>

          {/* destination toggler */}
          <div onClick={()=> dispatch(swapDestination({id: trip.id}))} className="w-14 h-14 lg:w-10 lg:h-10 absolute right-2 lg:-right-5 bg-white mt-14 rotate-90 lg:rotate-0 lg:mt-3 text-red-500 cursor-pointer -space-y-1 border shadow-md rounded-full flex flex-col items-center justify-center">
            <FaArrowRightLong />
            <FaArrowLeftLong />
          </div>
        </SearchInputBox>

      </div>
      {/* COL 2 */}
      <div>
        <SearchInputBox className="pl-7">
          <span className="text-sm text-gray-600">To</span>
          <span className="text-xl text-gray-700 font-bold">{trip.to.city.split(',')[0]}</span>
          <span className="text-xs text-gray-600 tracking-wide">{trip.to.airport}</span>
        </SearchInputBox>
      </div>
      {/* COL 3 */}
      <div className="card lg:col-span-2 lg:mx-2">

        <div className="flex flex-row py-0">

          <div className="flex-1">
            <div>
              <SearchInputBox className="!rounded-r-none">
                <span className="text-sm text-gray-600 flex gap-1 items-center">Departure <RiArrowDownSLine size={25} /></span>
                <span className="text-xl text-gray-700 font-bold">14 jan 24</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
              </SearchInputBox>
            </div>
          </div>

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
        </div>

      </div>

      {/* COL 4 */}
      <div>
        <SearchInputBox>
          <span className="text-sm text-gray-600">Travelers & Booking Class</span>
          <span className="text-xl text-gray-700 font-bold">1 Traveler</span>
          <span className="text-xs text-gray-600 tracking-wide">Tap to book return ticket</span>
        </SearchInputBox>
      </div>

      <Button className="px-16 w-full block lg:hidden">Search </Button>
    </div>
  )
}