import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";
import WatchlaterSVG from "../../assets/WatchlaterSVG";

const VideoCard = ({ data }) => {
  const handleOnClickWatchlater = (e) => {
    e.preventDefault();
  };

  return (
    <div className="video" key={data._id}>
      <div onClick={handleOnClickWatchlater} className="video-watchlater">
        <WatchlaterSVG width={20} height={20} />
      </div>
      <div className="video-img-container">
        <Link to={`/video/${data._id}`}>
          <img src={data.thumbnail} alt={data.title} />
          <div className="video-title-userlogo">
            <img src={"https://picsum.photos/40/40"} alt="user" />
            <div className="video-info">
              <h3>{data.title}</h3>
              <span>
                <p>{data.views}</p> | <p>{data.creator}</p>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
