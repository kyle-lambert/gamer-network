import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./PostFeedPage.scss";

import { initialisePostReducer } from "../../store/actions/postActions";
import { showCreatePostModal, hideCurrentModal } from "../../store/actions/modalActions";
import { loadPosts } from "../../store/actions/postActions";

import PostCard from "../../components/post/PostCard/PostCard";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import FetchingError from "../../components/shared/FetchingError/FetchingError";
import CreatePostModal from "../../components/modals/CreatePostModal/CreatePostModal";

function PostFeedPage(props) {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);
  const { currentModal } = useSelector((state) => state.modal);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch(loadPosts(1, source.token));

    return () => {
      source.cancel();
      dispatch(initialisePostReducer());
    };
  }, [dispatch]);

  React.useEffect(() => {
    const closeCreatePostModal = () => dispatch(hideCurrentModal());
    return () => {
      closeCreatePostModal();
    };
  }, [dispatch]);

  const openCreatePostModal = () => dispatch(showCreatePostModal());

  if (postsLoading) {
    return <LoadingSpinner />;
  } else if (postsError) {
    return <FetchingError />;
  } else {
    return posts.length > 0 ? (
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
    ) : null;
  }
}

export default PostFeedPage;
