import React, { createContext, useContext, useState } from "react";
import { videos } from "../data/AllVideosData";

export const VideoDataProvider = createContext({});

const VideoContext = ({ children }) => {
  const [videoData, setVideoData] = useState(videos);
  return (
    <VideoDataProvider.Provider value={{ videoData }}>
      {children}
    </VideoDataProvider.Provider>
  );
};

export default VideoContext;

export const useVideoData = () => useContext(VideoDataProvider);
