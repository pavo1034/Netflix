import React, { Suspense, useDebugValue, useState } from "react";
import { bgpic } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import { lazy } from "react";

const GptMovieSuggetion = lazy(() => import("./GptMovieSuggetion.js"));

const GptSearchPage = () => {
  const searchButton = useSelector((store) => store.gpt.gptSearchButton);
  return (
    <div>
      <div className="w-full h-screen bg-gradient-to-b from-black absolute">
        <GptSearchBar />
      </div>
      <div className="h-screen w-full flex object-cover ">
        <img
          src={bgpic}
          alt="backimg"
          className="min-w-[100%] min-h-[120%] object-cover"
        />
      </div>
      <div className="bg-black -mt-40">
        <Suspense fallback={<div></div>}>
          {searchButton ? (
            <div className="animate-spin mx-auto  rounded-full spin w-20 h-20 relative -top-80 md:-top-28 text-white font-blod "></div>
          ) : (
            <GptMovieSuggetion />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default GptSearchPage;
