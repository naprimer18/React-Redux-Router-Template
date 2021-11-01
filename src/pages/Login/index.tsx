import React from "react";

import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    sessionStorage.setItem("autorization", JSON.stringify(true));
    dispatch({ type: "login" });
  };
  return (
    <div className="login-container">
      <div className="login-container-logo">
        <h1>Zayets app</h1>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};
