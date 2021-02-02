import React from "react";
import "./PostFeedPage.scss";

import { posts } from "../../data/placeholders";

import PostCard from "../../components/post/PostCard/PostCard";

function PostFeedPage(props) {
  return (
    <div className="PostFeedPage">
      <section className="PostFeedPage__cards">
        {posts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </section>
    </div>
  );
}

export default PostFeedPage;
