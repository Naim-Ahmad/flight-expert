import { useContext } from "react";
import { FaMagnifyingGlass, FaPlane } from "react-icons/fa6";
import { GlobalStateContext } from "../../context/state/GlobalStateProvider";
import { updateTrip } from "../../context/state/multiStrip/actions";
import { toggleDropDown } from "../../context/state/showDropDown/action";

const destinationData = [
  {
    "airport": "Hazrat Shahjalal International Airport",
    "village": "Kadamtali",
    "country": "Bangladesh",
    "airportCode": "DAC"
  },
  {
    "airport": "Shah Amanat International Airport",
    "village": "Shah Amanat Nagar",
    "country": "Bangladesh",
    "airportCode": "CGP"
  },
  {
    "airport": "Osmani International Airport",
    "village": "Akhaura",
    "country": "Bangladesh"
  },
  {
    "airport": "Shah Makhdum Airport",
    "village": "Shah Makhdum",
    "country": "Bangladesh"
  },
  {
    "airport": "Saidpur Airport",
    "village": "Saidpur",
    "country": "Bangladesh"
  },
  {
    "airport": "Cox's Bazar Airport",
    "village": "Cox's Bazar",
    "country": "Bangladesh"
  }
]

export default function DropDownList(props) {

  const { state, dispatch } = useContext(GlobalStateContext)

  const {showMenuList} = state;

  // console.log(showMenuList)

  // console.log(showMenuList)
  const showMenuField = Object.keys(showMenuList).find((key)=> showMenuList[key])
  console.log(showMenuField)

  const handleClick = (trip) => {
    // console.log(props.trip.id)
    dispatch(updateTrip({
      id: props.trip.id,
      propertyName: showMenuField,
      ...trip
    }))
    dispatch(toggleDropDown({target: showMenuField}))
  }

  return (
    <ul className="shadow-2xl rounded-lg w-80 absolute bg-white z-10">
      <div className="border-b-2 flex items-center px-4">
        <FaMagnifyingGlass color="red" />
        <input className="py-2 px-2 placeholder:text-xs focus:border-0 focus:outline-0" type="text" placeholder="Type for the airport name or airport code" name="" id="" />
      </div>

      <div className="pt-3">
        {
          destinationData.map(d => (
            <li onClick={() => handleClick(d)} key={d.airport} className="flex gap-3 px-4 py-1 hover:bg-gray-300">
              <div>
                <span className="">
                  <FaPlane color="red" />
                </span>
              </div>

              <div className="flex justify-between w-full">

                <div className="flex flex-col">
                  <span className=" font-bold text-sm ">{`${d.village}, Bangladesh`}</span>
                  <span className="text-xs">
                    {d.airport}
                  </span>
                </div>

                <span className="text-sm">
                  {
                    d.airportCode || "N/A"
                  }
                </span>

              </div>

            </li>
          ))
        }

      </div>

    </ul>
  )
}