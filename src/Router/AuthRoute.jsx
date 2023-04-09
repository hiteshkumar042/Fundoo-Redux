import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const AuthRoute = ({ children }) => {
  
  if (localStorage.getItem("token") === undefined || localStorage.getItem("token") === null) {
    console.log("K")
    return children;
}
return <Navigate to="/dashboard" />;
};

export default AuthRoute;