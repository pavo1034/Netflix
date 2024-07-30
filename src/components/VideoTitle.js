import React from 'react'
import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-20 pl-11 aspect-video w-screen bg-gradient-to-r from-black absolute z-10'>
      <div className='md:text-3xl font-bold mb-5 text-white'>{title}</div>
      <p className='font-semibold text-gray-400 w-80 md:block hidden'>{overview}</p>
      <div className='mt-5 flex gap-2 md:pb-0 pb-10'>
        <button className='flex items-center gap-2 bg-slate-200 px-1.5 py-1 rounded hover:bg-opacity-70 text-sm md:text-xl'>
          <FaPlay/><p className='font-thin md:font-bold'>play</p>
        </button>
        <button className='flex items-center gap-2 bg-neutral-700/[0.7] px-1.5 py-1 rounded hover:bg-neutral-700/[0.9]'>
          <FaInfoCircle className='text-white'/><p className='font-thin md:font-bold text-white'>more info</p>
        </button>
      </div>
    </div>
  )
}

export default VideoTitle