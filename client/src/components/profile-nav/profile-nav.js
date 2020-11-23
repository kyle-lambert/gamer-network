import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./profile-nav.scss";

function ProfileNav({ children }) {
  const { id } = useParams();

  return (
    <div className="profile-nav">
      <nav className="profile-nav__nav">
        <ul className="profile-nav__list">
          <li className="profile-nav__item">
            <NavLink
              exact
              to={`/profile/${id}`}
              className="profile-nav__link"
              activeClassName="profile-nav__link--active">
              Overview
            </NavLink>
          </li>
          <li className="profile-nav__item">
            <NavLink
              exact
              to={`/profile/${id}/games`}
              className="profile-nav__link"
              activeClassName="profile-nav__link--active">
              Games
            </NavLink>
          </li>
          <li className="profile-nav__item">
            <NavLink
              exact
              to={`/profile/${id}/reviews`}
              className="profile-nav__link"
              activeClassName="profile-nav__link--active">
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="profile-nav__main">{children}</div>
    </div>
  );
}

export default ProfileNav;
