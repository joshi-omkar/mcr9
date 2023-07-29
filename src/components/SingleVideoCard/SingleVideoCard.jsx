import React from "react";
import "./SingleVideoCard.css";
import WatchlaterSVG from "../../assets/WatchlaterSVG";
import PlaylistSVG from "../../assets/PlaylistSVG";
import AddNotesSVG from "../../assets/AddNotesSVG";

const SingleVideoCard = ({ data }) => {
  return (
    <div className="SingleVideoCard">
      <iframe width="920" height="540" src={data?.src}></iframe>
      <div className="video-info-container">
        <div className="video-info">
          <img src={"https://picsum.photos/40/40"} alt="user" />
          <h3>{data.title}</h3>
        </div>
        <div className="video-helper-buttons">
          <div>
            <WatchlaterSVG width={20} height={20} />
          </div>
          <div>
            <PlaylistSVG width={20} height={20} />
          </div>
          <div>
            <AddNotesSVG width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoCard;
