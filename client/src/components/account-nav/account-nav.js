import React from "react";
import { NavLink } from "react-router-dom";
import "./account-nav.scss";

import { accountRoutes } from "../../utils/routes";

function AccountNav({ children }) {
  return (
    <div className="account-nav">
      <nav className="account-nav__sidebar">
        <ul className="account-nav__list">
          {accountRoutes.map((route) => {
            return (
              <li key={route.id} className="account-nav__item">
                <NavLink
                  exact
                  to={route.path}
                  className="account-nav__link"
                  activeClassName="account-nav__link--active">
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="account-nav__main">{children}</div>
    </div>
  );
}

export default AccountNav;
