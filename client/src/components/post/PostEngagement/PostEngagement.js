import React from "react";
import "./PostEngagement.scss";

import { ReactComponent as ThumbUp } from "../../../assets/icons/thumb_up.svg";
import { ReactComponent as Comments } from "../../../assets/icons/comments.svg";

import CubeIcon from "../../shared/CubeIcon/CubeIcon";

function PostEngagement({ comments, likes }) {
  const commentCount = Array.isArray(comments) ? comments.length : null;
  const likeCount = Array.isArray(likes) ? likes.length : null;

  return (
    <div className="PostEngagement">
      <div className="PostEngagement__group">
        <span className="PostEngagement__count">{likeCount ? likeCount : 0}</span>
        <span className="PostEngagement__icon">
          <CubeIcon color="indigo" size="small">
            <ThumbUp />
          </CubeIcon>
        </span>
      </div>
      <div className="PostEngagement__group">
        <span className="PostEngagement__count">{commentCount ? commentCount : 0}</span>
        <span className="PostEngagement__icon">
          <CubeIcon color="indigo" size="small">
            <Comments />
          </CubeIcon>
        </span>
      </div>
    </div>
  );
}

export default PostEngagement;
