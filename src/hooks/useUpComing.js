import { API_OPTIONS } from "../utils/constants";
import {addUpComingMovies} from "../utils/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUpComingMovies = () => {
  const UpComingMovies = useSelector((store) => store.movies.upComingMovies);
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !UpComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
