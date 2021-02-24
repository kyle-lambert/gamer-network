import axios from "axios";
import { batch } from "react-redux";
import { accountTypes } from "../types";
import api from "../../data/api";
import { createAlert } from "../actions/alertActions";
import { REQUEST_ERROR, REQUEST_FAILED } from "../../data/errors";

const loadAccountProfileRequest = () => ({ type: accountTypes.LOAD_ACCOUNT_PROFILE_REQUEST });
const loadAccountProfileSuccess = (payload) => ({
  type: accountTypes.LOAD_ACCOUNT_PROFILE_SUCCESS,
  payload,
});
const loadAccountProfileFailure = () => ({ type: accountTypes.LOAD_ACCOUNT_PROFILE_FAILURE });

export const loadAccountProfile = (token) => {
  return async (dispatch) => {
    try {
      dispatch(loadAccountProfileRequest());
      const config = {
        method: "get",
        url: "/profile",
        cancelToken: token,
      };

      const res = await api(config);
      const profile = res?.data?.profile;

      if (!profile) {
        throw new Error("Problem with profile response");
      }

      dispatch(loadAccountProfileSuccess(profile));
    } catch (err) {
      dispatch(loadAccountProfileFailure());
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

const updateAccountProfileRequest = () => ({
  type: accountTypes.UPDATE_ACCOUNT_PROFILE_REQUEST,
});
const updateAccountProfileSuccess = (payload) => ({
  type: accountTypes.UPDATE_ACCOUNT_PROFILE_SUCCESS,
  payload,
});
const updateAccountProfileFailure = () => ({
  type: accountTypes.UPDATE_ACCOUNT_PROFILE_FAILURE,
});

export const updateAccountProfile = (token, form) => {
  return async (dispatch) => {
    if (!form) {
      return;
    }

    const { description, location, gamertag, platform } = form;

    try {
      dispatch(updateAccountProfileRequest());
      const config = {
        method: "put",
        url: "/profile",
        data: {
          description,
          location,
          gamertag,
          platform,
        },
        cancelToken: token,
      };

      const res = await api(config);
      const profile = res?.data?.profile;

      if (!profile) {
        throw new Error("Problem with profile response");
      }

      batch(() => {
        dispatch(updateAccountProfileSuccess(profile));
        dispatch(createAlert("Profile updated"));
      });
    } catch (err) {
      dispatch(updateAccountProfileFailure());
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

export const initialiseAccountReducer = () => ({ type: accountTypes.INITIALISE_ACCOUNT_REDUCER });
