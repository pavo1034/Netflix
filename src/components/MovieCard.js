import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 relative h-44 flex-none mr-4 inner mb-36'>
      <img src={IMG_CDN + posterPath} alt="movies" className='w-full h-[100%] rounded'/>
    </div>
  )
}

export default MovieCard