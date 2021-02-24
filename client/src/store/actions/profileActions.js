import { profileTypes } from "../types";
import { createAlert } from "./alertActions";
import axios from "axios";
import api from "../../data/api";
import { REQUEST_ERROR, REQUEST_FAILED } from "../../data/errors";

const PROFILE_ID_ERROR = "No profie ID provided";

const loadProfileRequest = () => ({
  type: profileTypes.LOAD_PROFILE_REQUEST,
});

const loadProfileSuccess = (payload) => ({
  type: profileTypes.LOAD_PROFILE_SUCCESS,
  payload,
});

const loadProfileFailure = () => ({
  type: profileTypes.LOAD_PROFILE_FAILURE,
});

export const initialiseProfileReducer = () => ({ type: profileTypes.INITIALISE_PROFILE_REDUCER });

export const loadProfile = (id, token) => {
  return async (dispatch) => {
    if (!id) {
      return dispatch(createAlert(PROFILE_ID_ERROR, true));
    }
    dispatch(loadProfileRequest());
    try {
      const config = {
        method: "get",
        url: `/profile/${id}`,
        cancelToken: token,
      };
      const res = await api(config);
      const profile = res?.data?.profile;

      if (!profile) {
        throw new Error("No profile found");
      }

      dispatch(loadProfileSuccess(profile));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      } else {
        dispatch(loadProfileFailure());
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
