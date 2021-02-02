import React from "react";
import "./PostComment.scss";

import { getFullName } from "../../../utils/helpers";

import Avatar from "../../shared/Avatar/Avatar";

function PostComment({ comment }) {
  return (
    <li className="PostComment">
      <div className="PostComment__avatar">
        <Avatar user={comment.author} />
      </div>
      <div className="PostComment__content">
        <span className="PostComment__author">
          {getFullName(comment.author.firstName, comment.author.lastName)}
        </span>
        <div className="PostComment__text">{comment.text}</div>
      </div>
    </li>
  );
}

export default PostComment;
