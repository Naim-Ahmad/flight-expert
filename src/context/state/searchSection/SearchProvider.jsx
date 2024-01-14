import { createContext, useReducer } from "react"
import searchReducer, { initialState } from "./searchReducer"

export const SearchContext = createContext()

export default function SearchProvider({children}) {

  const [state, dispatch] = useReducer(searchReducer, initialState)

  const searchStateData = {
    state,
    dispatch
  }

  return (
    <SearchContext.Provider value={searchStateData}>{children}</SearchContext.Provider>
  )
}