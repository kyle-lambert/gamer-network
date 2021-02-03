import React from "react";
import "./PostEngagement.scss";

import { ReactComponent as ThumbUp } from "../../../assets/icons/thumb_up.svg";
import { ReactComponent as Comments } from "../../../assets/icons/comments.svg";

import Icon from "../../shared/Icon/Icon";

function PostEngagement({ likeCount, commentCount }) {
  return (
    <div className="PostEngagement">
      <div className="PostEngagement__group">
        <span className="PostEngagement__count">{likeCount ? likeCount : 0}</span>
        <span className="PostEngagement__icon">
          <Icon color="grey">
            <ThumbUp />
          </Icon>
        </span>
      </div>
      <div className="PostEngagement__group">
        <span className="PostEngagement__count">{commentCount ? commentCount : 0}</span>
        <span className="PostEngagement__icon">
          <Icon color="grey">
            <Comments />
          </Icon>
        </span>
      </div>
    </div>
  );
}

export default PostEngagement;
