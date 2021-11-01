import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles/index.scss";

export const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    sessionStorage.clear();
    dispatch({ type: "logOut" });
  };

  return (
    <nav className="navbar-container">
      <section className="navbar-container-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </section>
      <section className="navbar-container-logout">
        <button onClick={onLogOut}>Logout</button>
      </section>
    </nav>
  );
};
