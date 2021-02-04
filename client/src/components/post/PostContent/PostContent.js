import React from "react";
import "./PostContent.scss";

function PostContent({ post }) {
  return post ? (
    <div className="PostContent">
      <p className="PostContent__text">{post.text ? post.text : "No text"}</p>
      {post.image && <img src={post.image} alt="Post content" className="PostContent__image" />}
    </div>
  ) : null;
}

export default PostContent;
