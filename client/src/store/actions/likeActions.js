import axios from "axios";
import { batch } from "react-redux";
import { likeTypes } from "../types";
import { createAlert } from "../actions/alertActions";
import api from "../../data/api";

const REQUEST_ERROR = "No response from server";
const REQUEST_FAILED = "Unable to make request";

const addLikeRequest = (id) => ({
  type: likeTypes.ADD_LIKE_REQUEST,
  payload: id,
});

const addLikeSuccess = (payload) => ({
  type: likeTypes.ADD_LIKE_SUCCESS,
  payload,
});

const addLikeFailure = (id) => ({
  type: likeTypes.ADD_LIKE_FAILURE,
  payload: id,
});

export const addLike = (id, token) => {
  return async (dispatch) => {
    if (!id) {
      return dispatch(createAlert("Must provide post ID", true));
    }

    try {
      dispatch(addLikeRequest(id));

      const config = {
        method: "post",
        url: `/posts/like/${id}`,
        cancelToken: token,
      };

      const res = await api(config);
      const data = res?.data;

      if (!data) {
        throw new Error("No results found in response");
      }

      const payload = {
        id,
        likes: data.likes,
      };

      batch(() => {
        dispatch(addLikeSuccess(payload));
        dispatch(createAlert("Liked added", false));
      });
    } catch (err) {
      dispatch(addLikeFailure(id));
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

const deleteLikeRequest = (id) => ({
  type: likeTypes.DELETE_LIKE_REQUEST,
  payload: id,
});

const deleteLikeSuccess = (payload) => ({
  type: likeTypes.DELETE_LIKE_SUCCESS,
  payload,
});

const deleteLikeFailure = (id) => ({
  type: likeTypes.DELETE_LIKE_FAILURE,
  payload: id,
});

export const deleteLike = (id, token) => {
  return async (dispatch) => {
    if (!id) {
      return dispatch(createAlert("Must provide post ID", true));
    }

    try {
      dispatch(deleteLikeRequest(id));

      const config = {
        method: "post",
        url: `/posts/unlike/${id}`,
        cancelToken: token,
      };

      const res = await api(config);
      const data = res?.data;

      if (!data) {
        throw new Error("No results found in response");
      }

      const payload = {
        id,
        likes: data.likes,
      };

      batch(() => {
        dispatch(deleteLikeSuccess(payload));
        dispatch(createAlert("Like deleted", false));
      });
    } catch (err) {
      dispatch(deleteLikeFailure(id));
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
