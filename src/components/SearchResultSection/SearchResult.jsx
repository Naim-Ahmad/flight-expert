import { useEffect, useState } from "react";
import { RiArrowDownSLine, RiArrowDropUpLine } from "react-icons/ri";
import line from '../../assets/non-stop-shape.png';
import useToggle from "../../hooks/useToggle";
import Button from "../shared/Button";

export default function SearchResult() {

  const [flightData, setFlightData] = useState([])
  const [show, setShow] = useToggle()

  useEffect(() => {
    fetch('flight.json')
      .then(res => res.json())
      .then(data => setFlightData(data))
  }, [])

  // console.log(flightData)


  return (
    <div className="border rounded-lg">
      {
        flightData.slice(0, 1).map(flight => (
          <div key={flight.airline} className="grid grid-cols-6 shadow-md p-6">
            <div className="flex flex-col">
              <figure>
                <img src="https://i.ibb.co/0GYLtxB/BS.png" className="h-[5rem] mr-auto" alt="" />
              </figure>
              <span className="text-xs text-gray-400 mb-3">US Bangla Airlines</span>
              <span className="text-green-900 font-semibold text-xs">Partially Refundable</span>
            </div>

            {/* depart */}
            <div className="flex flex-col px-0">
              <h2 className="text-xs text-gray-400 mb-3">Depart</h2>
              <p><span className="text-lg">20:00</span> <br />
                <span className="text-xs">Mon, 15 Jan 2024</span> <br />
                <span className="text-base">Dhaka</span>
              </p>

            </div>
            {/* duration */}
            <div className="flex flex-col">
              <h2 className="text-xs text-gray-400 mb-3">45 minute</h2>
              <span> <img src={line} alt="" className="-ml-8 mb-4"/> </span>
              <span>Non Stop</span>
            </div>
            {/* arrive */}
            <div className="flex flex-col">
              <h2 className="text-xs text-gray-400 mb-3">Depart</h2>
              <p><span className="text-lg">20:00</span> <br />
                <span className="text-xs">Mon, 15 Jan 2024</span> <br />
                <span className="text-base">Dhaka</span>
              </p>
            </div>

            {/* price */}
            <div className="flex flex-col">
              <h2 className="text-xs text-gray-400 mb-3">Price</h2>
              <p>BDT 3,954</p>

            </div>

            {/* card action */}

            <div className="flex flex-col justify-between">
              <Button className="hover:!text-orange-700 btn-md">Book Now</Button>

              <button onClick={() => setShow(!show)} className="text-error font-bold flex gap-2">See Details {!show ? <RiArrowDownSLine size={25} /> : <RiArrowDropUpLine size={25} />}</button>
            </div>

          </div>
        ))
      }

      {
        show ? (
          <div className="">
            <div className="divider"></div>
            I am show div
          </div>
        ): ''
      }
    </div>
  )
}