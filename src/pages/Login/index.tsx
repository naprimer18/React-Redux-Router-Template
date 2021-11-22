import React from "react";

import { useDispatch } from "react-redux";
import { loginAction } from "../../store/Reducers/autorizations/action";

export const Login = (props: any) => {
  const dispatch = useDispatch();
  const onLogin = () => {
    props.history.push("/home");
    dispatch(loginAction());
  };

  return (
    <div className="login-container">
      <div className="login-container__logo">
        <h1>Zayets app</h1>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};
