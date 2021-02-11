import React from "react";
import "./PostCard.scss";

import UserInfoGroup from "../../shared/UserInfoGroup/UserInfoGroup";
import PostContent from "../PostContent/PostContent";
import PostTabs from "../PostTabs/PostTabs";
import PostCommentFeed from "../PostCommentFeed/PostCommentFeed";
import PostEngagement from "../PostEngagement/PostEngagement";

function PostCard({ post }) {
  const [commentsOpen, setCommentsOpen] = React.useState(false);

  const handleCommentsToggle = () => setCommentsOpen((prev) => !prev);

  return (
    <article className="PostCard">
      <div className="PostCard__author">
        <UserInfoGroup user={post.author} />
      </div>
      <PostContent post={post} />
      <PostEngagement comments={post.comments} likes={post.likes} />
      <PostTabs
        post={post}
        handleCommentsToggle={handleCommentsToggle}
        commentsOpen={commentsOpen}
      />
      {commentsOpen && <PostCommentFeed post={post} />}
    </article>
  );
}

export default PostCard;
