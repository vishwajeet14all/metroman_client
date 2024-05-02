import { Navigate } from "react-router-dom";
// import { useEffect } from "react";
// import { getUser } from "../services/api";

export default function ProtectedRoutes({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/",
}) {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }
  if (adminOnly && !admin) {
    // console.log("Not Admin");
    return <Navigate to={redirect} />;
  }
  return children;  
}
