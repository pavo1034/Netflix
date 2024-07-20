import React from 'react'
import { lang } from '../utils/languageConstant'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
  const Langkey =useSelector(store=>store.config.lang)  
  
  return (
    <form className="relative top-[30%] left-[18%]" onSubmit={(e)=>e.preventDefault()}>
    <div className="w-3/5 h-10 flex">
        <input type="text" className="w-4/5 h-full outline-none pl-5 font-bold text-xl rounded-l-md" placeholder={lang[Langkey].placeHolder}></input>
        <button className="w-1/5 h-full text-white bg-red-600 font-bold rounded-r-md outline-none">{lang[Langkey].search}</button>
    </div>
   </form>
  )
}

export default GptSearchBar