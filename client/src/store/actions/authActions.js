import { authTypes } from "../types";
import { setAlertAction } from "./alertActions";
import api from "../../data/api";

export const logoutUserAction = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.USER_LOGOUT });
    dispatch(setAlertAction("Logout Success"));
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
        dispatch(setAlertAction("Register success", "success"));
      })
      .catch((err) => {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlertAction(error.msg, "error"));
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
        console.log(res);
        // dispatch({ type: authTypes.AUTHENTICATE_USER_SUCCESS });
        dispatch(setAlertAction("Login success", "success"));
      })
      .catch((err) => {
        const errors = err.response.data.errors;

        if (errors && Array.isArray(errors)) {
          errors.forEach((error) => {
            dispatch(setAlertAction(error.msg, "error"));
          });
        }

        dispatch({ type: authTypes.AUTHENTICATE_USER_FAILURE });
      });
  };
};
