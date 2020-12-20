import React from "react";
import { Route, Redirect } from "react-router-dom";

function withPrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest}>{userLoggedIn ? <Component /> : <Redirect to="/" />}</Route>;
}

export default withPrivateRoute;
