import React from "react";
import { Link } from "react-router-dom";
import "./navbar-dropdown.scss";

import { useModalContext } from "../../../contexts/modal-context";

function NavbarDropdown({ setDropdown }) {
  const { setSignupModal } = useModalContext();

  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <nav className="navbar-dropdown">
      <ul className="navbar-dropdown__list">
        <li className="navbar-dropdown__item">
          <Link onClick={handleClick} className="navbar-dropdown__link">
            Explore
          </Link>
        </li>
        <li className="navbar-dropdown__item">
          <Link onClick={handleClick} className="navbar-dropdown__link">
            Games
          </Link>
        </li>
      </ul>
      <div className="navbar-dropdown__auth">
        <button
          onClick={() => setSignupModal(true)}
          className="navbar-dropdown__btn">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default NavbarDropdown;
