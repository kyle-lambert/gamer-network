import React from "react";
import { NavLink } from "react-router-dom";
import "./account-nav.scss";

function AccountNav({ children }) {
  return (
    <div className="account-nav">
      <nav className="account-nav__sidebar">
        <ul className="account-nav__list">
          <li className="account-nav__item">
            <NavLink
              exact
              to="/account"
              className="account-nav__link"
              activeClassName="account-nav__link--active">
              General
            </NavLink>
          </li>
          <li className="account-nav__item">
            <NavLink
              exact
              to="/account/profile"
              className="account-nav__link"
              activeClassName="account-nav__link--active">
              Profile
            </NavLink>
          </li>
          <li className="account-nav__item">
            <NavLink
              exact
              to="/account/delete"
              className="account-nav__link"
              activeClassName="account-nav__link--active">
              Delete
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="account-nav__main">{children}</div>
    </div>
  );
}

export default AccountNav;
