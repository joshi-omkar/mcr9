import React, { createContext, useContext, useReducer } from "react";
import { PlaylistReducer, initialState } from "../reducers/PlaylistReducer";

export const PlaylistContextProvider = createContext({});

const PlaylistContext = ({ children }) => {
  const [playlistState, dispatch] = useReducer(PlaylistReducer, initialState);

  return (
    <PlaylistContextProvider.Provider value={{ playlistState, dispatch }}>
      {children}
    </PlaylistContextProvider.Provider>
  );
};

export default PlaylistContext;

export const usePlaylistData = () => useContext(PlaylistContextProvider);
