import React, { useState } from "react";
import "./SingleVideoCard.css";
import WatchlaterSVG from "../../assets/WatchlaterSVG";
import PlaylistSVG from "../../assets/PlaylistSVG";
import AddNotesSVG from "../../assets/AddNotesSVG";
import AddedToWatchlater from "../../assets/AddedToWatchlater";
import { useWatchlater } from "../../context/WatchlaterContext";
import { AddPlaylistModel } from "../PlaylistCard/AddPlaylist/AddPlaylist";
import { usePlaylistData } from "../../context/PlaylistContext";

const SingleVideoCard = ({ data }) => {
  const { dispatch, watchlaterState } = useWatchlater();
  const { dispatch: dispatchPlaylist } = usePlaylistData();
  const [clickedOnPlaylist, setClickedOnPlaylist] = useState(false);

  const addedToWatchLater = watchlaterState.watchlater.find(
    (item) => item._id === data._id
  );

  const handleOnClickAddWatchlater = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: data });
  };

  const handleOnClickRemoveWatchlater = (e) => {
    e.preventDefault();
    dispatch({ type: "remove", payload: data });
  };

  const onClickPlaylistName = (title) => {
    dispatchPlaylist({ type: "add-video", payload: { title: title, data } });
  };

  return (
    <div className="SingleVideoCard">
      <iframe width="920" height="540" src={data?.src}></iframe>
      <div className="video-info-container">
        <div className="video-info-single-page">
          <img src={"https://picsum.photos/40/40"} alt="user" />
          <h3>{data.title}</h3>
        </div>
        <div className="video-helper-buttons">
          <div>
            {!addedToWatchLater && (
              <div onClick={handleOnClickAddWatchlater}>
                <WatchlaterSVG width={20} height={20} />
              </div>
            )}
            {addedToWatchLater && (
              <div onClick={handleOnClickRemoveWatchlater}>
                <AddedToWatchlater width={20} height={20} />
              </div>
            )}
          </div>
          <div onClick={() => setClickedOnPlaylist(!clickedOnPlaylist)}>
            <PlaylistSVG width={20} height={20} />
          </div>
          <div>
            <AddNotesSVG width={20} height={20} />
          </div>
        </div>
      </div>
      {clickedOnPlaylist && (
        <AddPlaylistModel
          setIsClickOnAddPlaylist={setClickedOnPlaylist}
          onSinglePage={true}
          onClickPlaylistName={onClickPlaylistName}
        />
      )}
    </div>
  );
};

export default SingleVideoCard;
