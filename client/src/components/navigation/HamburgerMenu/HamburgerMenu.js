import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.scss";

import Button from "../../shared/Button/Button";
import useOutsideClick from "../../../hooks/useOutsideClick";

function HamburgerMenu({ closeHamburgerMenu, openSignUpModal }) {
  const hamburgerRef = React.useRef(null);
  const { isAuthenticated } = useSelector((state) => state.authReducer);

  useOutsideClick(hamburgerRef, () => {
    closeHamburgerMenu();
  });

  const handleClick = () => {
    closeHamburgerMenu();
    openSignUpModal();
  };

  const handleNavClick = () => {
    closeHamburgerMenu();
  };

  return (
    <nav ref={hamburgerRef} className="HamburgerMenu">
      <ul className="HamburgerMenu__list">
        <li className="HamburgerMenu__item">
          <NavLink
            to="/"
            exact
            onClick={handleNavClick}
            className="HamburgerMenu__link"
            activeClassName="HamburgerMenu__link--active">
            Home
          </NavLink>
        </li>
      </ul>
      {!isAuthenticated && (
        <div className="HamburgerMenu__auth">
          <Button onClick={handleClick} color="indigo" width="full">
            Sign up
          </Button>
        </div>
      )}
    </nav>
  );
}

export default HamburgerMenu;
