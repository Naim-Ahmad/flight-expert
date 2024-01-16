import ShortUniqueId from "short-unique-id";
import { CHECKBOX } from "./actionType";

const { randomUUID } = new ShortUniqueId({ length: 10 });

export const initialState = [
  {
    _id: randomUUID(),
    label: "One Way",
    checked: true,
  },
  {
    _id: randomUUID(),
    label: "Round Trip",
    checked: false,
  },
  {
    _id: randomUUID(),
    label: "Multi City",
    checked: false,
  },
];

export default function tripTypesReducer(state, action) {
  switch (action.type) {
    case CHECKBOX: {
      // console.log("tripType action payload", action.payload);
      // console.log("trip tipes state ", state);
      return state.map((tripType) => {
        if (tripType.checked) {
          return {
            ...tripType,
            checked: false,
          };
        } else if (action.payload?._id == tripType?._id) {
          return {
            ...tripType,
            checked: action.payload.checked,
          };
        } else {
          return tripType;
        }
      });
    }
    default:
      return state;
  }
}
