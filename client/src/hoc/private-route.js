import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../contexts/auth-context";
import { useModalContext } from "../contexts/modal-context";

function PrivateRoute({ component: Component, ...rest }) {
  const { userLoggedIn } = useAuthContext();
  const { setLoginModal } = useModalContext();

  React.useEffect(() => {
    if (!userLoggedIn) {
      setLoginModal(true);
    }
  }, [setLoginModal]);

  return <Route {...rest}>{userLoggedIn ? <Component /> : <Redirect to="/" />}</Route>;
}

export default PrivateRoute;
