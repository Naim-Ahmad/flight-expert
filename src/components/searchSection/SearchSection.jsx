import { useContext } from "react"
import { SearchContext } from "../../context/state/searchSection/SearchProvider"
import CheckBox from "../shared/Radio"
import Container from "../shared/Container"



export default function SearchSection() {

  const { state } = useContext(SearchContext)

  return (
    <Container>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">

          <div className="flex gap-5 mb-3">
            {state.tripTypes.map(checkbox => <CheckBox key={checkbox?._id} {...checkbox} name="tripType" />)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4  lg:gap-0">

            <div className="card border">
              <div className="card-body py-3 px-4">
                <span className="text-sm text-gray-600">From</span>
                <span className="text-xl text-gray-700 font-bold">Dhaka</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
              </div>
            </div>

            <div className="card border">
              <div className="card-body py-3 px-4">
                <span className="text-sm text-gray-600">To</span>
                <span className="text-xl text-gray-700 font-bold">Chittagong</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
              </div>
            </div>

            <div className="card border lg:col-span-2 lg:mx-2">
              <div className="card-body flex-row py-0 px-4">
                <div className="border-r-2 border-gray-300 flex-1">
                  <div className="card">
                    <div className="card-body py-3 px-0">
                      <span className="text-sm text-gray-600">Departure</span>
                      <span className="text-xl text-gray-700 font-bold">14 jan 24</span>
                      <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="card">
                    <div className="card-body py-3 px-0">
                      <span className="text-sm text-gray-600">Return</span>
                      <span className="text-xl text-gray-700 font-bold"></span>
                      <span className="text-xs text-gray-600 tracking-wide">Tap to book return ticket</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="card border">
              <div className="card-body py-3 px-4">
                <span className="text-sm text-gray-600">Travelers & Booking Class</span>
                <span className="text-xl text-gray-700 font-bold">1 Traveler</span>
                <span className="text-xs text-gray-600 tracking-wide">Tap to book return ticket</span>
              </div>
            </div>
            {/* <div className="card border">
              <div className="card-body py-3 px-4">
                <span className="text-sm text-gray-600">From</span>
                <span className="text-xl text-gray-700 font-bold">Dhaka</span>
                <span className="text-xs text-gray-600 tracking-wide">shahamanot international</span>
              </div>
            </div> */}
          </div>

          <div>
            <span>Fare Type: </span>
            <div>

            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}