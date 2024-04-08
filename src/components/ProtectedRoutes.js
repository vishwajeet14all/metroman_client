import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../services/api";

export default function ProtectedRoutes({ children }) {
  //get user
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    getUser();
  }, [getUser]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
