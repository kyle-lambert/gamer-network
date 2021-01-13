import { authTypes } from "../types";
import { publishAlertAction } from "./alertActions";
import { hideCurrentModalAction, showLoginModalAction } from "./modalActions";
import api from "../../data/api";

export const logoutUserAction = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.USER_LOGOUT });
    dispatch(publishAlertAction("Logout Success", "success"));
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
        dispatch({ type: authTypes.REGISTER_USER_SUCCESS });
        dispatch(showLoginModalAction());
        dispatch(publishAlertAction("Register success", "success"));
      })
      .catch((err) => {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(publishAlertAction(error.msg, "error"));
          });
        }

        dispatch({ type: authTypes.REGISTER_USER_FAILURE });
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
        dispatch({ type: authTypes.AUTHENTICATE_USER_SUCCESS, payload: res.data });
        dispatch(hideCurrentModalAction());
        dispatch(publishAlertAction("Login success", "success"));
      })
      .catch((err) => {
        if (err.response) {
          if (err.response) {
            console.log(err.response);
          }
        } else {
          dispatch(publishAlertAction("Unable to make request", "error"));
        }
        // if (errors && Array.isArray(errors)) {
        //   errors.forEach((error) => {
        //     dispatch(publishAlertAction(error.msg, "error"));
        //   });
        // }

        dispatch({ type: authTypes.AUTHENTICATE_USER_FAILURE });
      });
  };
};
