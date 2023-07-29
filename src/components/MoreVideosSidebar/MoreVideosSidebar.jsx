import React, { useEffect, useState } from "react";
import { useVideoData } from "../../context/VideoDataContext";
import MoreVideoCard from "./MoreVideoCard";
import "./MoreVideosSidebar.css";

const MoreVideosSidebar = ({ id }) => {
  const { videoData } = useVideoData();
  const [moreVideoData, setMoreVideoData] = useState([]);

  const getMoreVideos = () => {
    setMoreVideoData(videoData.filter((video) => video._id !== id));
  };

  useEffect(() => {
    getMoreVideos()
  }, [])

  return (
    <div className="MoreVideosSidebar">
      <h3>More Videos</h3>
      <div className="more-video-container">
        {moreVideoData?.map((video) => {
          return <MoreVideoCard data={video} key={video._id} />;
        })}
      </div>
    </div>
  );
};

export default MoreVideosSidebar;
