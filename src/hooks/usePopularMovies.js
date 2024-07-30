import { API_OPTIONS } from "../utils/constants";
import {addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const PopularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
