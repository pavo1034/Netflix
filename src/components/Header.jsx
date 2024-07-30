import React from "react";
import { logo } from "../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  }, []);
  return (
    <div className=" absolute ">
      <img src={logo} alt="logo" className="md:w-48 w-32 md:scale-110" />
    </div>
  );
};

export default Header;
