import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
  isSignedIn: boolean;
}

export const PrivateRoute = ({
  component: Component,
  isSignedIn,
  ...rest
}: PrivateRouteProps) => {
  console.log("isSignedIn ", isSignedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? (
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
