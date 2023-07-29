import React, { useEffect, useState } from "react";
import { useVideoData } from "../../context/VideoDataContext";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  const { videoData } = useVideoData();
  const [searchText, setSearchText] = useState("");
  const filteredData =
    searchText.length === 0
      ? videoData
      : videoData.filter((item) => item.title.includes(searchText));

  return (
    <div className="ExplorePage">
      <div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="search-input"
          placeholder="Search..."
        />
      </div>
      <div className="all-videos">
        {filteredData.map((video) => {
          return <VideoCard data={video} key={video._id} />;
        })}
      </div>
    </div>
  );
};

export default ExplorePage;
