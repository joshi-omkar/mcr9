import React, { useState } from "react";
import AddPlaylistSVG from "../../../assets/AddPlaylistSVG";
import "./AddPlaylist.css";
import { usePlaylistData } from "../../../context/PlaylistContext";

const AddPlaylistModel = ({ setIsClickOnAddPlaylist }) => {
  const [name, setName] = useState("");

  const { dispatch } = usePlaylistData();

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
            setIsClickOnAddPlaylist(false)
            setName('')
          }}
        >
          Create Playlist
        </button>
      </div>
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
