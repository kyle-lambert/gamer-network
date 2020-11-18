import React from "react";
import "./navbar-auth.scss";

import Button from "../../button/button";

function NavbarAuth(props) {
  return (
    <nav className="navbar-auth">
      <ul className="navbar-auth__list">
        <li className="navbar-auth__item">
          <Button>Log in</Button>
        </li>
        <li className="navbar-auth__item">
          <Button type="primary">Sign up</Button>
        </li>
      </ul>

      <div className="navbar-auth__account"></div>
    </nav>
  );
}

export default NavbarAuth;
