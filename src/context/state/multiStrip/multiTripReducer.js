import ShortUniqueId from "short-unique-id";
import {
  ADDNEWTRIP,
  ADDTRIP,
  ONEWAYTRIP,
  SWAPDESTENITAION,
  UPDATETRIP,
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
  const payload = action.payload;
  // console.log("property name", payload);
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
    case UPDATETRIP: {
      return state.map((trip) => {
        if (trip.id === action.payload.id && payload.propertyName === "from") {
          return {
            ...trip,
            from: {
              city: payload.village + ", Bangladesh",
              airport: payload.airport,
            },
          };
        } else if (
          trip.id === action.payload.id &&
          payload.propertyName === "to"
        ) {
          return {
            ...trip,
            to: {
              city: payload.village + ", Bangladesh",
              airport: payload.airport,
            },
          };
        } else {
          return trip;
        }
      });
    }
    default:
      return state;
  }
}
