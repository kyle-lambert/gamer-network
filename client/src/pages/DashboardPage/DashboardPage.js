import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./DashboardPage.scss";

import Navbar from "../../components/navigation/Navbar/Navbar";
import FooterBar from "../../components/shared/FooterBar/FooterBar";
import PostFeedPage from "../PostFeedPage/PostFeedPage";
import AccountPage from "../AccountPage/AccountPage";

import PageLayout from "../../components/shared/PageLayout/PageLayout";

function DashboardPage(props) {
  return (
    <div className="DashboardPage">
      <Navbar />
      <main>
        <PageLayout>
          <Switch>
            <Route exact to="/dashboard" component={PostFeedPage} />
            <Route exact to="/dashboard/account" component={AccountPage} />
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </PageLayout>
      </main>
      <FooterBar />
    </div>
  );
}

export default DashboardPage;
