import ShortUniqueId from "short-unique-id";
import {
  ADDNEWTRIP,
  ADDTRIP,
  ONEWAYTRIP,
  SWAPDESTENITAION,
} from "./actionTypes";
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
    departure: new Date(),
    return: "",
    travelers: 1,
    class: "Economy",
  },
];

export default function multiTripReducer(state, action) {
  // console.log("multi trips payload", action);
  // console.log("multi trips state ", state);
  switch (action.type) {
    case ADDNEWTRIP: {
      const newTrip = {
        id: randomUUID(),
        from: {
          city: "Select a city",
          airport: "Click to choose an airport",
        },
        to: {
          city: "Select a city",
          airport: "Click to choose an airport",
        },
        departure: "Select a date",
      };
      return [...multiTrips, newTrip];
    }
    case ADDTRIP: {
      const newTrip = {
        id: randomUUID(),
        from: {
          city: "Select a city",
          airport: "Click to choose an airport",
        },
        to: {
          city: "Select a city",
          airport: "Click to choose an airport",
        },
        departure: "Select a date",
      };
      return [...state, newTrip];
    }
    case SWAPDESTENITAION: {
      return state.map((trip) => {
        if (trip.id === action.payload.id) {
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
    case ONEWAYTRIP: {
      return [...multiTrips];
    }
    default:
      return state;
  }
}
