import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrialer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const trailers = json?.results.filter((item) => item?.type === "Trailer");
    const trailer = trailers?.length ? trailers[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
 
  };
  useEffect(() => {
    getMovieTrailer();
  },[]);
};

export default useMovieTrialer;
