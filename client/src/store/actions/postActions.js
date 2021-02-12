import axios from "axios";
import { postTypes } from "../types";
import { createAlert } from "./alertActions";
import api from "../../data/api";
import { batch } from "react-redux";
import { hideCurrentModal } from "./modalActions";

const REQUEST_ERROR = "No response from server";
const REQUEST_FAILED = "Unable to make request";

export const initialisePostReducer = () => ({ type: postTypes.INITIALISE_POST_REDUCER });

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

const createPostRequest = () => ({
  type: postTypes.CREATE_POST_REQUEST,
});

const createPostSuccess = (payload) => ({
  type: postTypes.CREATE_POST_SUCCESS,
  payload,
});

const createPostFailure = () => ({
  type: postTypes.CREATE_POST_FAILURE,
});

export const createPost = (form, token) => {
  return async (dispatch) => {
    if (!form) {
      return dispatch(createAlert("Post text is required", true));
    }

    const { text, image } = form;

    try {
      dispatch(createPostRequest());
      const config = {
        method: "post",
        url: "/posts",
        data: {
          text,
          image,
        },
        cancelToken: token,
      };

      const res = await api(config);
      const post = res?.data?.post;

      if (!post) {
        throw new Error("Error found in response");
      }

      batch(() => {
        dispatch(createPostSuccess(post));
        dispatch(hideCurrentModal());
        dispatch(createAlert("Post created", false));
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      } else {
        dispatch(createPostFailure());
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
