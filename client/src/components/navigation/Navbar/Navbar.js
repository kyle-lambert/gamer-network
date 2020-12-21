import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Navbar.scss";

import { setLoginModalAction, setSignUpModalAction } from "../../../store/actions/modalActions";

import { ReactComponent as Hamburger } from "../../../assets/icons/hamburger.svg";
import { ReactComponent as GlitchLogo } from "../../../assets/icons/glitch-logo.svg";

import Icon from "../../shared/Icon/Icon";
import Button from "../../shared/Button/Button";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import AccountMenu from "../AccountMenu/AccountMenu";

export const routes = [
  {
    id: uuidv4(),
    name: "Games",
    path: "/games",
  },
];

function Navbar(props) {
  const dispatch = useDispatch();
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = React.useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = React.useState(false);

  return (
    <div className="Navbar">
      <div className="Navbar__hamburger">
        <button
          onClick={() => setHamburgerMenuOpen((state) => !state)}
          className="Navbar__hamburger-btn">
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
          {routes.map((route) => {
            return (
              <li key={route.id} className="Navbar__nav-item">
                <NavLink
                  to={route.path}
                  exact
                  className="Navbar__nav-link"
                  activeClassName="Navbar__nav-link--active">
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="Navbar__cta">
        {true ? (
          <div className="Navbar__account">
            <button
              onClick={() => setAccountMenuOpen((state) => !state)}
              className="Navbar__account-btn">
              click
            </button>
          </div>
        ) : (
          <ul className="Navbar__cta-list">
            <li className="Navbar__cta-item">
              <Button onClick={() => dispatch(setLoginModalAction(true))}>Log in</Button>
            </li>
            <li className="Navbar__cta-item">
              <Button onClick={() => dispatch(setSignUpModalAction(true))} primary>
                Sign up
              </Button>
            </li>
          </ul>
        )}
      </div>

      {hamburgerMenuOpen && (
        <HamburgerMenu
          closeHamburgerMenu={() => setHamburgerMenuOpen(false)}
          openSignUpModal={() => dispatch(setSignUpModalAction(true))}
        />
      )}
      {accountMenuOpen && <AccountMenu closeAccountMenu={() => setAccountMenuOpen(false)} />}
    </div>
  );
}

export default React.memo(Navbar);
