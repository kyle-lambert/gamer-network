import React from "react";
import "./ProfileHeader.scss";

import Avatar from "../../shared/Avatar/Avatar";

import { getFullName } from "../../../utils/helpers";

function ProfileHeader({ user }) {
  return (
    <header className="ProfileHeader">
      <div className="ProfileHeader__avatar">
        <Avatar user={user} large />
      </div>
      <h1 className="ProfileHeader__heading">{getFullName(user.firstName, user.lastName)}</h1>
      <p className="ProfileHeader__copy">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vero obcaecati provident,
        accusantium porro corrupti enim at? Dolorem pariatur libero veniam necessitatibus ratione
        voluptates. Autem voluptatum quidem cumque deleniti voluptates?Adipisci quas velit officia
        rerum fugiat temporibus, incidunt maiores soluta ratione molestiae eligendi fuga at
        similique magnam quos. Deserunt facere veritatis inventore debitis. Similique, doloribus
        repudiandae tempora amet corporis qui.
      </p>
    </header>
  );
}

export default ProfileHeader;
