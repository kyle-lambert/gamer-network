import React from "react";
import axios from "axios";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ProfilePage.scss";

import {
  getProfileByIdAction,
  resetProfileReducerAction,
} from "../../store/actions/profileActions";

import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import FetchingError from "../../components/shared/FetchingError/FetchingError";

import ProfileHeader from "../../components/profile/ProfileHeader/ProfileHeader";
import ProfileTabs from "../../components/profile/ProfileTabs/ProfileTabs";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import PrivateRoute from "../../hoc/PrivateRoute";

function ProfilePage(props) {
  const { profile, profileLoading, profileError } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    dispatch(getProfileByIdAction(id, source.token));

    return () => {
      dispatch(resetProfileReducerAction());
      source.cancel("Axios request canceled.");
    };
  }, [dispatch, id]);

  if (profileLoading) {
    return <LoadingSpinner />;
  } else if (profileError) {
    return <FetchingError />;
  } else {
    return profile ? (
      <div className="ProfilePage">
        <ProfileHeader user={profile.user} />
        <div className="ProfilePage__tabs">
          <ProfileTabs />
        </div>
        <div className="ProfilePage__main">
          <Switch>
            <PrivateRoute exact path="/profile/:id" component={ProfileAbout} />
            <PrivateRoute exact path="/profile/:id/posts" component={ProfilePosts} />
            <PrivateRoute exact path="/profile/:id/friends" component={ProfileFriends} />
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </div>
      </div>
    ) : null;
  }
}

export default ProfilePage;
