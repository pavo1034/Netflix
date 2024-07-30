import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useNowplayingMovies = () => {
  const NowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addMovies(json.results));
  };
  useEffect(() => {
   !NowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowplayingMovies;
