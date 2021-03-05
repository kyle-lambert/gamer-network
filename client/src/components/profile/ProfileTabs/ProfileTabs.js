import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ProfileTabs.scss";

function ProfileTabs(props) {
  const params = useParams();

  return (
    <nav className="ProfileTabs">
      <ul className="ProfileTabs__list">
        <li className="ProfileTabs__item">
          <NavLink
            exact
            to={`/profile/${params.id}`}
            className="ProfileTabs__link"
            activeClassName="ProfileTabs__link--active">
            About
          </NavLink>
        </li>
        <li className="ProfileTabs__item">
          <NavLink
            exact
            to={`/profile/${params.id}/posts`}
            className="ProfileTabs__link"
            activeClassName="ProfileTabs__link--active">
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileTabs;
