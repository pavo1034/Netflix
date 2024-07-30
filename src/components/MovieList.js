import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="md:-mt-40 relative z-10 bg-gradient-to-r from-black">
      <div className="font-bold text-white mb-1">{title}</div>
      { movies && <div className="flex overflow-x-scroll outer">
        {
          movies.map((movie)=><MovieCard posterPath={movie.poster_path} anotherPoster={movie.backdrop_path} id={movie.id}/>)
        }
      </div>}
    </div>
  );
};

export default MovieList;
