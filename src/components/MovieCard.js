import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom';

const MovieCard = ({posterPath,anotherPoster,id}) => {
  if(!posterPath && !anotherPoster) return;
  return (
    <div className='w-36 relative h-44 flex-none mr-4 inner md:mb-36 mb-5'>
      <Link to={"/details/"+id}>
      <img src={IMG_CDN + `${posterPath?posterPath:anotherPoster}`} alt="movies" className='w-full h-[100%] rounded'/>
      </Link>
      
    </div>
  )
}

export default MovieCard