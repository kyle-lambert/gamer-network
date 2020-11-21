import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

import Button from "../button/button";
import Avatar from "../avatar/avatar";
import NavbarDropdown from "./navbar-dropdown/navbar-dropdown";
import NavbarAccountDropdown from "./navbar-account-dropdown/navbar-account-dropdown";

import { useModalContext } from "../../contexts/modal-context";

import { ReactComponent as GlitchLogo } from "../../assets/icons/glitch-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";

function Navbar(props) {
  const [navigationOpen, setNavigation] = React.useState(false);
  const [accountNavigationOpen, setAccountNavigation] = React.useState(false);
  const { setLoginModal, setSignupModal } = useModalContext();

  const toggleNavigation = () => {
    if (accountNavigationOpen) setAccountNavigation(false);
    setNavigation((prev) => !prev);
  };

  const toggleAccountNavigation = () => {
    if (navigationOpen) setNavigation(false);
    setAccountNavigation((prev) => !prev);
  };

  const openLoginModal = () => setLoginModal(true);
  const openSignupModal = () => setSignupModal(true);

  return (
    <header className="navbar">
      <div className="navbar__hamburger">
        <button onClick={toggleNavigation} className="navbar__hamburger-btn">
          <Hamburger />
        </button>
      </div>

      <div className="navbar__brand">
        <Link to="/" className="navbar__brand-link">
          <GlitchLogo />
        </Link>
      </div>

      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item">
            <NavLink
              to="/account"
              className="navbar__nav-link"
              activeClassName="navbar__nav-link--active">
              Account
            </NavLink>
          </li>
          <li className="navbar__nav-item">
            <NavLink
              to="/games"
              className="navbar__nav-link"
              activeClassName="navbar__nav-link--active">
              Games
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="navbar__cta">
        {/* <ul className="navbar__cta-list">
          <li className="navbar__cta-item">
            <Button onClick={openLoginModal}>Log in</Button>
          </li>
          <li className="navbar__cta-item">
            <Button onClick={openSignupModal} buttonType="primary">
              Sign up
            </Button>
          </li>
        </ul> */}

        <div className="navbar__account">
          <button
            onClick={toggleAccountNavigation}
            className="navbar__account-btn">
            <Avatar />
          </button>
        </div>
      </div>

      {navigationOpen && <NavbarDropdown setNavigation={setNavigation} />}
      {accountNavigationOpen && (
        <NavbarAccountDropdown setAccountNavigation={setAccountNavigation} />
      )}
    </header>
  );
}

export default Navbar;
