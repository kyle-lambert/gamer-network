import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

import NavbarAuth from "./navbar-auth/navbar-auth";
import NavbarDropdown from "./navbar-dropdown/navbar-dropdown";

import { ReactComponent as GlitchLogo } from "../../assets/icons/glitch-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";

function Navbar(props) {
  const [dropdown, setDropdown] = React.useState(false);

  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar__hamburger">
        <button onClick={handleClick} className="navbar__hamburger-btn">
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

      <NavbarAuth />
      {dropdown && <NavbarDropdown setDropdown={setDropdown} />}
    </header>
  );
}

export default Navbar;
