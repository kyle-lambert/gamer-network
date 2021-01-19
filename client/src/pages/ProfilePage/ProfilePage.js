import React from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ProfilePage.scss";

import PageLayout from "../../components/shared/PageLayout/PageLayout";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import FetchingError from "../../components/shared/FetchingError/FetchingError";

import ProfileHeader from "../../components/profile/ProfileHeader/ProfileHeader";
import ProfileTabs from "../../components/profile/ProfileTabs/ProfileTabs";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import ProfileFriends from "./ProfileFriends/ProfileFriends";

import Portrait from "../../assets/avatar.jpg";

const user = {
  firstName: "Troy",
  lastName: "Lambert",
  hexColor: "#F8C471",
  avatar: Portrait,
};

function ProfilePage(props) {
  const { profile, profileLoading, profileError } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    // Fetch user profile
    console.log({ profile, profileLoading, profileError });
  }, []);

  if (profileLoading) {
    return <LoadingSpinner />;
  } else if (profileError) {
    return <FetchingError />;
  } else {
    return (
      <div className="ProfilePage">
        <ProfileHeader user={user} />
        <div className="ProfilePage__tabs">
          <ProfileTabs />
        </div>
        <div className="ProfilePage__main">
          <Switch>
            <Route exact path="/profile/:id" component={ProfileInfo} />
            <Route exact path="/profile/:id/posts" component={ProfilePosts} />
            <Route exact path="/profile/:id/friends" component={ProfileFriends} />
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
