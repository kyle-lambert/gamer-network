import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./profile.scss";

import ProfileNav from "../../components/profile-nav/profile-nav";

import ProfileOverview from "./profile-overview/profile-overview";
import ProfileGames from "./profile-games/profile-games";
import ProfileFriends from "./profile-friends/profile-friends";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileNav>
        <Switch>
          <Route exact path="/profile/:username" component={ProfileOverview} />
          <Route
            exact
            path="/profile/:username/games"
            component={ProfileGames}
          />
          <Route
            exact
            path="/profile/:username/friends"
            component={ProfileFriends}
          />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </ProfileNav>
    </div>
  );
}

export default Profile;
