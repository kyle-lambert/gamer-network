import React from "react";
import "./ProfileHeader.scss";

import Avatar from "../../shared/Avatar/Avatar";

import { getFullName } from "../../../utils/helpers";

function ProfileHeader({ profile }) {
  return (
    <header className="ProfileHeader">
      <div className="ProfileHeader__avatar">
        <Avatar user={profile.user} size="large" />
      </div>
      <h1 className="ProfileHeader__heading">
        {getFullName(profile.user.firstName, profile.user.lastName)}
      </h1>
      {profile.description && <p className="ProfileHeader__copy">{profile.description}</p>}
    </header>
  );
}

export default ProfileHeader;
