import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

import NavbarAuth from "./navbar-auth/navbar-auth";

import { ReactComponent as GlitchLogo } from "../../assets/icons/glitch-logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";

function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar__hamburger">
        <button className="navbar__hamburger-btn">
          <Hamburger />
        </button>
      </div>

      <div className="navbar__brand">
        <Link className="navbar__brand-link">
          <GlitchLogo />
        </Link>
      </div>

      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link">Explore</Link>
          </li>
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link">Games</Link>
          </li>
        </ul>
      </nav>

      <NavbarAuth />
    </header>
  );
}

export default Navbar;

/* <button className="navbar__hamburger">
        <Hamburger />
      </button>
      <Link className="navbar__brand-link">
        <GlitchLogo />
      </Link>
      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link">Explore</Link>
          </li>
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link">Games</Link>
          </li>
          z
        </ul>
      </nav>
      <nav className="navbar__auth">
        <ul className="navbar__auth-list">
          <li className="navbar__auth-item">
            <Link className="navbar__auth-link navbar__auth-link--login">
              Log in
            </Link>
          </li>
          <li className="navbar__auth-item navbar__auth-item--hidden">
            <Link className="navbar__auth-link navbar__auth-link--signup">
              Sign up
            </Link>
          </li>
        </ul>
      </nav> */
