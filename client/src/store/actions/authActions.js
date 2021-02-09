import { batch } from "react-redux";
import { authTypes } from "../types";
import { publishAlertAction } from "./alertActions";
import { hideCurrentModalAction, showLoginModalAction } from "./modalActions";
import setAuthorisationToken from "../../utils/setAuthorisationToken";
import api from "../../data/api";

export const logoutUserAction = () => {
  return (dispatch) => {
    batch(() => {
      dispatch({ type: authTypes.USER_LOGOUT });
      dispatch(publishAlertAction("User logged out successfully", "success"));
    });
    setAuthorisationToken(false);
  };
};

export const registerUserAction = (form) => {
  return (dispatch) => {
    const { firstName, lastName, email, password } = form;

    dispatch({ type: authTypes.REGISTER_USER_REQUEST });

    api
      .post("/users/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        batch(() => {
          dispatch({ type: authTypes.REGISTER_USER_SUCCESS });
          dispatch(showLoginModalAction());
          dispatch(publishAlertAction("User registered successfully", "success"));
        });
      })
      .catch((err) => {
        dispatch({ type: authTypes.REGISTER_USER_FAILURE });

        if (Array.isArray(err?.response?.data?.errors)) {
          err.response.data.errors.forEach((error) => {
            return dispatch(publishAlertAction(error.msg, "error"));
          });
        } else {
          dispatch(publishAlertAction("Request error", "error"));
        }
      });
  };
};

export const authenticateUserAction = (form) => {
  return async (dispatch) => {
    const { email, password } = form;

    dispatch({ type: authTypes.AUTHENTICATE_USER_REQUEST });

    api
      .post("/auth", {
        email,
        password,
      })
      .then((res) => {
        batch(() => {
          dispatch({ type: authTypes.AUTHENTICATE_USER_SUCCESS, payload: res.data });
          dispatch(hideCurrentModalAction());
          dispatch(publishAlertAction("User logged in successfully", "success"));
        });
        setAuthorisationToken(res.data.token);
      })
      .catch((err) => {
        dispatch({ type: authTypes.AUTHENTICATE_USER_FAILURE });

        if (Array.isArray(err?.response?.data?.errors)) {
          err.response.data.errors.forEach((error) => {
            return dispatch(publishAlertAction(error.msg, "error"));
          });
        } else {
          dispatch(publishAlertAction("Request error", "error"));
        }
      });
  };
};

export const loadUserAction = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.LOAD_USER_REQUEST });

    api
      .get("/auth")
      .then((res) => {
        batch(() => {
          dispatch({ type: authTypes.LOAD_USER_SUCCESS, payload: res.data.user });
          dispatch(publishAlertAction("User logged in successfully", "success"));
        });
      })
      .catch((err) => {
        dispatch({ type: authTypes.LOAD_USER_FAILURE });

        if (Array.isArray(err?.response?.data?.errors)) {
          err.response.data.errors.forEach((error) => {
            return dispatch(publishAlertAction(error.msg, "error"));
          });
        } else {
          dispatch(publishAlertAction("Request error", "error"));
        }
      });
  };
};
