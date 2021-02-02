import React from "react";
import { Link } from "react-router-dom";
import "./PostComment.scss";

import { getFullName } from "../../../utils/helpers";

import Avatar from "../../shared/Avatar/Avatar";

function PostComment({ comment }) {
  return (
    <li className="PostComment">
      <Link to={`/profile/${comment.author._id}`} className="PostComment__avatar-link">
        <Avatar user={comment.author} />
      </Link>
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
