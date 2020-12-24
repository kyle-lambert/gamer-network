import React from "react";
import { NavLink } from "react-router-dom";
import "./AccountTabs.scss";

function AccountTabs(props) {
  return (
    <nav className="AccountTabs">
      <ul className="AccountTabs__list">
        <li className="AccountTabs__item">
          <NavLink
            exact
            to="/account"
            className="AccountTabs__link"
            activeClassName="AccountTabs__link--active">
            General
          </NavLink>
        </li>
        <li className="AccountTabs__item">
          <NavLink
            exact
            to="/account/profile"
            className="AccountTabs__link"
            activeClassName="AccountTabs__link--active">
            Profile
          </NavLink>
        </li>
        <li className="AccountTabs__item">
          <NavLink
            exact
            to="/account/delete"
            className="AccountTabs__link"
            activeClassName="AccountTabs__link--active">
            Delete
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AccountTabs;
