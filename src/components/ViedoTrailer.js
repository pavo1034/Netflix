import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import useMovieTrialer from "../hooks/useMovieTrialer";

const VideoTrailer = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrialer(movieId);
  return (
    <div className="w-4/5 mx-auto h-[410px] videotrailer ">

    <iframe
      className="w-full h-full mx-auto "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

    </div>
  );
};

export default VideoTrailer;
