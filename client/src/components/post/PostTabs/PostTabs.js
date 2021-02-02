import React from "react";
import "./PostTabs.scss";

function PostTabs({ commentsOpen, handleCommentsToggle }) {
  return (
    <ul className="PostTabs">
      <li className="PostTabs__item">
        <button className="PostTabs__btn">Like</button>
      </li>
      <li className="PostTabs__item">
        <button
          onClick={handleCommentsToggle}
          className={commentsOpen ? "PostTabs__btn PostTabs__btn--active" : "PostTabs__btn"}>
          Comment
        </button>
      </li>
    </ul>
  );
}

export default PostTabs;
