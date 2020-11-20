import React from "react";
import "./navbar-auth.scss";

import Button from "../../button/button";

import { useModalContext } from "../../../contexts/modal-context";

function NavbarAuth(props) {
  const { setLoginModal, setSignupModal } = useModalContext();

  return (
    <nav className="navbar-auth">
      <ul className="navbar-auth__list">
        <li className="navbar-auth__item">
          <Button onClick={() => setLoginModal(true)}>Log in</Button>
        </li>
        <li className="navbar-auth__item">
          <Button onClick={() => setSignupModal(true)} style="primary">
            Sign up
          </Button>
        </li>
      </ul>

      <div className="navbar-auth__account"></div>
    </nav>
  );
}

export default NavbarAuth;
