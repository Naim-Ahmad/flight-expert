import moment from "moment";

import ShortUniqueId from "short-unique-id";
import { ADDTRIP, SWAPDESTENITAION } from "./actionTypes";
const { randomUUID } = new ShortUniqueId({ length: 10 });

export const multiTrips = [
  {
    id: randomUUID(),
    from: {
      city: "Dhaka, Bangladesh",
      airport: "Hazrat Shahjalal International",
    },
    to: {
      city: "Chittagong, Bangladesh",
      airport: "Shah Amanat International",
    },
    departure: moment().format("DD MMM YY"),
    return: "",
    travelers: 1,
    class: "Economy",
  },
];

export default function multiTripReducer(state, action) {
  // console.log("multi trips payload", action);
  // console.log("multi trips state ", state);
  switch (action.type) {
    case ADDTRIP: {
      const newTrip = {
        ...state,
        id: randomUUID(),
        from: "Select a city",
        airport: "Select a city",
        departure: "Select a date",
      };
      return [...state, newTrip];
    }
    case SWAPDESTENITAION: {
      return state.map((trip) => {
        if (trip.id === action.payload.id) {
          // console.log(action.payload.id);
          const changedTrip = structuredClone(trip);
          const from = changedTrip.from;
          changedTrip["from"] = changedTrip["to"];
          changedTrip["to"] = from;
          return changedTrip;
        } else {
          return trip;
        }
      });
    }
    default:
      return state;
  }
}
