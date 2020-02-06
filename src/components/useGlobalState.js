import { createContext } from "react"
import React, { useReducer, useContext } from "react"

const GlobalStateContext = createContext()

const SET_DOGGIE = "SET_DOGGIE"

const initialState = {
  doggie: {
    activeCard: null,
  },
}

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case SET_DOGGIE:
      return {
        ...state,
        doggie: {
          ...action.payload,
        },
      }

    default:
      return state
  }
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState)

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  )
}

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext)

  const setDoggie = ({ activeCard }) => {
    dispatch({ type: SET_DOGGIE, payload: { activeCard } })
  }

  return {
    setDoggie,
    doggie: { ...state.doggie },
  }
}

export default useGlobalState
