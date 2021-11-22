import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => {
  return (
    <>
      <Router>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/home" />
      </Router>
    </>
  );
};
