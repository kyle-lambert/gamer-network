import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

import { ReactComponent as Hamburger } from "../../../assets/icons/hamburger.svg";
import { ReactComponent as GlitchLogo } from "../../../assets/icons/glitch-logo.svg";

import Icon from "../../shared/Icon/Icon";
import Button from "../../shared/Button/Button";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import AccountMenu from "../AccountMenu/AccountMenu";

function Navbar(props) {
  return (
    <header className="Navbar">
      <div className="Navbar__hamburger">
        <button className="Navbar__hamburger-btn">
          <Icon>
            <Hamburger />
          </Icon>
        </button>
      </div>

      <div className="Navbar__brand">
        <Link to="/" className="Navbar__brand-link">
          <GlitchLogo />
        </Link>
      </div>

      <nav className="Navbar__nav">
        <ul className="Navbar__nav-list">
          <li className="Navbar__nav-item">
            <NavLink
              to="/"
              exact
              className="Navbar__nav-link"
              activeClassName="Navbar__nav-link--active">
              Home
            </NavLink>
          </li>
          <li className="Navbar__nav-item">
            <NavLink
              to="/account"
              exact
              className="Navbar__nav-link"
              activeClassName="Navbar__nav-link--active">
              Account
            </NavLink>
          </li>
          <li className="Navbar__nav-item">
            <NavLink
              to="/games"
              exact
              className="Navbar__nav-link"
              activeClassName="Navbar__nav-link--active">
              Games
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="Navbar__cta">
        {false ? (
          <div className="Navbar__account">
            <button className="Navbar__account-btn">{/* <Avatar /> */}</button>
          </div>
        ) : (
          <ul className="Navbar__cta-list">
            <li className="Navbar__cta-item">
              <Button>Log in</Button>
            </li>
            <li className="Navbar__cta-item">
              <Button primary>Sign up</Button>
            </li>
          </ul>
        )}
      </div>

      {/* {true && <HamburgerMenu />} */}
      {/* {true && <AccountMenu />} */}
    </header>
  );
}

export default Navbar;
