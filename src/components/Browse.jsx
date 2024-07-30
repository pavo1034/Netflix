import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComing";
import { toggleGptSearch } from "../utils/gptSlice";
import GptSearchPage from "./GptSearchPage";
import { SUPPORTED_LANGUAGE } from "../utils/languageConstant";
import { changeLang } from "../utils/configSlice";

const Browse = () => {
  const name = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);
  const dispatch = useDispatch();
  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="bg-gradient-to-b from-black ">
      <div className="absolute container z-20 flex justify-between">
        <span>
          <Header />
        </span>
        <span className="flex items-center  mt-3 mr-2 gap-2 md:gap-4 md:bg-black h-14  pb-8">
          {gpt.showGptSearch && (
            <select
              className="outline-none bg-slate-500/[0.4] hover:text-white text-neutral-300 pl-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="option"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="hover:text-white text-neutral-300"
            onClick={handleGptSearch}
          >
            {gpt.showGptSearch ? "Home" : "GptSearch"}
          </button>
          <span className="flex gap-2 items-center  ">
            <img
              src={name?.photoURL}
              alt=""
              className="w-8 h-8 rounded-sm md:block hidden"
            />
            <button
              className="text-bold  hover:text-white   rounded h-6 px-1.5 text-neutral-300 "
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </span>
        </span>
      </div>

      <div className="md:pt-0 pt-14">
        {gpt.showGptSearch ? (
          <GptSearchPage />
        ) : (
          <>
            <MainContainer />
            <SecondryContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
