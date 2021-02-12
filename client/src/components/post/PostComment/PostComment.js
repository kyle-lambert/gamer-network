import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./PostComment.scss";

import { getFullName } from "../../../utils/helpers";

import { deleteComment } from "../../../store/actions/commentActions";

import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

import Avatar from "../../shared/Avatar/Avatar";
import CircleIcon from "../../shared/CircleIcon/CircleIcon";

function PostComment({ comment, postId }) {
  const dispatch = useDispatch();
  const sourceRef = React.useRef(null);
  const { user } = useSelector((state) => state.authReducer);
  const { deleteCommentLoading } = useSelector((state) => state.commentReducer);

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) {
        sourceRef.current.cancel();
      }
    };
  }, []);

  const isAuthor = React.useMemo(() => {
    return user._id === comment.author._id;
  }, [user._id, comment.author._id]);

  const handleClick = () => {
    sourceRef.current = axios.CancelToken.source();

    dispatch(deleteComment(postId, comment._id, sourceRef.current.token));
  };

  const isLoading = React.useMemo(() => {
    return deleteCommentLoading.includes(comment._id);
  }, [deleteCommentLoading, comment._id]);

  return (
    <li className="PostComment">
      <Link to={`/profile/${comment.author._id}`} className="PostComment__avatar-link">
        <Avatar user={comment.author} />
      </Link>
      <div className="PostComment__content">
        <span className="PostComment__author">
          {getFullName(comment.author.firstName, comment.author.lastName)}
        </span>
        <div className="PostComment__bubble">
          <div className="PostComment__text">{comment.text}</div>
          {isAuthor && (
            <button onClick={handleClick} disabled={isLoading} className="PostComment__delete">
              <CircleIcon circleColor="red" iconColor="red" iconSize="small">
                {isLoading ? <ButtonSpinner color="red" /> : <DeleteIcon />}
              </CircleIcon>
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default PostComment;
