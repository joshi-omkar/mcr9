import React from "react";
import "./PlaylistCard.css";
import { usePlaylistData } from "../../context/PlaylistContext";

const PlaylistCard = ({ data }) => {
    const {dispatch} = usePlaylistData()
  return (
    <div className="PlaylistCard">
      <div
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "remove", payload: data?.title });
        }}
        className="video-watchlater"
      >
        X
      </div>
      <img src={"https://picsum.photos/300/174"} alt={data?.title} />
      <h3>{data?.title}</h3>
    </div>
  );
};

export default PlaylistCard;
