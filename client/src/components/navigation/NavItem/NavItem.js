import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.scss";

function NavItem({ route }) {
  return (
    <li className="NavItem">
      <NavLink
        exact
        to={route.path}
        className="NavItem__link"
        activeClassName="NavItem__link--active">
        <div className="NavItem__icon">{route.icon}</div>
        <div className="NavItem__name">{route.name}</div>
      </NavLink>
    </li>
  );
}

export default NavItem;
