import axios from "axios";
import { postTypes } from "../types";
import { createAlert } from "./alertActions";
import api from "../../data/api";

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

export const initialisePostReducer = () => ({ type: postTypes.INITIALISE_POST_REDUCER });

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
