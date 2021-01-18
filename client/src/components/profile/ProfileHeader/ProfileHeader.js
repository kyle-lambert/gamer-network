import React from "react";
import "./ProfileHeader.scss";

import Avatar from "../../shared/Avatar/Avatar";

import { getFullName } from "../../../utils/helpers";

function ProfileHeader({ user }) {
  return (
    <header className="ProfileHeader">
      <div className="ProfileHeader__avatar">
        <Avatar user={user} />
      </div>
      <h1 className="ProfileHeader__heading">{getFullName(user.firstName, user.lastName)}</h1>
      {/* <ul className="ProfileHeader__icon-list">
        <li className="ProfileHeader__icon-item">
          <IconCube iconName="location" />
          <span className="ProfileHeader__icon-text">Australia</span>
        </li>
        <li className="ProfileHeader__icon-item">
          <IconCube iconName="gamertag" />
          <span className="ProfileHeader__icon-text">RGBGyoza</span>
        </li>
      </ul> */}
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
