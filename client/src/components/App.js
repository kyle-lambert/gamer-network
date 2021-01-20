import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";

import Navbar from "../components/navigation/Navbar/Navbar";
import FooterBar from "../components/shared/FooterBar/FooterBar";
import LoginModal from "../components/modals/LoginModal/LoginModal";
import SignUpModal from "../components/modals/SignUpModal/SignUpModal";
import Alerts from "../components/shared/Alerts/Alerts";
import PageLayout from "../components/shared/PageLayout/PageLayout";

import LandingPage from "../pages/LandingPage/LandingPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import PrivateRoute from "../hoc/PrivateRoute";

import { loadUserAction } from "../store/actions/authActions";
import { logoutUserAction } from "../store/actions/authActions";
import setAuthorisationToken from "../utils/setAuthorisationToken";

function App(props) {
  const { currentModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthorisationToken(localStorage.token);
      dispatch(loadUserAction());
    }

    const handleStorageChange = () => {
      if (!localStorage.token) {
        dispatch(logoutUserAction());
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <PageLayout>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/error" component={ErrorPage} />
            <PrivateRoute path="/account" component={AccountPage} />
            <PrivateRoute path="/profile/:id" component={ProfilePage} />
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </PageLayout>
        <Alerts />
        {currentModal === "LOGIN_MODAL" && <LoginModal />}
        {currentModal === "SIGN_UP_MODAL" && <SignUpModal />}
      </main>
      <FooterBar />
    </div>
  );
}

export default App;
