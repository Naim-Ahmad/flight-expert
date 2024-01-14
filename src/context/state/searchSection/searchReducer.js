import ShortUniqueId from "short-unique-id";
import { CHECKBOX } from "./actionType";

const { randomUUID } = new ShortUniqueId({ length: 10 });

const tripTypes = [
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

export const initialState = {
  tripTypes,
};

export default function searchReducer(state, action) {
  switch (action.type) {
    case CHECKBOX: {
      // console.log(action.payload);
      return {
        ...state,
        tripTypes: state.tripTypes.map((tripType) => {
          console.log(tripType);
          if (tripType.checked) {
            return {
              ...tripType,
              checked: false,
            };
          } else if (action.payload?._id == tripType?._id) {
            return {
              ...tripType,
              checked: action.payload,
            };
          } else {
            return tripType;
          }
        }),
      };
    }
  }
}
