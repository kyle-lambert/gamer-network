import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./PostFeedPage.scss";

import { resetPostReducerAction } from "../../store/actions/postActions";
import {
  showCreatePostModalAction,
  hideCurrentModalAction,
} from "../../store/actions/modalActions";

import { posts } from "../../data/placeholders";

import PostCard from "../../components/post/PostCard/PostCard";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import FetchingError from "../../components/shared/FetchingError/FetchingError";
import CreatePostModal from "../../components/modals/CreatePostModal/CreatePostModal";

function PostFeedPage(props) {
  const dispatch = useDispatch();
  const { postsLoading, postsError } = useSelector((state) => state.post);
  const { currentModal } = useSelector((state) => state.modal);

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    return () => {
      dispatch(resetPostReducerAction());
      source.cancel("Axios request canceled.");
    };
  });

  React.useEffect(() => {
    const closeCreatePostModal = () => dispatch(hideCurrentModalAction());
    return () => {
      console.log("closed create-post-modal");
      closeCreatePostModal();
    };
  }, [dispatch]);

  const openCreatePostModal = () => dispatch(showCreatePostModalAction());

  if (postsLoading) {
    return <LoadingSpinner />;
  } else if (postsError) {
    return <FetchingError />;
  } else {
    return (
      <div className="PostFeedPage">
        <header className="PostFeedPage__header">
          <button onClick={openCreatePostModal} className="PostFeedPage__add-post">
            add post
          </button>
        </header>
        <section className="PostFeedPage__cards">
          {posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </section>
        {currentModal === "CREATE_POST_MODAL" && <CreatePostModal />}
      </div>
    );
  }
}

export default PostFeedPage;
