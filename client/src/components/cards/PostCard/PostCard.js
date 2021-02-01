import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";

import UserInfoGroup from "../../../components/shared/UserInfoGroup/UserInfoGroup";
import PostCardContent from "../../../components/cards/PostCardContent/PostCardContent";
import PostCardEngagement from "../../../components/cards/PostCardEngagement/PostCardEngagement";

function PostCard({ post }) {
  return (
    <article className="PostCard">
      <div className="PostCard__author">
        <UserInfoGroup user={post.author} />
      </div>
      <Link to={`/posts/${post._id}`} className="PostCard__link">
        <PostCardContent post={post} />
        <PostCardEngagement post={post} />
      </Link>
    </article>
  );
}

export default PostCard;
