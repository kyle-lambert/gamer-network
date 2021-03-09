import axios from "axios";
import { batch } from "react-redux";
import { authTypes } from "../types";
import { createAlert } from "./alertActions";
import { hideCurrentModal, showLoginModal } from "./modalActions";
import setAuthorisationToken from "../../utils/setAuthorisationToken";
import { REQUEST_ERROR, REQUEST_FAILED } from "../../data/errors";
import api from "../../data/api";

const LOGGED_IN = "User logged in";
const LOGGED_OUT = "User logged out";
const REGISTERED = "Account registered";

const logout = () => ({ type: authTypes.USER_LOGGED_OUT });

const registerUserRequest = () => ({ type: authTypes.REGISTER_USER_REQUEST });
const registerUserSuccess = () => ({ type: authTypes.REGISTER_USER_SUCCESS });
const registerUserFailure = () => ({ type: authTypes.REGISTER_USER_FAILURE });

const authenticateUserRequest = () => ({ type: authTypes.AUTHENTICATE_USER_REQUEST });
const authenticateUserSuccess = (payload) => ({
  type: authTypes.AUTHENTICATE_USER_SUCCESS,
  payload,
});
const authenticateUserFailure = () => ({ type: authTypes.AUTHENTICATE_USER_FAILURE });

const loadUserRequest = () => ({ type: authTypes.LOAD_USER_REQUEST });
const loadUserSuccess = (payload) => ({ type: authTypes.LOAD_USER_SUCCESS, payload });
const loadUserFailure = () => ({ type: authTypes.LOAD_USER_FAILURE });

export const logoutUser = (history) => {
  return (dispatch) => {
    batch(() => {
      dispatch(logout());
      dispatch(createAlert(LOGGED_OUT, false));
    });
    setAuthorisationToken(false);
    history.push("/");
  };
};

export const registerUser = (form) => {
  return async (dispatch) => {
    if (!form) {
      return;
    }

    const { firstName, lastName, email, password } = form;

    try {
      dispatch(registerUserRequest());

      const config = {
        method: "post",
        url: "/users/register",
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      };

      await api(config);

      batch(() => {
        dispatch(registerUserSuccess());
        dispatch(showLoginModal());
        dispatch(createAlert(REGISTERED, false));
      });
    } catch (err) {
      dispatch(registerUserFailure());
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
  };
};

export const authenticateUser = (form, history, token) => {
  return async (dispatch) => {
    if (!form) {
      return;
    }

    const { email, password } = form;

    try {
      dispatch(authenticateUserRequest());

      const config = {
        method: "post",
        url: "/auth",
        token,
        data: {
          email,
          password,
        },
      };

      const res = await api(config);
      const data = res?.data;

      if (!data) {
        throw new Error("No data found in response");
      }

      batch(() => {
        dispatch(authenticateUserSuccess(data));
        dispatch(hideCurrentModal());
        dispatch(createAlert(LOGGED_IN, false));
      });
      setAuthorisationToken(data.token);
      history.push("/posts");
    } catch (err) {
      dispatch(authenticateUserFailure());
      if (axios.isCancel(err)) {
        console.log("Axios request cancelled");
      }

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
  };
};

export const loadUser = (history) => {
  return async (dispatch) => {
    try {
      dispatch(loadUserRequest());
      const config = {
        method: "get",
        url: "/auth",
      };

      const res = await api(config);
      const data = res?.data;

      if (!data) {
        throw new Error("No data found in response");
      }

      batch(() => {
        dispatch(loadUserSuccess(data.user));
        dispatch(createAlert(LOGGED_IN, false));
      });
      history.push("/dashboard");
    } catch (err) {
      dispatch(loadUserFailure());
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
  };
};
