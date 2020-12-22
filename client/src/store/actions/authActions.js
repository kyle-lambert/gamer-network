import { authTypes } from "../types";
import { setAlertAction } from "./alertActions";

export const logoutUserAction = () => {
  return (dispatch) => {
    dispatch({ type: authTypes.LOGOUT_USER });
    dispatch(setAlertAction("User logged out"));
  };
};
