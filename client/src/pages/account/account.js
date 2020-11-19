import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./account.scss";

import PageHeader from "../../components/page-header/page-header";
import AccountNav from "../../components/account-nav/account-nav";

import AccountGeneral from "./account-general/account-general";
import AccountProfile from "./account-profile/account-profile";

function Account(props) {
  return (
    <div className="account">
      <PageHeader
        header="Account"
        subheader="Update your profile and set your account preferences."
      />
      <AccountNav>
        <Switch>
          <Route exact path="/account" component={AccountGeneral} />
          <Route exact path="/account/profile" component={AccountProfile} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </AccountNav>
    </div>
  );
}

export default Account;
