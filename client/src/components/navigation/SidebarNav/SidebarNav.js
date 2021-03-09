import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarNav.scss";

import routes from "../../../utils/routes";

function SidebarNav(props) {
  return (
    <nav className="SidebarNav">
      <span className="SidebarNav__title">Navigation</span>
      <ul className="SidebarNav__list">
        {routes.map((route) => {
          return (
            <li key={route.id} className="SidebarNav__item">
              <NavLink
                exact
                to={route.path}
                className="SidebarNav__link"
                activeClassName="SidebarNav__link--active">
                <div className="SidebarNav__icon">{route.icon}</div>
                <div className="SidebarNav__name">{route.name}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarNav;
