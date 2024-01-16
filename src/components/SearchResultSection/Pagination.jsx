import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination() {

  return (
    <div className="join">
      <button className="join-item btn btn-sm md:btn-md"><IoIosArrowBack /></button>
      <button className="join-item btn btn-sm md:btn-md btn-error text-white">2</button>
      <button className="join-item btn btn-sm md:btn-md"><IoIosArrowForward /></button>
    </div>
  )
}