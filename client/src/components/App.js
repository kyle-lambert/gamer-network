import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.scss";

import AlertList from "../components/shared/AlertsList/AlertsList";

import DashboardPage from "../pages/DashboardPage/DashboardPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import PrivateRoute from "../hoc/PrivateRoute";

import { loadUser } from "../store/actions/authActions";
import { logoutUser } from "../store/actions/authActions";
import setAuthorisationToken from "../utils/setAuthorisationToken";

function App(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthorisationToken(localStorage.token);
      dispatch(loadUser(history));
    }

    const handleStorageChange = () => {
      if (!localStorage.token) {
        dispatch(logoutUser());
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch, history]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/" component={DashboardPage} />
        <Route exact path="/error" component={ErrorPage} />
        <Route>
          <Redirect to="/error" />
        </Route>
      </Switch>
      <AlertList />
      {/* <Navbar />
      <main>
        <PageLayout>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/error" component={ErrorPage} />
            <PrivateRoute path="/account" component={AccountPage} />
            <PrivateRoute path="/profile/:id" component={ProfilePage} />
            <PrivateRoute exact path="/posts" component={PostFeedPage} />
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </PageLayout>
        <AlertsList />
        {currentModal === "LOGIN_MODAL" && <LoginModal />}
        {currentModal === "SIGN_UP_MODAL" && <SignUpModal />}
      </main>
      <FooterBar /> */}
    </div>
  );
}

export default App;
