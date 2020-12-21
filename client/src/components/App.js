import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "../components/navigation/Navbar/Navbar";
import FooterBar from "../components/shared/FooterBar/FooterBar";
import LoginModal from "../components/modals/LoginModal/LoginModal";
import SignUpModal from "../components/modals/SignUpModal/SignUpModal";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {false && <LoginModal />}
      {false && <SignUpModal />}
      <main>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/error" component={Error} />
          <Route path="/profile/:id" component={Profile} />
          <PrivateRoute path="/account" component={Account} />
          <Route>
            <Redirect to="/error" />
          </Route> */}
        </Switch>
      </main>
      <FooterBar />
    </div>
  );
}

export default App;
