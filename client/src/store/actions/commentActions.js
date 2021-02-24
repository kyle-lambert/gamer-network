import axios from "axios";
import { batch } from "react-redux";
import { commentTypes } from "../types";
import { createAlert } from "../actions/alertActions";
import api from "../../data/api";
import { REQUEST_ERROR, REQUEST_FAILED } from "../../data/errors";

const addCommentRequest = (id) => ({ type: commentTypes.ADD_COMMENT_REQUEST, payload: id });
const addCommentSuccess = (payload) => ({ type: commentTypes.ADD_COMMENT_SUCCESS, payload });
const addCommentFailure = (id) => ({ type: commentTypes.ADD_COMMENT_FAILURE, payload: id });

export const addComment = ({ id, comment, token }) => {
  return async (dispatch) => {
    if (!comment) {
      return dispatch(createAlert("Comment text is required", true));
    }
    if (!id) {
      return dispatch(createAlert("Post ID is required", true));
    }

    try {
      dispatch(addCommentRequest(id));
      const config = {
        method: "post",
        url: `/posts/comment/${id}`,
        data: {
          text: comment,
        },
        cancelToken: token,
      };

      const res = await api(config);
      const data = res?.data;

      if (!data) {
        throw new Error("No results found in response");
      }

      const payload = {
        id,
        comments: data.comments,
      };

      batch(() => {
        dispatch(addCommentSuccess(payload));
        dispatch(createAlert("Comment added", false));
      });
    } catch (err) {
      dispatch(addCommentFailure(id));
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      } else {
        if (err.response) {
          const errors = err.response?.data?.errors;
          if (errors) {
            errors.forEach((error) => {
              dispatch(createAlert(error.msg, true));
            });
          }
        } else if (err.request) {
          dispatch(createAlert(REQUEST_ERROR, true));
        } else {
          dispatch(createAlert(REQUEST_FAILED, true));
        }
      }
    }
  };
};

const deleteCommentRequest = (id) => ({ type: commentTypes.DELETE_COMMENT_REQUEST, payload: id });
const deleteCommentSuccess = (payload) => ({ type: commentTypes.DELETE_COMMENT_SUCCESS, payload });
const deleteCommentFailure = (id) => ({ type: commentTypes.DELETE_COMMENT_FAILURE, payload: id });

export const deleteComment = (postId, commentId, token) => {
  return async (dispatch) => {
    if (!postId || !commentId) {
      return dispatch(createAlert("Post ID and comment ID are required", true));
    }

    try {
      dispatch(deleteCommentRequest(commentId));

      const config = {
        method: "delete",
        url: `/posts/comment/${postId}/${commentId}`,
        cancelToken: token,
      };

      const res = await api(config);
      const data = res?.data;

      if (!data) {
        console.log("errrorrrr");
        throw new Error("No results found in response");
      }

      const payload = {
        postId,
        commentId,
        comments: data.comments,
      };

      batch(() => {
        dispatch(deleteCommentSuccess(payload));
        dispatch(createAlert("Comment deleted", false));
      });
    } catch (err) {
      dispatch(deleteCommentFailure(commentId));
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      } else {
        if (err.response) {
          const errors = err.response?.data?.errors;
          if (errors) {
            errors.forEach((error) => {
              dispatch(createAlert(error.msg, true));
            });
          }
        } else if (err.request) {
          dispatch(createAlert(REQUEST_ERROR, true));
        } else {
          dispatch(createAlert(REQUEST_FAILED, true));
        }
      }
    }
  };
};
