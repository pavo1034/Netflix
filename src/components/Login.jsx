import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkValidData = () => {
    console.log(email.current.value, password.current.value);
    const message = validate(email.current.value, password.current.value);
    setError(message);
    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/104709222?s=400&u=9d1e11a10998cde67c9d55a21c9b0cf321cf43d7&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/browser");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browser");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  const HandlerSignInToggle = () => {
    setSignIn(!signIn);
  };
  return (
    <div>
      <div
        className={`absolute  z-10 sm:w-[40%] bg-black/70 left-[30%] sm:top-[10%] px-10 space-y-10 py-10 `}
      >
        <span className="text-3xl text-white font-bold my-20">
          {signIn ? "Sign In" : "Sign Up"}
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={`flex flex-col ${signIn ? "gap-7" : "gap-5"}`}
        >
          {!signIn && (
            <div className=" flex h-12 ">
              {" "}
              <input
                type="Text"
                placeholder="Name"
                ref={name}
                className="  w-[100%] rounded-sm px-5  border-2 border-red-600 bg-slate-700/40 text-white"
              />
            </div>
          )}
          <div className="flex h-12 ">
            <input
              type="email"
              ref={email}
              placeholder="Email"
              className="w-[100%] rounded-sm px-5  border-2 border-red-600 bg-slate-700/40 text-white"
            />
          </div>
          <div className=" flex h-12">
            {" "}
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className=" w-[100%] rounded-sm px-5  border-2 border-red-600 bg-slate-700/40 text-white"
            />
          </div>
          <p className="font-bold text-red-600"> {error}</p>
          <button
            className="bg-red-600 text-white  h-10 rounded-sm font-medium"
            onClick={checkValidData}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="cursor-pointer text-white"
            onClick={HandlerSignInToggle}
          >
            {signIn ? "New to netflix? Sign Up" : "already registered? Sign In"}
          </p>
        </form>
      </div>
      <div className=" bg-gradient-to-b from-black w-full h-screen absolute "></div>
      <Header />
      <div className="h-screen w-full flex ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
          alt="backimg"
          className="min-w-[100%] min-h-[120%]"
        />
      </div>
    </div>
  );
};

export default Login;
