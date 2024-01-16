import { ADDTRIP, SWAPDESTENITAION } from "./actionTypes";

export const ChangeCheckbox = (value) => {
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
