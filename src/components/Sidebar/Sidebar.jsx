import React from "react";
import HomeSVG from "../../assets/HomeSVG";
import ExploreSVG from "../../assets/ExploreSVG";
import PlaylistSVG from "../../assets/PlaylistSVG";
import WatchlaterSVG from "../../assets/WatchlaterSVG";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="">
        <Link to={"/"}>
          <HomeSVG width={25} height={25} />
          <p>Home</p>
        </Link>
      </span>
      <span className="">
        <Link to={"/"}>
          <ExploreSVG width={25} height={25} />
          <p>Explore</p>
        </Link>
      </span>
      <span className="">
        <Link to={"/"}>
          <PlaylistSVG width={25} height={25} />
          <p>Playlist</p>
        </Link>
      </span>
      <span className="">
        <Link to={"/"}>
          <WatchlaterSVG width={25} height={25} />
          <p>Watchlater</p>
        </Link>
      </span>
    </div>
  );
};

export default Sidebar;
