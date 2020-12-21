import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./AccountPage.scss";

import AccountGeneral from "./AccountGeneral/AccountGeneral";
import AccountProfile from "./AccountProfile/AccountProfile";
import AccountDelete from "./AccountDelete/AccountDelete";

function AccountPage(props) {
  return (
    <div className="AccountPage">
      <Switch>
        <Route exact path="/account" component={AccountGeneral} />
        <Route exact path="/account/profile" component={AccountProfile} />
        <Route exact path="/account/delete" component={AccountDelete} />
        <Route>
          <Redirect to="/error" />
        </Route>
      </Switch>
    </div>
  );
}

export default AccountPage;
