import axios from "axios";
import { postTypes } from "../types";
import { createAlert } from "./alertActions";
import api from "../../data/api";

const COMMENT_ERROR = "No comment provided";
const POST_ID_ERROR = "Post ID is required";
const REQUEST_ERROR = "No response from server";
const REQUEST_FAILED = "Unable to make request";

const loadPostsRequest = () => ({
  type: postTypes.LOAD_POSTS_REQUEST,
});

const loadPostsSuccess = (payload) => ({
  type: postTypes.LOAD_POSTS_SUCCESS,
  payload,
});

const loadPostsFailure = () => ({
  type: postTypes.LOAD_POSTS_FAILURE,
});

const addCommentRequest = (id) => ({
  type: postTypes.ADD_COMMENT_REQUEST,
  payload: id,
});

const addCommentSuccess = (id) => ({
  type: postTypes.ADD_COMMENT_SUCCESS,
  payload: id,
});

const addCommentFailure = (id) => ({
  type: postTypes.ADD_COMMENT_FAILURE,
  payload: id,
});

export const initialisePostReducer = () => ({ type: postTypes.INITIALISE_POST_REDUCER });

export const addCommentToPost = ({ id, comment, token }) => {
  return async (dispatch) => {
    if (!comment) {
      return dispatch(createAlert(COMMENT_ERROR, true));
    }
    if (!id) {
      return dispatch(createAlert(POST_ID_ERROR, true));
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

      const payload = {
        id,
        comments: data.comments,
      };

      dispatch(addCommentSuccess(payload));

      if (!data) {
        throw new Error("No results found in response");
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      } else {
        dispatch(addCommentFailure(id));
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

export const loadPosts = (page, token) => {
  return async (dispatch) => {
    dispatch(loadPostsRequest());
    try {
      const config = {
        method: "get",
        url: "/posts",
        params: {
          page: page,
        },
        cancelToken: token,
      };
      const res = await api(config);
      const results = res?.data?.results;

      if (!results) {
        throw new Error("No results found in response");
      }

      dispatch(loadPostsSuccess(results.docs));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      } else {
        dispatch(loadPostsFailure());
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
