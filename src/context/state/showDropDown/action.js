import { SHOWMENULIST } from "./actionType";

export const toggleDropDown = (value) => {
  return {
    type: SHOWMENULIST,
    payload: value,
  };
};
