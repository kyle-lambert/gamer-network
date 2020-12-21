import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest}>{true ? <Component /> : <Redirect to="/" />}</Route>;
}

export default PrivateRoute;
