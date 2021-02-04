import React from "react";
import { Link } from "react-router-dom";
import "./UserInfoGroup.scss";

import { getFullName } from "../../../utils/helpers";

import Avatar from "../Avatar/Avatar";

function UserInfoGroup({ user }) {
  return (
    <div className="UserInfoGroup">
      <Link to={`/profile/${user._id}`} className="UserInfoGroup__link">
        <Avatar user={user} size="medium" />
      </Link>
      <div className="UserInfoGroup__info">
        <span className="UserInfoGroup__name">
          {user ? getFullName(user.firstName, user.lastName) : "No author"}
        </span>
        {false && (
          <span className="UserInfoGroup__created-at">{user ? user.createdAt : "No date"}</span>
        )}
      </div>
    </div>
  );
}

export default UserInfoGroup;
