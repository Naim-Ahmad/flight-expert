import { createContext, useReducer } from 'react'
import useCombinedReducer from '../../hooks/useCombineReducer'
import tripTypesReducer, { initialState } from './searchSection/tripTypesReducer'
export const GlobalStateContext = createContext()

export default function GlobalStateProvider({children}) {
  const [state, dispatch] = useCombinedReducer({
    tripTypes: useReducer(tripTypesReducer, initialState)
  })

  console.log('state', state)
  console.log('Dispatch', dispatch)

  const globalState = {
    state,
    dispatch
  }
  return (
    <GlobalStateContext.Provider value={globalState}>{children}</GlobalStateContext.Provider>
  )
}
