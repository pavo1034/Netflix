import React, { useEffect } from 'react'
import { API_OPTIONS} from "../utils/constants";
import { useDispatch} from "react-redux";
import { addDiscription } from '../utils/gptSlice';

const usePoster = (movieId) => {
    const dispatch =useDispatch()
    const fetchDiscription = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US",API_OPTIONS);
        const discription = await data.json();
        dispatch(addDiscription(discription));
      }
    
      useEffect(()=>{
        fetchDiscription();
      },[])
}

export default usePoster