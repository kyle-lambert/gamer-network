import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostCommentFeed.scss";

import Avatar from "../../shared/Avatar/Avatar";

import PostCommentInput from "../PostCommentInput/PostCommentInput";
import PostComment from "../PostComment/PostComment";

function PostCommentFeed({ comments }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="PostCommentFeed">
      <div className="PostCommentFeed__form-wrap">
        <Link to={`/profile/${user._id}`} className="PostComment__avatar-link">
          <Avatar user={user} />
        </Link>
        <form className="PostCommentFeed__form">
          <PostCommentInput placeholder="Add a comment here..." />
        </form>
      </div>
      <form action="" className="PostCommentFeed__form"></form>
      <ul className="PostCommentFeed__list">
        {comments.map((comment) => {
          return <PostComment comment={comment} />;
        })}
      </ul>
    </div>
  );
}

export default PostCommentFeed;
