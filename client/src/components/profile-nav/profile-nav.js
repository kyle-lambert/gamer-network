import React from "react";
import { NavLink, useParams } from "react-router-dom";

function ProfileNav({ children }) {
  const { username } = useParams();

  return (
    <div className="profile-nav">
      <nav className="profile-nav__nav">
        <ul className="profile-nav__list">
          <li className="profile-nav__item">
            <NavLink
              exact
              to={`/profile/${username}`}
              className="profile-nav__link"
              activeClassName="profile-nav__link--active">
              Overview
            </NavLink>
          </li>
          <li className="profile-nav__item">
            <NavLink
              exact
              to={`/profile/${username}/games`}
              className="profile-nav__link"
              activeClassName="profile-nav__link--active">
              Games
            </NavLink>
          </li>
          <li className="profile-nav__item">
            <NavLink
              exact
              to={`/profile/${username}/friends`}
              className="profile-nav__link"
              activeClassName="profile-nav__link--active">
              Friends
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="profile-nav__main">{children}</div>
    </div>
  );
}

export default ProfileNav;
