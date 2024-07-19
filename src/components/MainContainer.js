import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return;
  const mainMovies  =movies[0]
  
  const {original_title,overview,id} = mainMovies;
  return (
    <>
    <VideoTitle title={original_title} overview ={overview}/>
    <VideoBackground movieId={id}/>
    </>
  )
}

export default MainContainer