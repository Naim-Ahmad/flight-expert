import { useState } from "react"
import FilterSubSectionHeader from "./FilterSubSectionHeader"

export default function TripTypePriceRange() {

  const [traceBack, setTraceBack] = useState(50)

  const style = {
    background: `linear-gradient(
      to right,
      #e74c3c 0%,
      #e74c3c ${traceBack}%,
      #ddd 0%,
      #ddd 100%
    )`
  }

  const handleChange = e => {
    setTraceBack(e.target.value)
  }

  return (
    <div className="card-body">
      <FilterSubSectionHeader>One Way Price</FilterSubSectionHeader>
      <input type="range" name="" onChange={handleChange} style={style} />
      <footer className="text-lg text-black font-medium">3,369 tk - 7,718 tk</footer>
    </div>
  )
}