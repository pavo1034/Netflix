import {useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const loggedIn = useSelector(store=>store.user);
  if(!loggedIn) return <Navigate to="/" replace/>
  return <Outlet/>;
};

export default ProtectedRoute;
