import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar-dropdown.scss";

import { useModalContext } from "../../../contexts/modal-context";

function NavbarDropdown({ setDropdown }) {
  const { setSignupModal } = useModalContext();

  const handleLinkClick = () => {
    setDropdown(false);
  };

  const handleSignupClick = () => {
    setDropdown(false);
    setSignupModal(true);
  };

  return (
    <nav className="navbar-dropdown">
      <ul className="navbar-dropdown__list">
        <li className="navbar-dropdown__item">
          <NavLink
            to="/explore"
            onClick={handleLinkClick}
            className="navbar-dropdown__link"
            activeClassName="navbar-dropdown__link--active">
            Explore
          </NavLink>
        </li>
        <li className="navbar-dropdown__item">
          <NavLink
            to="/games"
            onClick={handleLinkClick}
            className="navbar-dropdown__link"
            activeClassName="navbar-dropdown__link--active">
            Games
          </NavLink>
        </li>
      </ul>
      <div className="navbar-dropdown__auth">
        <button onClick={handleSignupClick} className="navbar-dropdown__btn">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default NavbarDropdown;
