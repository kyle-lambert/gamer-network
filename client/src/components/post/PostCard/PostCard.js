import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./PostCard.scss";

import { deletePost } from "../../../store/actions/postActions";

import UserInfoGroup from "../../shared/UserInfoGroup/UserInfoGroup";
import PostContent from "../PostContent/PostContent";
import PostTabs from "../PostTabs/PostTabs";
import PostCommentFeed from "../PostCommentFeed/PostCommentFeed";
import PostEngagement from "../PostEngagement/PostEngagement";

import CircleIcon from "../../shared/CircleIcon/CircleIcon";
import ButtonSpinner from "../../shared/ButtonSpinner/ButtonSpinner";

import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";

function PostCard({ post }) {
  const dispatch = useDispatch();
  const sourceRef = React.useRef(null);
  const [commentsOpen, setCommentsOpen] = React.useState(false);
  const { user } = useSelector((state) => state.authReducer);
  const { deletePostLoading } = useSelector((state) => state.postReducer);

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) {
        sourceRef.current.cancel();
      }
    };
  }, []);

  const handleCommentsToggle = () => setCommentsOpen((prev) => !prev);

  const isLoading = React.useMemo(() => {
    return deletePostLoading.includes(post._id);
  }, [deletePostLoading, post._id]);

  const isAuthor = React.useMemo(() => {
    return user._id === post.author._id;
  }, [user._id, post.author._id]);

  const handleClick = () => {
    sourceRef.current = axios.CancelToken.source();
    dispatch(deletePost(post._id, sourceRef.current.token));
  };

  return (
    <article className="PostCard">
      <div className="PostCard__author">
        <UserInfoGroup user={post.author} />
      </div>
      <PostContent post={post} />
      <PostEngagement comments={post.comments} likes={post.likes} />
      <PostTabs
        post={post}
        handleCommentsToggle={handleCommentsToggle}
        commentsOpen={commentsOpen}
      />
      {commentsOpen && <PostCommentFeed post={post} />}
      {isAuthor && (
        <button onClick={handleClick} disabled={isLoading} className="PostCard__delete">
          <CircleIcon circleColor="red" iconColor="red" iconSize="small">
            {isLoading ? <ButtonSpinner color="red" /> : <DeleteIcon />}
          </CircleIcon>
        </button>
      )}
    </article>
  );
}

export default PostCard;
