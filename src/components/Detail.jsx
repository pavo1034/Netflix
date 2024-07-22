import {IMG_CDN, logo } from "../utils/constants";
import {useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import usePoster from "../hooks/usePoster";
import VideoTrailer from "./ViedoTrailer";
import { FaBackward} from "react-icons/fa";



const Detail = () => {
  const name = useSelector((store) => store.user);
  const movieDiscription =useSelector(store=>store.gpt.discription)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };


  const movieId =useParams();
  usePoster(movieId.movieId);


  return movieDiscription===null?<div className=" w-36 h-36 spin  rounded-full relative mx-auto top-36 animate-spin"></div>:(
    <div className="bg-black">
      <div className="flex justify-between">
        <div className="">
          <img src={logo} alt="logo" className="w-48 scale-110" />
        </div>

        <span className="flex gap-2 items-center">
          <Link to="/browse">
            <button className="text-bold  hover:text-white   rounded h-6 px-1.5 text-neutral-300 ">
              <FaBackward className="text-3xl pt-1"/>
            </button>
          </Link>
          <img src={name?.photoURL} alt="" className="w-8 h-8 rounded-sm" />
          <button
            className="text-bold  hover:text-white   rounded h-6 px-1.5 text-neutral-300 "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </span>
      </div>

        <div className="w-4/5 py-6 videotrailer mx-auto relative bg-slate-400  rounded ">
        <div className="w-full absolute z-10 mx-auto h-[357px]"> </div>
        <VideoTrailer movieId={movieId.movieId}/>
      
        
        </div>
      <div className="w-full h-screen bg-white object-cover">
      <img src={IMG_CDN + movieDiscription?.poster_path} alt="movies" className='w-full h-[100%]'/>
      </div>
    
      <ScrollToTop/>
    </div>
  );
};

export default Detail;
