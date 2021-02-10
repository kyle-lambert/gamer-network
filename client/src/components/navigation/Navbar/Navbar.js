import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.scss";

import { showLoginModal, showSignUpModal } from "../../../store/actions/modalActions";
import { logoutUser } from "../../../store/actions/authActions";

import { ReactComponent as Hamburger } from "../../../assets/icons/hamburger.svg";
import { ReactComponent as GlitchLogo } from "../../../assets/icons/glitch-logo.svg";

import Icon from "../../shared/Icon/Icon";
import Button from "../../shared/Button/Button";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import Avatar from "../../shared/Avatar/Avatar";

export const routes = [
  {
    id: uuidv4(),
    name: "Home",
    path: "/",
  },
];

function Navbar(props) {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.authReducer);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = React.useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = React.useState(false);

  const openLoginModal = () => dispatch(showLoginModal());
  const openSignUpModal = () => dispatch(showSignUpModal());
  const toggleHamburgerMenu = () => setHamburgerMenuOpen((state) => !state);
  const toggleAccountMenu = () => setAccountMenuOpen((state) => !state);
  const closeHamburgerMenu = () => setHamburgerMenuOpen(false);
  const closeAccountMenu = () => setAccountMenuOpen(false);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };

  React.useEffect(() => {
    if (!isAuthenticated || !user) {
      closeAccountMenu();
    }
  }, [isAuthenticated, user]);

  return (
    <header className="Navbar">
      <div className="Navbar__hamburger">
        <button onClick={toggleHamburgerMenu} className="Navbar__hamburger-btn">
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

      {isAuthenticated && user ? (
        <>
          <div className="Navbar__avatar">
            <button onClick={toggleAccountMenu} className="Navbar__avatar-btn">
              <Avatar user={user} size="medium" />
            </button>
          </div>
          {accountMenuOpen && (
            <AccountMenu
              closeAccountMenu={closeAccountMenu}
              user={user}
              logoutUser={handleLogoutUser}
            />
          )}
        </>
      ) : (
        <ul className="Navbar__cta">
          <li className="Navbar__cta-item">
            <Button onClick={openLoginModal} variant="outline">
              Login
            </Button>
          </li>
          <li className="Navbar__cta-item">
            <Button onClick={openSignUpModal} color="indigo">
              Sign Up
            </Button>
          </li>
        </ul>
      )}

      {hamburgerMenuOpen && (
        <HamburgerMenu closeHamburgerMenu={closeHamburgerMenu} openSignUpModal={openSignUpModal} />
      )}
    </header>
  );
}

export default React.memo(Navbar);
