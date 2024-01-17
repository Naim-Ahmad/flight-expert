import { SHOWMENULIST } from "./actionType";

export const menuList = {
  from: false,
  to: false,
  return: false,
  departure: false,
  travelers: false,
};

export default function dropDownReducer(state, action) {
  const payload = action.payload;
  switch (action.type) {
    case SHOWMENULIST:
      // console.log(payload.target);
      {
        switch (payload.target) {
          case "from": {
            return { ...menuList, from: !state.from };
          }
          case "to": {
            // console.log("prev state", state);
            return { ...menuList, to: !state.to };
          }

          case "return": {
            return { ...menuList, return: !state.return };
          }
          case "departure": {
            return { ...menuList, departure: !state.departure };
          }
          case "travelers": {
            return { ...menuList, travelers: !state.travelers };
          }
        }
      }
      break;
    default: {
      return state;
    }
  }
}
