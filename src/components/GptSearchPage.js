import React from "react";
import Header from "./Header";
import { bgpic } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
        <div className="w-full h-screen bg-gradient-to-b from-black absolute">
       <GptSearchBar/>
      </div>
      <div className="h-screen w-full flex object-cover ">
        <img src={bgpic} alt="backimg" className="min-w-[100%] min-h-[120%]" />
      </div>
    </div>
  );
};

export default GptSearchPage;
