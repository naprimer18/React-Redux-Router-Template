import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RootState } from "../store";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const autorization = useSelector(
    (store: RootState) => store.autorization.isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={(props) =>
        autorization ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
