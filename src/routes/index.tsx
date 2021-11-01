import React from "react";
import { Home } from "../pages/Home";

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Routes = () => {
  const autorization = useSelector(
    (store: RootState) => store.autorization.isAuthenticated
  );

  return (
    <>
      <Router>
        <PrivateRoute path="/home" component={Home} isSignedIn={autorization} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/home" />
      </Router>
    </>
  );
};
