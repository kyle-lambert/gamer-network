import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./DashboardPage.scss";

import Navbar from "../../components/navigation/Navbar/Navbar";
import FooterBar from "../../components/shared/FooterBar/FooterBar";
import PostFeedPage from "../PostFeedPage/PostFeedPage";
import AccountPage from "../AccountPage/AccountPage";
import ProfilePage from "../ProfilePage/ProfilePage";

import PageLayout from "../../components/shared/PageLayout/PageLayout";

function DashboardPage(props) {
  return (
    <div className="DashboardPage">
      <Navbar />
      <main>
        <PageLayout>
          <Switch>
            <Route exact path="/dashboard" component={PostFeedPage} />
            <Route path="/dashboard/account" component={AccountPage} />
            <Route path="/dashboard/profile/:id" component={ProfilePage} />
            {/* <Route>
              <Redirect to="/error" />
            </Route> */}
          </Switch>
        </PageLayout>
      </main>
      <FooterBar />
    </div>
  );
}

export default DashboardPage;
