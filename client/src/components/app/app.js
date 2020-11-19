import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../pages/home/home";
import Games from "../../pages/games/games";
import Error from "../../pages/error/error";

import Navbar from "../../components/navbar/navbar";
import LoginModal from "../../components/login-modal/login-modal";
import SignupModal from "../../components/signup-modal/signup-modal";

function App(props) {
  return (
    <div>
      <Navbar />
      {/* <LoginModal /> */}
      <SignupModal />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/error" component={Error} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
