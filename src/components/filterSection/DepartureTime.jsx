import { PiSunDim, PiSunHorizon, PiSunHorizonFill } from "react-icons/pi";
import FilterSubSectionHeader from "./FilterSubSectionHeader";

// console.log(PiSunDim)

const departureTimes = [
  {
    icon: <PiSunHorizon size={25}/>,
    time: 'Morning',
    actualTime: '6:00 - 11:59',
  },
  {
    icon: <PiSunDim size={25}/>,
    time: 'After Noon',
    actualTime: '12:00 - 17:59',
  },
  {
    icon: <PiSunHorizonFill size={25}/>,
    time: 'Evening',
    actualTime: '18:00 - 23:59',
  },
]

export default function DepartureTime() {

  return (
    <div className="card-body">
      <FilterSubSectionHeader className="mb-3">Departure time in Dhaka</FilterSubSectionHeader>
      <div className="grid grid-cols-2 gap-4">
        {
          departureTimes.map(departureTime => (
            <div key={departureTime.time} className="card-body items-center border py-0 border-black shadow-md w-40 rounded-md">
              {/* icon */}
              { departureTime.icon}
              {/* time */}
              <span className="font-semibold -mb-2">{departureTime.time}</span>
              {/* actual time */}
              <span className="text-xs font-medium text-gray-700">{departureTime.actualTime}</span>
            </div>
          ))
        }

      </div>
    </div>
  )
}