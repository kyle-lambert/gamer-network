import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostComment.scss";

import { getFullName } from "../../../utils/helpers";

import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

import Avatar from "../../shared/Avatar/Avatar";
import CircleIcon from "../../shared/CircleIcon/CircleIcon";

function PostComment({ comment }) {
  const { user } = useSelector((state) => state.authReducer);

  const isAuthor = React.useMemo(() => {
    return user._id === comment.author._id;
  }, [user._id, comment.author._id]);

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
            <button className="PostComment__remove">
              <CircleIcon circleColor="red" iconColor="red" iconSize="small">
                {true ? <DeleteIcon /> : <ButtonSpinner color="red" />}
              </CircleIcon>
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default PostComment;
