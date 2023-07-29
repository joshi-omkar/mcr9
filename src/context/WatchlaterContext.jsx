import React, { createContext, useContext, useReducer } from "react";
import { initialState, WatchLaterReducer } from "../reducers/WatchlaterReducer";

export const WatchlaterContextProvider = createContext({});

const WatchlaterContext = ({ children }) => {

    const [watchlaterState, dispatch] = useReducer(WatchLaterReducer, initialState)

  return (
    <WatchlaterContextProvider.Provider value={{watchlaterState, dispatch}}>
      {children}
    </WatchlaterContextProvider.Provider>
  );
};

export default WatchlaterContext;

export const useWatchlater = () => useContext(WatchlaterContextProvider);
