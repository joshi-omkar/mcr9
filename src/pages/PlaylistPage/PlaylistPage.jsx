import React from "react";
import "./PlaylistPage.css";
import AddPlaylist from "../../components/PlaylistCard/AddPlaylist/AddPlaylist";
import { usePlaylistData } from "../../context/PlaylistContext";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";

const PlaylistPage = () => {
  const { playlistState, dispatch } = usePlaylistData();

  console.log(playlistState);

  return (
    <div className="PlaylistPage">
      <div>
        <AddPlaylist />
      </div>
      <div className="playlist-conatiner">
        {playlistState.playlist.map((playlist, key) => {
          return <PlaylistCard data={playlist} key={key} />;
        })}
      </div>
    </div>
  );
};

export default PlaylistPage;
