import React from "react";
import classNames from "classnames";
import "./Avatar.scss";

import { getInitials } from "../../../utils/helpers";

const INITIAL = "Avatar";

function Avatar({ user, size }) {
  const classes = classNames(INITIAL, size && `${INITIAL}--${size}`);

  if (user.avatar) {
    return (
      <div className={classes}>
        <img src={user.avatar} alt="User avatar" className="Avatar__img" />
      </div>
    );
  } else {
    return (
      <div className={classes} style={{ backgroundColor: user.hexColor }}>
        <span className="Avatar__placeholder">
          {user && getInitials(user.firstName, user.lastName)}
        </span>
      </div>
    );
  }
}

export default Avatar;
