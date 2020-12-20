import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "../components/navigation/Navbar/Navbar";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {/* {state.loginModalOpen && <LoginModal />}
      {state.signupModalOpen && <SignupModal />} */}
      <main className="App__main">
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
