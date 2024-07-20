import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const nowPlayingMovies = useSelector(store=>store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store=>store.movies?.popularMovies);
  const topRatedMovies = useSelector(store=>store.movies?.topRatedMovies);
  const upComingMovies = useSelector(store=>store.movies?.upComingMovies);
  return (
    <div className='px-4 bg-black'>
       <MovieList title={"Now playing Movies"} movies={nowPlayingMovies}/>
       <MovieList title={"Top Rated"} movies={topRatedMovies}/>
       <MovieList title={"Popular"} movies={popularMovies}/>
       <MovieList title={"UpComing"} movies={upComingMovies}/>
    </div>
  )
}

export default SecondryContainer