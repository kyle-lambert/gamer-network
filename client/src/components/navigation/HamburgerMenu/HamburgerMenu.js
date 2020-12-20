import React from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.scss";

import Button from "../../shared/Button/Button";

function HamburgerMenu(props) {
  const hamburgerRef = React.useRef(null);
  // useOutsideClick(dropdownRef, () => {
  //   setNavigation(false);
  // });

  const handleSignup = () => {
    // setNavigation(false);
    // setSignupModal(true);
  };

  return (
    <nav ref={hamburgerRef} className="HamburgerMenu">
      <ul className="HamburgerMenu__list">
        <li className="HamburgerMenu__item">
          <NavLink
            to="/"
            exact
            className="HamburgerMenu__link"
            activeClassName="HamburgerMenu__link--active">
            Home
          </NavLink>
        </li>
        <li className="HamburgerMenu__item">
          <NavLink
            to="/account"
            exact
            className="HamburgerMenu__link"
            activeClassName="HamburgerMenu__link--active">
            Account
          </NavLink>
        </li>
        <li className="HamburgerMenu__item">
          <NavLink
            to="/games"
            exact
            className="HamburgerMenu__link"
            activeClassName="HamburgerMenu__link--active">
            Games
          </NavLink>
        </li>
      </ul>
      {true && (
        <div className="HamburgerMenu__auth">
          <Button primary full>
            Sign up
          </Button>
        </div>
      )}
    </nav>
  );
}

export default HamburgerMenu;
