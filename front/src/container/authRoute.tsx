import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";

export const AuthRoute = ({ children }: any) => {
  const { state } = useContext(AuthContext);

  if (state.token && state.isLogged) {
    return <Navigate to="/balance" />;
  }

  return <>{children}</>;
};
