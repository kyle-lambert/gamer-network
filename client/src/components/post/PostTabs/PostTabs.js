import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./PostTabs.scss";

import { addLike, removeLike } from "../../../store/actions/postActions";

import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

function PostTabs({ post, commentsOpen, handleCommentsToggle }) {
  const dispatch = useDispatch();
  const sourceRef = React.useRef(null);
  const { user } = useSelector((state) => state.authReducer);
  const { likesLoading } = useSelector((state) => state.postReducer);

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) {
        sourceRef.current.cancel();
      }
    };
  }, []);

  const isLoading = React.useMemo(() => {
    return likesLoading.includes(post._id);
  }, [likesLoading, post._id]);

  const userLiked = React.useMemo(() => {
    return post.likes.includes(user._id);
  }, [post.likes, user._id]);

  const handleLikeToggle = () => {
    sourceRef.current = axios.CancelToken.source();
    if (userLiked) {
      dispatch(removeLike(post._id, sourceRef.current.token));
    } else {
      dispatch(addLike(post._id, sourceRef.current.token));
    }
  };

  return (
    <ul className="PostTabs">
      <li className="PostTabs__item">
        <button onClick={handleLikeToggle} disabled={isLoading} className="PostTabs__btn">
          {isLoading ? <ButtonSpinner color="indigo" /> : userLiked ? "Unlike" : "Like"}
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
