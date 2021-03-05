import React from "react";
import "./ProfileHeader.scss";

import Avatar from "../../shared/Avatar/Avatar";

import { getFullName } from "../../../utils/helpers";

function ProfileHeader({ user }) {
  return (
    <header className="ProfileHeader">
      <div className="ProfileHeader__avatar">
        <Avatar user={user} size="large" />
      </div>
      <h1 className="ProfileHeader__heading">{getFullName(user.firstName, user.lastName)}</h1>
    </header>
  );
}

export default ProfileHeader;
