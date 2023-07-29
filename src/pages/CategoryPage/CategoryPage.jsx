import React, { useEffect, useState } from "react";
import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import { useVideoData } from "../../context/VideoDataContext";
import VideoCard from "../../components/VideoCard/VideoCard";

const CategoryPage = () => {
  const { category } = useParams();
  const [categoricalVideos, setCategoricalVideos] = useState([]);

  const { videoData } = useVideoData();

  const getCategoryVideos = () => {
    setCategoricalVideos(
      videoData.filter(
        (video) => video.category.replace(/\s+/g, "").toLowerCase() === category
      )
    );
  };

  useEffect(() => {
    getCategoryVideos();
  }, []);

  console.log(categoricalVideos);

  return (
    <div className="CategoryPage">
      <h1>{categoricalVideos[0]?.category}</h1>
      <div className="video-container">
        {categoricalVideos.map((video) => {
          return <VideoCard data={video} key={video._id} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
