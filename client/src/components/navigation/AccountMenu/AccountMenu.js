import React from "react";
import { NavLink } from "react-router-dom";
import "./AccountMenu.scss";

import Button from "../../shared/Button/Button";

function AccountMenu(props) {
  const accountRef = React.useRef(null);

  return (
    <nav ref={accountRef} className="AccountMenu">
      <ul className="AccountMenu__list">
        <li className="AccountMenu__item">
          <NavLink
            to="/profile/123456789"
            className="AccountMenu__link"
            activeClassName="AccountMenu__link--active">
            Kyle Lambert
          </NavLink>
        </li>
        <li className="AccountMenu__item">
          <NavLink
            to="/account"
            className="AccountMenu__link"
            activeClassName="AccountMenu__link--active">
            Account
          </NavLink>
        </li>
      </ul>
      <div className="AccountMenu__auth">
        <Button error full>
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default AccountMenu;
