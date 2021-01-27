import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./AccountPage.scss";

import AccountGeneral from "./AccountGeneral/AccountGeneral";
import AccountProfile from "./AccountProfile/AccountProfile";
import AccountDelete from "./AccountDelete/AccountDelete";
import PrivateRoute from "../../hoc/PrivateRoute";

import PageHeader from "../../components/shared/PageHeader/PageHeader";
import AccountTabs from "../../components/account/AccountTabs/AccountTabs";

function AccountPage(props) {
  return (
    <div className="AccountPage">
      <PageHeader
        heading="Account"
        subheading="Update your profile and set your account preferences"
      />
      <div className="AccountPage__grid">
        <div className="AccountPage__tabs">
          <AccountTabs />
        </div>
        <div className="AccountPage__main">
          <Switch>
            <PrivateRoute exact path="/account" component={AccountGeneral} />
            <PrivateRoute exact path="/account/profile" component={AccountProfile} />
            <PrivateRoute exact path="/account/delete" component={AccountDelete} />
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
