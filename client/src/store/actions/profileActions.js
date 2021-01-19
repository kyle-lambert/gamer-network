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
            console.log("Request canceled", err.message);
          }

          if (err.response) {
            console.log(err.response);
          } else {
            dispatch(publishAlertAction("Unable to make request", "error"));
          }

          dispatch({ type: profileTypes.USER_PROFILE_FAILURE });
        });
    } else {
      dispatch(publishAlertAction("No ID provided", "error"));
    }
  };
};

export const resetProfileReducerAction = () => {
  return (dispatch) => {
    dispatch({ type: profileTypes.RESET_PROFILE_REDUCER });
  };
};
