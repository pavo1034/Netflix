import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetion = () => {
  const gptMovieList = useSelector((store) => store.gpt.gptSuggestedMovies);
  const MoviesData = useSelector((store) => store.gpt.gptMovies);
  const msg = MoviesData?.join(",");
  if (gptMovieList === null || gptMovieList.type === "[object Object]") return;
  if (!gptMovieList[0].length) return <div className="text-white px-10 py-5 rounded bg">{msg}</div>;
  return (
    <div className="-mt-96 md:-mt-0">
      {gptMovieList.map((movie, index) => (
        <div key={MoviesData[index]} className="ml-5">
          <MovieList title={MoviesData[index]} movies={movie} />
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggetion;
