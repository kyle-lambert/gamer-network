import React from "react";
import "./PostCardEngagement.scss";

import Icon from "../../shared/Icon/Icon";

import { ReactComponent as CommentOutline } from "../../../assets/icons/comment_outline.svg";
import { ReactComponent as HeartOutline } from "../../../assets/icons/heart_outline.svg";

function PostCardEngagement(props) {
  return (
    <div className="PostCardEngagement">
      <div className="PostCardEngagement__group">
        <Icon>
          <CommentOutline />
        </Icon>
        <span className="PostCardEngagement__num">326</span>
      </div>
      <div className="PostCardEngagement__group">
        <Icon>
          <HeartOutline />
        </Icon>
        <span className="PostCardEngagement__num">17</span>
      </div>
    </div>
  );
}

export default PostCardEngagement;
