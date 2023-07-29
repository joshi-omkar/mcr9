import React, { useState } from "react";
import { useWatchlater } from "../../context/WatchlaterContext";
import { useVideoData } from "../../context/VideoDataContext";
import VideoCard from "../../components/VideoCard/VideoCard";
import './Watchlater.css'

const Watchlater = () => {
  const { watchlaterState } = useWatchlater();

  return (
    <div className="Watchlater">
      <h2>Watch Later</h2>
      <div className="Watchlater-conatiner">
        {watchlaterState?.watchlater?.map((video) => {
          return <VideoCard key={video._id} data={video} />;
        })}
      </div>
    </div>
  );
};

export default Watchlater;
