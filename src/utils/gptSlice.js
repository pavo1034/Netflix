import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSuggestedMovies:null,
        gptMovies:null,
        discription:null,
    },
    reducers:{
       toggleGptSearch:(state)=>{
        state.showGptSearch=!state.showGptSearch
       },
       addGptSuggestedMovies:(state,action)=>{
        state.gptSuggestedMovies=action.payload
       },
       addGptMovies:(state,action)=>{
        state.gptMovies = action.payload;
       },
       addDiscription:(state,action)=>{
        state.discription =action.payload;
       }
    }
})

export const {toggleGptSearch,addGptSuggestedMovies,addGptMovies,addDiscription}= gptSlice.actions;
export default gptSlice.reducer;