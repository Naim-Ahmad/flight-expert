import { CHECKBOX } from "./actionType";

export const ChangeCheckbox = (value) => {
  return {
    type: CHECKBOX,
    payload: value,
  };
};
