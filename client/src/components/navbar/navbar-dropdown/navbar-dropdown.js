import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar-dropdown.scss";

import useOutsideClick from "../../../hooks/use-outside-click";
import { useModalContext } from "../../../contexts/modal-context";

function NavbarDropdown({ setNavigation }) {
  const { setSignupModal } = useModalContext();
  const dropdownRef = React.useRef(null);
  useOutsideClick(dropdownRef, () => {
    setNavigation(false);
  });

  const closeNavigation = () => setNavigation(false);

  const handleSignupClick = () => {
    setNavigation(false);
    setSignupModal(true);
  };

  return (
    <nav ref={dropdownRef} className="navbar-dropdown">
      <ul className="navbar-dropdown__list">
        <li className="navbar-dropdown__item">
          <NavLink
            to="/account"
            onClick={closeNavigation}
            className="navbar-dropdown__link"
            activeClassName="navbar-dropdown__link--active">
            Account
          </NavLink>
        </li>
        <li className="navbar-dropdown__item">
          <NavLink
            to="/games"
            onClick={closeNavigation}
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
