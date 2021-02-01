import React from "react";
import "./PostCardContent.scss";

function PostCardContent({ post }) {
  return post ? (
    <div className="PostCardContent">
      <p className="PostCardContent__text">{post.text ? post.text : "No text"}</p>
      {post.image && <img src={post.image} alt="Post Image" className="PostCardContent__image" />}
    </div>
  ) : null;
}

export default PostCardContent;
