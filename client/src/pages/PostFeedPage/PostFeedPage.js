import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./PostFeedPage.scss";

import { initialisePostReducer } from "../../store/actions/postActions";
import { showCreatePostModal, hideCurrentModal } from "../../store/actions/modalActions";
import { loadPosts } from "../../store/actions/postActions";

import Button from "../../components/shared/Button/Button";
import PostCard from "../../components/post/PostCard/PostCard";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import FetchingError from "../../components/shared/FetchingError/FetchingError";
import CreatePostModal from "../../components/modals/CreatePostModal/CreatePostModal";
import PageHeaderAction from "../../components/shared/PageHeaderAction/PageHeaderAction";
import Message from "../../components/shared/Message/Message";

function PostFeedPage(props) {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);
  const { currentModal } = useSelector((state) => state.modalReducer);

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

  const renderCardJSX = () => {
    if (postsLoading) {
      return <LoadingSpinner />;
    } else if (postsError) {
      return <FetchingError />;
    } else {
      return posts.length > 0 ? (
        <div className="PostFeedPage__cards">
          {posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      ) : (
        <Message message="Sorry, there are currently no posts." />
      );
    }
  };

  return (
    <div className="PostFeedPage">
      <PageHeaderAction heading="Post Feed" subheading="Create a post and share it with the world.">
        <Button type="button" color="indigo" onClick={openCreatePostModal}>
          Create Post
        </Button>
      </PageHeaderAction>
      <section>{renderCardJSX()}</section>
      {currentModal === "CREATE_POST_MODAL" && <CreatePostModal />}
    </div>
  );
}

export default PostFeedPage;
