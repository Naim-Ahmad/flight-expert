import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function SearchHeader() {

  return (
    <div>
      <div className="flex justify-between">
        {/* icon */}
        <div className="tooltip tooltip-bottom tooltip-error !text-white" data-tip="Search for previous day flight">
          <IoMdArrowDropleft size={50} color="red" />
        </div>
        {/* header */}
        <header className="text-3xl font-bold text-gray-900">Flights from Dhaka to Chittagong</header>
        {/* icon */}
        <div className="tooltip tooltip-bottom tooltip-error !text-white" data-tip="Search for next day flight">
          <IoMdArrowDropright size={50} color="red" />
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row p-3 shadow-md mb-6 rounded-md">
        <div className="grid flex-grow card bg-[#F4F7FA] hover:bg-[#F4F7FA] rounded-md place-items-start px-4 py-3">
          <h2 className="text-xl text-gray-800">Cheapest</h2>
          <p className="text-base text-gray-500">
            To get cheapest available flight
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow card hover:bg-[#F4F7FA] rounded-md place-items-start px-4 py-3">
          <h2 className="text-xl text-gray-800">Shortest</h2>
          <p className="text-base text-gray-500">
            To get the shortest available flight
          </p>
        </div>
      </div>
    </div>
  )
}