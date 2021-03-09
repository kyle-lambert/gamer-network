import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Dashboard.scss";

import NewsFeed from "../NewsFeed/NewsFeed";
import Settings from "../Settings/Settings";

import Sidebar from "../../components/navigation/Sidebar/Sidebar";
import Topbar from "../../components/navigation/Topbar/Topbar";

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <Topbar />
      <Sidebar />
      <main className="Dashboard__main">
        <Switch>
          <Route exact path="/" component={NewsFeed} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </main>
    </div>
  );
}

export default Dashboard;
