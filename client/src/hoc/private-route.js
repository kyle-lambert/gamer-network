import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../contexts/auth-context";

function PrivateRoute({ component: Component, ...rest }) {
  const { userLoggedIn } = useAuthContext();

  return (
    <Route {...rest}>
      {userLoggedIn ? <Component /> : <Redirect to="/" />}
    </Route>
  );
}

export default PrivateRoute;
