import CountDownSession from "./CountDownSession";
import DepartureTime from "./DepartureTime";
import Others from "./Others";
import TripTypePriceRange from "./TripTypePriceRange";

export default function FilterSection() {

  return (
    <div className="card card-compact shadow-lg">
      <CountDownSession/>
      <div className="divider my-0 h-0"></div>
      <TripTypePriceRange/>
      <div className="divider my-0 h-0"></div>
      <DepartureTime/>
      <div className="divider my-0 h-0"></div>
      <Others/>
    </div>
  )
}