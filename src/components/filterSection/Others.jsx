import Button from "../shared/Button";
import Checkbox from "../shared/CheckBox";
import FilterSubSectionHeader from "./FilterSubSectionHeader";

const airlines = [
  {
    planeName: 'US Bangla Airlines',
    fare: 'BDT 4,139'
  },
  {
    planeName: 'Air Astra',
    fare: 'BDT 4,070'
  },
  {
    planeName: 'Biman Bangladesh Airlines',
    fare: 'BDT 3,954'
  },
  {
    planeName: 'Novo Air',
    fare: 'BDT 4,070'
  },

]

function CheckboxWithAmount({ label, amount }) {
  return (
    <div className="grid grid-cols-2 gap-4">

      <Checkbox label={label} />

      <div className="text-right">
        <span className="text-base text-gray-600">{amount}</span>
      </div>

    </div>

  )
}

export default function Others() {

  return (
    <>
      <div className="card-body">
        <FilterSubSectionHeader className="mb-3">Stops From Dhaka</FilterSubSectionHeader>
        <CheckboxWithAmount label="Non Stop (11)" amount="BDT 3,954" />
      </div>

      <div className="divider my-0 h-0"></div>

      <div className="card-body">
        <FilterSubSectionHeader className="mb-3">Check in Baggage Allowance
        </FilterSubSectionHeader>
        <Checkbox label="20 KG (11)" />
      </div>

      {/* refundable */}
      <div className="divider my-0 h-0"></div>
      <div className="card-body">
        <FilterSubSectionHeader className="mb-3">Refundable
        </FilterSubSectionHeader>
        <Checkbox label="Partially Refundable (11)" />
      </div>

      {/* airlines */}
      <div className="divider my-0 h-0"></div>
      <div className="card-body">
        <FilterSubSectionHeader className="mb-3">Airlines
        </FilterSubSectionHeader>
        {
          airlines.map(airline => (
            <div className="pb-3" key={airline.planeName} >
              <CheckboxWithAmount label={airline.planeName} amount={airline.fare} />
            </div>
          ))
        }
      </div>

      {/* transit time */}
      <div className="divider my-0 h-0"></div>
      <div className="card-body">
        <FilterSubSectionHeader className="mb-3"> Transit Time in (Dhaka - Chittagong)
        </FilterSubSectionHeader>
        <Checkbox label="No Transit Time (10)" />
      </div>

      <div className="card-body">
        <Button className="btn-outline hover:!text-white w-full">Clear Filter</Button>
      </div>
    </>
  )
}