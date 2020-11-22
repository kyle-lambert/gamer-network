import React from "react";
import "./app.scss";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../pages/home/home";
import Games from "../../pages/games/games";
import Account from "../../pages/account/account";
import Error from "../../pages/error/error";
import Profile from "../../pages/profile/profile";

import Navbar from "../../components/navbar/navbar";
import LoginModal from "../../components/login-modal/login-modal";
import SignupModal from "../../components/signup-modal/signup-modal";
import PrivateRoute from "../../hoc/private-route";

import { useModalContext } from "../../contexts/modal-context";

function App(props) {
  const { state } = useModalContext();

  return (
    <div className="app">
      <Navbar />
      {state.loginModalOpen && <LoginModal />}
      {state.signupModalOpen && <SignupModal />}
      <main className="app__main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/error" component={Error} />
          <Route path="/profile/:id" component={Profile} />
          <PrivateRoute path="/account" component={Account} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
