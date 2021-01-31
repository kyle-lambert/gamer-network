import React from "react";
import "./Avatar.scss";

import { getInitials } from "../../../utils/helpers";

function Avatar({ user }) {
  if (user.avatar) {
    return (
      <div className="Avatar">
        <img src={user.avatar} alt="User avatar" className="Avatar__img" />
      </div>
    );
  } else {
    return (
      <div className="Avatar">
        <span className="Avatar__placeholder" style={{ backgroundColor: user.hexColor }}>
          {user && getInitials(user.firstName, user.lastName)}
        </span>
      </div>
    );
  }
}

export default Avatar;
