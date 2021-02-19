import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./PostTabs.scss";

import { addLike, deleteLike } from "../../../store/actions/likeActions";

import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

function PostTabs({ post, commentsOpen, handleCommentsToggle }) {
  const dispatch = useDispatch();
  const sourceRef = React.useRef(null);
  const { user } = useSelector((state) => state.authReducer);
  const { likesLoading } = useSelector((state) => state.likeReducer);

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) {
        sourceRef.current.cancel();
      }
    };
  }, []);

  const likeLoading = React.useMemo(() => {
    return likesLoading.includes(post._id);
  }, [likesLoading, post._id]);

  const userLiked = React.useMemo(() => {
    return post.likes.includes(user._id);
  }, [post.likes, user._id]);

  const handleLikeToggle = () => {
    sourceRef.current = axios.CancelToken.source();
    if (userLiked) {
      dispatch(deleteLike(post._id, sourceRef.current.token));
    } else {
      dispatch(addLike(post._id, sourceRef.current.token));
    }
  };

  return (
    <ul className="PostTabs">
      <li className="PostTabs__item">
        <button
          onClick={handleLikeToggle}
          disabled={likeLoading}
          className={userLiked ? "PostTabs__btn PostTabs__btn--active" : "PostTabs__btn"}>
          {likeLoading ? <ButtonSpinner color="indigo" /> : userLiked ? "Unlike" : "Like"}
        </button>
      </li>
      <li className="PostTabs__item">
        <button
          onClick={handleCommentsToggle}
          className={commentsOpen ? "PostTabs__btn PostTabs__btn--active" : "PostTabs__btn"}>
          Comment
        </button>
      </li>
    </ul>
  );
}

export default PostTabs;
