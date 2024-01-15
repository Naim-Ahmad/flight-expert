import { useContext, useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { SearchContext } from "../../context/state/searchSection/SearchProvider";
import useToggle from "../../hooks/useToggle";
import Container from "../shared/Container";
import CheckBox from "../shared/Radio";
import SearchInputBox from "./SearchInputBox";

export default function SearchSection() {

  const { state } = useContext(SearchContext)
  const [fareType, setFareType] = useState('regular')
  const [show, showHandler] = useToggle(false)

  // console.log(show)

  useEffect(() => {
    if (window.innerWidth > 1070) {
      showHandler(()=> true)
    } else {
      showHandler(()=> false)
    }

    const eventHandler = () => {
      // console.log(window.innerWidth)
      if (window.innerWidth > 1070) {
        showHandler(()=> true)
      } else {
        showHandler(()=> false)
      }
    }

    window.addEventListener('resize', eventHandler)

    return () => window.removeEventListener('resize', eventHandler)
  }, [])


  return (
    <Container>

      <div onClick={()=> showHandler()} className='card shadow-md bg-[#F3F6FA] card-compact rounded-md -mb-4 lg:hidden'>
        <div className="card-body flex-row justify-between items-center">
          <div className='text-xl font-bold flex flex-col'>
            <span className="text-xl font-bold">Dhaka - Chittagong</span>
            <span className="text-gray-400 text-xs">16 January | 1 Adult | Economy</span>
          </div>
          <div className="flex flex-col items-center text-red-500 font-bold">
            <BsPencilSquare />
            <span className="text-sm">Modify</span>
          </div>
        </div>
      </div>

      {show && <div className="card bg-base-100 shadow-xl">
        <div className="card-body px-2 sm:px-4">
          {/* HEADER */}
          <div className="flex gap-4 sm:gap-5 mb-3">
            {state.tripTypes.map(checkbox => <CheckBox key={checkbox?._id} {...checkbox} name="tripType" />)}
          </div>

          {/* BODY */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-0">
            {/* COL 1 */}
            <div className="relative">
              <SearchInputBox className="relative">
                <span className="text-sm text-gray-600">From</span>
                <span className="text-xl text-gray-700 font-bold">Dhaka</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>

                {/* destination toggler */}
                <div className="w-14 h-14 lg:w-10 lg:h-10 absolute right-2 lg:-right-5 bg-white mt-14 rotate-90 lg:rotate-0 lg:mt-3 text-red-500 cursor-pointer -space-y-1 border shadow-md rounded-full flex flex-col items-center justify-center">
                  <FaArrowRightLong />
                  <FaArrowLeftLong />
                </div>
              </SearchInputBox>

            </div>
            {/* COL 2 */}
            <div>
              <SearchInputBox className="pl-7">
                <span className="text-sm text-gray-600">To</span>
                <span className="text-xl text-gray-700 font-bold">Chittagong</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
              </SearchInputBox>
            </div>
            {/* COL 3 */}
            <div className="card lg:col-span-2 lg:mx-2">

              <div className="flex flex-row py-0">

                <div className="flex-1">
                  <div>
                    <SearchInputBox className="!rounded-r-none">
                      <span className="text-sm text-gray-600">Departure</span>
                      <span className="text-xl text-gray-700 font-bold">14 jan 24</span>
                      <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
                    </SearchInputBox>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="">
                    <SearchInputBox className="!rounded-l-none">
                      <span className="text-sm text-gray-600">Return</span>
                      <span className="text-sm text-gray-700 pb-2">Tap to book return ticket</span>
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

            {/* <div>
              <SearchInputBox>
                <span className="text-sm text-gray-600">From</span>
                <span className="text-xl text-gray-700 font-bold">Dhaka</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
              </SearchInputBox>
            </div> */}
          </div>

          {/* FOOTER */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-bold">Fare Type: </span>
            <div className="flex gap-1">
              <div onClick={() => setFareType('regular')} className="cursor-pointer text-sm sm:text-md flex gap-2 items-center bg-red-100 rounded-md px-3 py-2">
                {/* icon */}
                <div>
                  {
                    fareType === 'regular' ? <MdOutlineDone className="bg-red-500 rounded-full p-[1px]" size={16} color="white" /> : <FaRegCircle />
                  }

                </div>
                {/* text */}
                <span>Regular Fares</span>
              </div>

              <div onClick={() => setFareType('seaman')} className="cursor-pointer flex gap-2 items-center bg-red-100 rounded-md px-3 py-2">
                {/* icon */}
                {
                  fareType === 'seaman' ? <MdOutlineDone className="bg-red-500 rounded-full p-[1px]" size={16} color="white" /> : <FaRegCircle />
                }
                {/* text */}
                <span>Seaman Fares</span>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </Container>
  )
}