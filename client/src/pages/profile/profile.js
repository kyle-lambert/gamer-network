import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./profile.scss";

import ProfileNav from "../../components/profile-nav/profile-nav";
import Avatar from "../../components/avatar/avatar";
import IconCube from "../../components/cube-icon/cube-icon";

import ProfileOverview from "./profile-overview/profile-overview";
import ProfileReviews from "./profile-reviews/profile-reviews";
import ProfileGames from "./profile-games/profile-games";

function Profile(props) {
  return (
    <div className="profile">
      <header className="profile__header">
        <Avatar avatarSize="large" />
        <h1 className="profile__name">Jasmine Green</h1>
        <ul className="profile__icon-list">
          <li className="profile__icon-item">
            <IconCube iconName="location" />
            <span className="profile__icon-text">Australia</span>
          </li>
          <li className="profile__icon-item">
            <IconCube iconName="gamertag" />
            <span className="profile__icon-text">RGBGyoza</span>
          </li>
        </ul>
        <p className="profile__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero
          obcaecati provident, accusantium porro corrupti enim at? Dolorem
          pariatur libero veniam necessitatibus ratione voluptates. Autem
          voluptatum quidem cumque deleniti voluptates?Adipisci quas velit
          officia rerum fugiat temporibus, incidunt maiores soluta ratione
          molestiae eligendi fuga at similique magnam quos. Deserunt facere
          veritatis inventore debitis. Similique, doloribus repudiandae tempora
          amet corporis qui.
        </p>
      </header>
      <ProfileNav>
        <Switch>
          <Route exact path="/profile/:id" component={ProfileOverview} />
          <Route exact path="/profile/:id/games" component={ProfileGames} />
          <Route exact path="/profile/:id/reviews" component={ProfileReviews} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </ProfileNav>
    </div>
  );
}

export default Profile;
