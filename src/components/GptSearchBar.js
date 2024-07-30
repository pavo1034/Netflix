import React, { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import run from "../utils/GenAI";
import { API_OPTIONS } from "../utils/constants";
import {
  addGptMovies,
  addGptSuggestedMovies,
  setSearchButton,
} from "../utils/gptSlice";

const GptSearchBar = () => {
  const Langkey = useSelector((store) => store.config.lang);
  const movieName = useRef(null);
  const dispatch = useDispatch();
  const fetchMovie = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movieData.json();
    return json.results;
  };
  const searchHandler = async () => {
    const movies = movieName.current.value;
    dispatch(setSearchButton(true));
    if (movies) {
      const movieQuery =
        "make a movie recommendation system and suggest movies' name comma-separated like the example don,krish,bahubali and the movies are like... " +
        movies +
        "only return me 100 movies name in a proper string format into an  array and no other text";
      const moviesList = await run(movieQuery);
      const data = moviesList.map((item) => item.trim());
      const dataSet = data.map((item) =>
        item.replace('"', "").replace('"', "")
      );
      console.log(dataSet);
      dispatch(addGptMovies(dataSet));
      const gptSuggestedMovies = dataSet.map((movie) => fetchMovie(movie));
      const gptMovieData = await Promise.all(gptSuggestedMovies);
      dispatch(addGptSuggestedMovies(gptMovieData));
      dispatch(setSearchButton(false));
    }
  };

  return (
    <>
      <form
        className="relative mx-2 top-8 md:top-[30%] left-0 md:left-[18%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className=" w-full md:w-3/5 h-10 flex">
          <input
            type="text"
            className="w-4/5 h-full outline-none pl-4 md:pl-5 font-bold md:text-xl rounded-l-md"
            placeholder={lang[Langkey].placeHolder}
            ref={movieName}
          ></input>
          <button
            className="w-1/5 h-full text-white bg-red-600 hover:bg-red-600/75 md:font-bold rounded-r-md outline-none"
            onClick={searchHandler}
          >
            {lang[Langkey].search}
          </button>
        </div>
      </form>
    </>
  );
};

export default GptSearchBar;
