import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PostCommentFeed.scss";

import { ReactComponent as SendComment } from "../../../assets/icons/send_comment.svg";

import Avatar from "../../shared/Avatar/Avatar";
import Icon from "../../shared/Icon/Icon";
import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

import PostCommentInput from "../PostCommentInput/PostCommentInput";
import PostComment from "../PostComment/PostComment";

function PostCommentFeed({ comments }) {
  const { user } = useSelector((state) => state.auth);
  const commentRef = React.useRef(null);
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    if (commentRef.current) {
      commentRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("comment submitted");
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
            disabled={comment ? false : true}
            className="PostCommentFeed__submit">
            <Icon color="indigo">{false ? <ButtonSpinner color="indigo" /> : <SendComment />}</Icon>
          </button>
        </form>
      </div>
      <ul className="PostCommentFeed__list">
        {comments.map((comment) => {
          return <PostComment key={comment._id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}

export default PostCommentFeed;
