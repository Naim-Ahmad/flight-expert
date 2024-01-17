import {
  ADDNEWTRIP,
  ADDTRIP,
  ONEWAYTRIP,
  SWAPDESTENITAION,
  UPDATETRIP,
} from "./actionTypes";

export const addTrip = (value) => {
  return {
    type: ADDTRIP,
    payload: value,
  };
};

export const swapDestination = (value) => {
  return {
    type: SWAPDESTENITAION,
    payload: value,
  };
};

export const oneWayTrip = (value) => {
  return {
    type: ONEWAYTRIP,
    payload: value,
  };
};
export const addNewTrip = (value) => {
  return {
    type: ADDNEWTRIP,
    payload: value,
  };
};

export const updateTrip = (value) => {
  return {
    type: UPDATETRIP,
    payload: value,
  };
};
