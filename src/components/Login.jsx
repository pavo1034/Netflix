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
import { bgpic } from "../utils/constants";
import { AVTAR_URL } from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkValidData = () => {
   
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
            photoURL:AVTAR_URL
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
        className={`absolute  z-10 w-full md:w-[40%] bg-black/50 md:bg-black/70 left-0 md:left-[30%] top-[15%] md:top-[10%] px-10 md:px-10 space-y-5 md:space-y-10 py-10 md:py-10 `}
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
      <div className="h-screen w-full flex object-cover">
        <img
          src={bgpic}
          alt="backimg"
          className="min-w-[100%] min-h-[120%] object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
