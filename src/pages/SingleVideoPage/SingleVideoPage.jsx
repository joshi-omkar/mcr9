import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideoData } from "../../context/VideoDataContext";
import SingleVideoCard from "../../components/SingleVideoCard/SingleVideoCard";
import MoreVideosSidebar from "../../components/MoreVideosSidebar/MoreVideosSidebar";
import "./SingleVideoPage.css";
import NotesCard from "../../components/NotesCard/NotesCard";

const SingleVideoPage = () => {
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  const { videoData } = useVideoData();

  const getVideo = () => {
    setVideo(videoData.find((video) => video._id === Number(id)));
  };

  useEffect(() => {
    getVideo();
  }, [id]);

  console.log(video);

  return (
    <div className="SingleVideoPage">
      <div className="single-video-notes">
        <SingleVideoCard data={video} />
        <div className="divider"></div>
        <NotesCard/>
      </div>
      <MoreVideosSidebar id={video?._id} />
    </div>
  );
};

export default SingleVideoPage;
