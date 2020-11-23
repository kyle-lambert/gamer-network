import React from "react";
import "./avatar.scss";

import face from "../../assets/face.jpg";

function Avatar({ avatarSize, image, placeholderHex }) {
  const buildClassNamesStr = () => {
    const classNames = ["avatar"];

    if (avatarSize === "small") classNames.push("avatar--small");
    if (avatarSize === "medium") classNames.push("avatar--medium");
    if (avatarSize === "large") classNames.push("avatar--large");

    return classNames.join(" ");
  };

  const classNames = buildClassNamesStr();

  return (
    <div className={classNames}>
      {!image ? (
        <img src={face} alt="User profile picture" className="avatar__img" />
      ) : (
        <span className="avatar__placeholder">K</span>
      )}
    </div>
  );
}

export default Avatar;
