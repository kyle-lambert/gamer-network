import React from "react";
import { Link } from "react-router-dom";
import "./navbar-dropdown.scss";

function NavbarDropdown({ setDropdown }) {
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
        <button className="navbar-dropdown__btn">Sign up</button>
      </div>
    </nav>
  );
}

export default NavbarDropdown;
