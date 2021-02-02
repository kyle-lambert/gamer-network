import React from "react";
import "./Avatar.scss";

import { getInitials, buildClassNamesFromProps } from "../../../utils/helpers";

function Avatar({ user, ...rest }) {
  if (user.avatar) {
    return (
      <div className={buildClassNamesFromProps("Avatar", rest)}>
        <img src={user.avatar} alt="User avatar" className="Avatar__img" />
      </div>
    );
  } else {
    return (
      <div
        className={buildClassNamesFromProps("Avatar", rest)}
        style={{ backgroundColor: user.hexColor }}>
        <span className="Avatar__placeholder">
          {user && getInitials(user.firstName, user.lastName)}
        </span>
      </div>
    );
  }
}

export default Avatar;
