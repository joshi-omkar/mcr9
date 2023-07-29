import React, { useState } from "react";
import AddPlaylistSVG from "../../../assets/AddPlaylistSVG";
import "./AddPlaylist.css";
import { usePlaylistData } from "../../../context/PlaylistContext";

export const AddPlaylistModel = ({
  setIsClickOnAddPlaylist,
  onSinglePage,
  onClickPlaylistName,
}) => {
  const [name, setName] = useState("");

  const { playlistState, dispatch } = usePlaylistData();

  return (
    <div className="AddPlaylistModel">
      <span>
        <h2>Create New Playlist</h2>
        <div onClick={() => setIsClickOnAddPlaylist(false)}>X</div>
      </span>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Playlist Name"
          value={name}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "add", payload: name });
            !onSinglePage && setIsClickOnAddPlaylist(false);
            setName("");
          }}
        >
          Create Playlist
        </button>
      </div>
      {onSinglePage && (
        <div className="playlist-list">
          <ul>
            {playlistState.playlist.map((playlist, key) => (
              <li key={key}>
                <div onClick={() => onClickPlaylistName(playlist.title)}>
                  <h2>{playlist.title}</h2>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "remove", payload: playlist?.title });
                    }}
                  >
                    X
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AddPlaylist = () => {
  const [isClickOnAddPlaylist, setIsClickOnAddPlaylist] = useState(false);

  return (
    <div className="AddPlaylist">
      <div onClick={() => setIsClickOnAddPlaylist(true)}>
        <AddPlaylistSVG width={40} height={40} />
      </div>
      {isClickOnAddPlaylist && (
        <AddPlaylistModel setIsClickOnAddPlaylist={setIsClickOnAddPlaylist} />
      )}
    </div>
  );
};

export default AddPlaylist;
