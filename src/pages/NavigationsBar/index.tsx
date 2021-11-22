import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../store/Reducers/autorizations/action";
import "./styles/index.scss";

export const NavBar = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutAction());
  };

  return (
    <nav className="navbar-container">
      <section className="navbar-container__links">
        <Link to="/home">Home</Link>
      </section>
      <section className="navbar-container__logout">
        <button onClick={onLogOut}>Logout</button>
      </section>
    </nav>
  );
};
