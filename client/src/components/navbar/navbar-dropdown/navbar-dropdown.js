import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar-dropdown.scss";

import useOutsideClick from "../../../hooks/use-outside-click";
import { useModalContext } from "../../../contexts/modal-context";
import { useAuthContext } from "../../../contexts/auth-context";

function NavbarDropdown({ setNavigation }) {
  const { setSignupModal } = useModalContext();
  const { userLoggedIn } = useAuthContext();
  const dropdownRef = React.useRef(null);
  useOutsideClick(dropdownRef, () => {
    setNavigation(false);
  });

  const closeNavigation = () => setNavigation(false);

  const handleSignup = () => {
    setNavigation(false);
    setSignupModal(true);
  };

  return (
    <nav ref={dropdownRef} className="navbar-dropdown">
      <ul className="navbar-dropdown__list">
        <li className="navbar-dropdown__item">
          <NavLink
            to="/"
            exact
            onClick={closeNavigation}
            className="navbar-dropdown__link"
            activeClassName="navbar-dropdown__link--active">
            Home
          </NavLink>
        </li>
        <li className="navbar-dropdown__item">
          <NavLink
            to="/account"
            exact
            onClick={closeNavigation}
            className="navbar-dropdown__link"
            activeClassName="navbar-dropdown__link--active">
            Account
          </NavLink>
        </li>
        <li className="navbar-dropdown__item">
          <NavLink
            to="/games"
            exact
            onClick={closeNavigation}
            className="navbar-dropdown__link"
            activeClassName="navbar-dropdown__link--active">
            Games
          </NavLink>
        </li>
      </ul>
      {!userLoggedIn && (
        <div className="navbar-dropdown__auth">
          <button onClick={handleSignup} className="navbar-dropdown__btn">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavbarDropdown;
