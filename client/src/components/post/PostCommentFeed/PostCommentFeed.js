import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./PostCommentFeed.scss";

import { ReactComponent as SendComment } from "../../../assets/icons/send_comment.svg";

import { addComment } from "../../../store/actions/commentActions";

import Avatar from "../../shared/Avatar/Avatar";
import Icon from "../../shared/Icon/Icon";
import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

import PostCommentInput from "../PostCommentInput/PostCommentInput";
import PostComment from "../PostComment/PostComment";

function PostCommentFeed({ post }) {
  const { user } = useSelector((state) => state.authReducer);
  const { commentsLoading } = useSelector((state) => state.commentReducer);
  const dispatch = useDispatch();
  const sourceRef = React.useRef(null);
  const commentRef = React.useRef(null);
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    if (commentRef.current) {
      commentRef.current.focus();
    }
  }, []);

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) sourceRef.current.cancel();
    };
  }, []);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const commentLoading = commentsLoading.includes(post._id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      sourceRef.current = axios.CancelToken.source();
      const options = {
        id: post._id,
        comment,
        token: sourceRef.current.token,
      };
      dispatch(addComment(options));
      setComment("");
    }
  };

  return (
    <div className="PostCommentFeed">
      <div className="PostCommentFeed__form-wrap">
        <Link to={`/profile/${user._id}`} className="PostComment__avatar-link">
          <Avatar user={user} />
        </Link>
        <form onSubmit={handleSubmit} className="PostCommentFeed__form">
          <PostCommentInput
            value={comment}
            ref={commentRef}
            onChange={handleChange}
            placeholder="Add a comment here..."
          />
          <button
            type="submit"
            disabled={!comment || commentLoading ? true : false}
            className="PostCommentFeed__submit">
            <Icon color="indigo">
              {commentLoading ? <ButtonSpinner color="indigo" /> : <SendComment />}
            </Icon>
          </button>
        </form>
      </div>
      {Array.isArray(post.comments) && post.comments.length > 0 && (
        <ul className="PostCommentFeed__list">
          {post.comments.map((comment) => {
            return <PostComment key={comment._id} comment={comment} postId={post._id} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default PostCommentFeed;
