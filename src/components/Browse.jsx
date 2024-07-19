import Header from "./Header";
import { useSelector } from "react-redux";

import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  const name = useSelector((store) => store.user);
  useNowplayingMovies();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-gradient-to-b from-black ">
    
      <div className="absolute container z-20">
        <span>
          <Header />
        </span>
        <span className="flex items-center mt-4">
          <img
            src={name?.photoURL}
            alt=""
            className="w-8 h-8 mr-2 rounded-sm"
          />
          <button
            className="text-bold mr-2 text-white   rounded h-6 px-1.5 font-thin"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </span>
      </div>

      <MainContainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
