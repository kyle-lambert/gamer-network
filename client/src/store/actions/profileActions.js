import { profileTypes } from "../types";
import { publishAlertAction } from "./alertActions";
import axios from "axios";
import api from "../../data/api";

export const getProfileByIdAction = (id, token) => {
  return async (dispatch) => {
    if (id) {
      dispatch({ type: profileTypes.USER_PROFILE_REQUEST });
      api
        .get(`/profile/${id}`, { cancelToken: token })
        .then((res) => {
          dispatch({ type: profileTypes.USER_PROFILE_SUCCESS, payload: res.data.profile });
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            dispatch({ type: profileTypes.RESET_PROFILE_REDUCER });
            console.log("Request canceled", err.message);
          } else {
            dispatch({ type: profileTypes.USER_PROFILE_FAILURE });

            if (Array.isArray(err?.response?.data?.errors)) {
              err.response.data.errors.forEach((error) => {
                return dispatch(publishAlertAction(error.msg, "error"));
              });
            } else {
              dispatch(publishAlertAction("Request error", "error"));
            }
          }
        });
    } else {
      dispatch(publishAlertAction("Please provide user ID", "error"));
    }
  };
};

export const resetProfileReducerAction = () => {
  return (dispatch) => {
    dispatch({ type: profileTypes.RESET_PROFILE_REDUCER });
  };
};
