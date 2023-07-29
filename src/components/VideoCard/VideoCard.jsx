import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";
import WatchlaterSVG from "../../assets/WatchlaterSVG";
import { useWatchlater } from "../../context/WatchlaterContext";
import AddedToWatchlater from "../../assets/AddedToWatchlater";

const VideoCard = ({ data }) => {
  const { dispatch, watchlaterState } = useWatchlater();
  const [clickedOnwatchlater, setClickedonWatchlater] = useState(false);

  const addedToWatchLater = watchlaterState.watchlater.find(item => item._id === data._id)

  const handleOnClickAddWatchlater = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: data });
    setClickedonWatchlater(true);
  };

  const handleOnClickRemoveWatchlater = (e) => {
    e.preventDefault();
    dispatch({ type: "remove", payload: data });
    setClickedonWatchlater(false);
  };

  return (
    <div className="video" key={data._id}>
      {!addedToWatchLater && (
        <div onClick={handleOnClickAddWatchlater} className="video-watchlater">
          <WatchlaterSVG width={20} height={20} />
        </div>
      )}
      {addedToWatchLater && (
        <div onClick={handleOnClickRemoveWatchlater} className="video-watchlater">
          <AddedToWatchlater width={20} height={20} />
        </div>
      )}
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
