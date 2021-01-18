import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";

import Navbar from "../components/navigation/Navbar/Navbar";
import FooterBar from "../components/shared/FooterBar/FooterBar";
import LoginModal from "../components/modals/LoginModal/LoginModal";
import SignUpModal from "../components/modals/SignUpModal/SignUpModal";
import Alerts from "../components/shared/Alerts/Alerts";

import LandingPage from "../pages/LandingPage/LandingPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import PrivateRoute from "../hoc/PrivateRoute";

function App(props) {
  const { currentModal } = useSelector((state) => state.modal);
  return (
    <div className="App">
      <Navbar />
      {currentModal === "LOGIN_MODAL" && <LoginModal />}
      {currentModal === "SIGN_UP_MODAL" && <SignUpModal />}
      <Alerts />
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/error" component={ErrorPage} />
          <PrivateRoute path="/account" component={AccountPage} />
          <PrivateRoute path="/profile/:id" component={ProfilePage} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </main>
      <FooterBar />
    </div>
  );
}

export default App;
