import { authTypes } from "../types";
import { setAlertAction } from "./alertActions";
import api from "../../data/api";

export const logoutUserAction = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.USER_LOGOUT });
    dispatch(setAlertAction("Logout Success"));
  };
};

export const loginUserAction = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: authTypes.USER_LOGIN_LOADING, payload: true });

    try {
      const data = await api({
        method: "post",
        data: {
          email,
          password,
        },
      });

      dispatch({ type: authTypes.USER_LOGIN_SUCCESS, data });
      dispatch(setAlertAction("Login Success"));
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlertAction(error.msg));
        });
      }

      dispatch({ type: authTypes.USER_LOGIN_FAILURE });
    }
  };
};
