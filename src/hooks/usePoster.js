import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addDiscription } from "../utils/gptSlice";

const usePoster = (movieId) => {
  const discription = useSelector((store) => store.gpt.discription);
  const dispatch = useDispatch();
  const fetchDiscription = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const discription = await data.json();
    dispatch(addDiscription(discription));
  };

  useEffect(() => {
    fetchDiscription();
  }, []);
};

export default usePoster;
