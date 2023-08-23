import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    };
    useEffect(() => {
        getVideos();
    }, []);
    return (
        <div className=" flex flex-row flex-wrap justify-evenly">
            {videos?.map((info) => {
                return (
                    <Link to={"watch?v=" + info.id} key={info.id}>
                        <VideoCard info={info} />
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoContainer;
