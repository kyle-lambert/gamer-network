import React from "react";
import { NavLink } from "react-router-dom";
import "./AccountMenu.scss";

import Button from "../../shared/Button/Button";

import useOutsideClick from "../../../hooks/useOutsideClick";

import { getFullName } from "../../../utils/helpers";

function AccountMenu({ closeAccountMenu, logoutUser, user }) {
  const accountRef = React.useRef(null);

  useOutsideClick(accountRef, () => {
    closeAccountMenu();
  });

  const handleNavClick = () => {
    closeAccountMenu();
  };

  return (
    <nav ref={accountRef} className="AccountMenu">
      <ul className="AccountMenu__list">
        <li className="AccountMenu__item">
          <NavLink
            to={`/dashboard/profile/${user._id}`}
            onClick={handleNavClick}
            className="AccountMenu__link"
            activeClassName="AccountMenu__link--active">
            {getFullName(user.firstName, user.lastName)}
          </NavLink>
        </li>
        <li className="AccountMenu__item">
          <NavLink
            to="/dashboard/account"
            onClick={handleNavClick}
            className="AccountMenu__link"
            activeClassName="AccountMenu__link--active">
            Account
          </NavLink>
        </li>
        {/* <li className="AccountMenu__item">
          <NavLink
            to="/posts"
            exact
            onClick={handleNavClick}
            className="AccountMenu__link"
            activeClassName="AccountMenu__link--active">
            Posts Feed
          </NavLink>
        </li> */}
      </ul>
      <div className="AccountMenu__auth">
        <Button onClick={logoutUser} color="indigo" width="full">
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default AccountMenu;
