import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./app.scss";

import Home from "../../pages/home/home";
import Games from "../../pages/games/games";
import Error from "../../pages/error/error";

import Navbar from "../../components/navbar/navbar";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      {/* <main className="app__main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/error" component={Error} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </main> */}
    </div>
  );
}

export default App;
