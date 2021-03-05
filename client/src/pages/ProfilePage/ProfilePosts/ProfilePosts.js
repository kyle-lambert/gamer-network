import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ProfilePosts.scss";

import { loadPostsById, initialisePostReducer } from "../../../store/actions/postActions";

import PostCard from "../../../components/post/PostCard/PostCard";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";
import FetchingError from "../../../components/shared/FetchingError/FetchingError";
import Message from "../../../components/shared/Message/Message";

function ProfilePosts(props) {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);
  const params = useParams();

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    const options = {
      page: 1,
      id: params.id,
      token: source.token,
    };

    dispatch(loadPostsById(options));

    return () => {
      source.cancel();
      dispatch(initialisePostReducer());
    };
  }, [dispatch, params.id]);

  const renderCardJSX = () => {
    if (postsLoading) {
      return <LoadingSpinner />;
    } else if (postsError) {
      return <FetchingError />;
    } else {
      return posts.length > 0 ? (
        <div className="ProfilePosts__cards">
          {posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      ) : (
        <Message message="Sorry, there are currently no posts for this user." />
      );
    }
  };

  return <section className="ProfilePosts">{renderCardJSX()}</section>;
}

export default ProfilePosts;
