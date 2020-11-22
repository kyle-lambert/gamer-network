import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar-account-dropdown.scss";

import useOutsideClick from "../../../hooks/use-outside-click";
import { useAuthContext } from "../../../contexts/auth-context";

function NavbarAccountDropdown({ setAccountNavigation }) {
  const { logoutUser } = useAuthContext();
  const accountDropdownRef = React.useRef(null);
  useOutsideClick(accountDropdownRef, () => {
    setAccountNavigation(false);
  });

  const closeAccountNavigation = () => setAccountNavigation(false);

  const handleAccountLogout = () => {
    closeAccountNavigation();
    logoutUser();
  };

  return (
    <nav ref={accountDropdownRef} className="navbar-account-dropdown">
      <ul className="navbar-account-dropdown__list">
        <li className="navbar-account-dropdown__item">
          <NavLink
            to="/profile/123456789"
            onClick={closeAccountNavigation}
            className="navbar-account-dropdown__link"
            activeClassName="navbar-account-dropdown__link--active">
            Kyle Lambert
          </NavLink>
        </li>
        <li className="navbar-account-dropdown__item">
          <NavLink
            to="/account"
            onClick={closeAccountNavigation}
            className="navbar-account-dropdown__link"
            activeClassName="navbar-account-dropdown__link--active">
            Account
          </NavLink>
        </li>
      </ul>
      <div className="navbar-account-dropdown__auth">
        <button
          onClick={handleAccountLogout}
          className="navbar-account-dropdown__btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavbarAccountDropdown;
