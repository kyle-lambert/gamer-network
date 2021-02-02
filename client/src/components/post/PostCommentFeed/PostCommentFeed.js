import React from "react";
import "./PostCommentFeed.scss";

import PostComment from "../PostComment/PostComment";

function PostCommentFeed({ comments }) {
  return (
    <div className="PostCommentFeed">
      <ul className="PostCommentFeed__list">
        {comments.map((comment) => {
          return <PostComment comment={comment} />;
        })}
      </ul>
    </div>
  );
}

export default PostCommentFeed;
