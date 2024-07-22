import React, { Suspense } from "react";
import Header from "./Header";
import { bgpic } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
// import GptMovieSuggetion from "./GptMovieSuggetion";
import { useSelector } from "react-redux";
import { lazy } from 'react';

const GptMovieSuggetion = lazy(() => import('./GptMovieSuggetion.js'));

const GptSearchPage = () => {
  const gptMovieList = useSelector((store) => store.gpt.gptSuggestedMovies);
  return (
    <div>
        <div className="w-full h-screen bg-gradient-to-b from-black absolute">
       <GptSearchBar/>
      </div>
      <div className="h-screen w-full flex object-cover ">
        <img src={bgpic} alt="backimg" className="min-w-[100%] min-h-[120%]" />
      </div>
      <div className="bg-black">
     {/* {gptMovieList===null?<></> :<GptMovieSuggetion/>} */}
      <Suspense fallback={<div className="animate-spin mx-auto  rounded-full spin w-20 h-20 relative -top-60 text-white font-blod "></div>}>
       {gptMovieList===null?<></> :<GptMovieSuggetion/>}
      </Suspense>
     </div>
    </div>
  );
};

export default GptSearchPage;
