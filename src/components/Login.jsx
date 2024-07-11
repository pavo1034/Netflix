import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn ,setSignIn] =useState(true)
  const HandlerSignInToggle =()=>{
     setSignIn(!signIn)
  }
  return (
    <div>
      <div className={`absolute z-10 w-[40%] bg-black/70 left-[30%]  top-[10%] px-10 space-y-10 py-10 `}>
      <span className="text-3xl text-white font-bold my-20">{signIn?"Sign In":"Sign Up"}</span>
        <form className={`flex flex-col ${signIn?"gap-7":"gap-5"}`}>
          {
          !signIn && <div className=" flex h-12 "> <input type="Text" placeholder="Name"  className="  w-[100%] rounded-sm px-5  border-2 border-red-600 bg-slate-700/40"/></div> 
          }
         <div className="flex h-12 "><input type="email" placeholder="Email"  className="w-[100%] rounded-sm px-5  border-2 border-red-600 bg-slate-700/40"/></div> 
        <div className=" flex h-12">  <input type="password" placeholder="Password"   className=" w-[100%] rounded-sm px-5  border-2 border-red-600 bg-slate-700/40"/></div> 
          <button className="bg-red-600 text-white  h-10 rounded-sm font-medium">{signIn?"Sign In":"Sign Up"}</button>
          <p className="cursor-pointer text-white" onClick={HandlerSignInToggle}>{signIn?"New to netflix? Sign Up":"already registered? Sign In"}</p>
        </form>
      </div>
      <div className=" bg-gradient-to-b from-black w-full h-screen absolute "></div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
          alt="backimg"
        />
      </div>
    </div>
  );
};

export default Login;
