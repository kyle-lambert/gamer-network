import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.scss";

import Button from "../../shared/Button/Button";

import useOutsideClick from "../../../hooks/useOutsideClick";

function HamburgerMenu({ closeHamburgerMenu, openSignUpModal }) {
  const hamburgerRef = React.useRef(null);
  const { userLoggedIn } = useSelector((state) => state.auth);

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
        <li className="HamburgerMenu__item">
          <NavLink
            to="/account"
            exact
            onClick={handleNavClick}
            className="HamburgerMenu__link"
            activeClassName="HamburgerMenu__link--active">
            Account
          </NavLink>
        </li>
        <li className="HamburgerMenu__item">
          <NavLink
            to="/games"
            exact
            onClick={handleNavClick}
            className="HamburgerMenu__link"
            activeClassName="HamburgerMenu__link--active">
            Games
          </NavLink>
        </li>
      </ul>
      {!userLoggedIn && (
        <div className="HamburgerMenu__auth">
          <Button onClick={handleClick} primary full>
            Sign up
          </Button>
        </div>
      )}
    </nav>
  );
}

export default HamburgerMenu;