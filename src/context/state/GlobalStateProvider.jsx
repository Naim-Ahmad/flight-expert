import { createContext, useReducer } from 'react'
import useCombinedReducer from '../../hooks/useCombineReducer'
import multiTripReducer, { multiTrips } from './multiStrip/multiTripReducer'
import dropDownReducer, { menuList } from './showDropDown/dropDownReducer'
import tripTypesReducer, { initialState } from './tripTypes/tripTypesReducer'
export const GlobalStateContext = createContext()

export default function GlobalStateProvider({children}) {
  const [state, dispatch] = useCombinedReducer({
    tripTypes: useReducer(tripTypesReducer, initialState),
    multiTrips: useReducer(multiTripReducer, multiTrips),
    showMenuList: useReducer(dropDownReducer, menuList)
  })

  // console.log('global state', state.showMenuList)
  // console.log('Dispatch', dispatch())

  const globalState = {
    state,
    dispatch
  }
  return (
    <GlobalStateContext.Provider value={globalState}>{children}</GlobalStateContext.Provider>
  )
}
