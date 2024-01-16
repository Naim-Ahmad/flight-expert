import { useContext, useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { GlobalStateContext } from "../../context/state/GlobalStateProvider";
import useToggle from "../../hooks/useToggle";
import Button from "../shared/Button";
import Container from "../shared/Container";
import CheckBox from "../shared/Radio";
import SearchBody from "./SearchBody";

export default function SearchSection() {

  const { state } = useContext(GlobalStateContext)
  const [fareType, setFareType] = useState('regular')
  const [show, showHandler] = useToggle(false)

  // console.log(activeStripType)
  console.log(state)

  useEffect(() => {
    if (window.innerWidth > 1070) {
      showHandler(() => true)
    } else {
      showHandler(() => false)
    }
    const eventHandler = () => {
      // console.log(window.innerWidth)
      if (window.innerWidth > 1070) {
        showHandler(() => true)
      } else {
        showHandler(() => false)
      }
    }

    window.addEventListener('resize', eventHandler)

    return () => window.removeEventListener('resize', eventHandler)
  }, [])


  return (
    <Container>
      {/* will be show this div on mobile device */}
      <div onClick={() => showHandler()} className='card shadow-md bg-[#F3F6FA] card-compact rounded-md -mb-14 lg:hidden'>
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

      {show && <div className="card bg-base-100 mt-12 lg:mt-0 shadow-xl">
        <div className="card-body px-2 sm:px-4">
          {/* HEADER */}
          <div className="flex gap-4 sm:gap-5 mb-3">
            {state.tripTypes.map(checkbox => <CheckBox key={checkbox?._id} {...checkbox} name="tripType" />)}
          </div>

          {/* BODY */}
          {
            state.multiTrips?.map((trip, ind) => <SearchBody key={trip.id} ind={ind} trip={trip} />)
          }

          {/* FOOTER */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-bold">Fare Type: </span>
            <div className="flex gap-1">
              <div onClick={() => setFareType('regular')} className="cursor-pointer text-sm sm:text-md flex gap-2 items-center bg-red-100 rounded-md px-3 py-2">
                {/* icon */}
                <div>
                  {
                    fareType === 'regular' ? <MdOutlineDone className="bg-red-500 rounded-full p-[1px]" size={16} color="white" /> : <FaRegCircle size={16} />
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
          <div className="-mb-14 text-center hidden lg:block">
            <Button className="px-16">Search </Button>
          </div>
        </div>
      </div>}
    </Container>
  )
}