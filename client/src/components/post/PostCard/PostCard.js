import React from "react";
import "./PostCard.scss";

import { comments } from "../../../data/placeholders";

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
      <PostEngagement />
      <PostTabs handleCommentsToggle={handleCommentsToggle} commentsOpen={commentsOpen} />
      {commentsOpen && <PostCommentFeed comments={comments} />}
    </article>
  );
}

export default PostCard;
