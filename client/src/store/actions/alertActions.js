import { v4 as uuidv4 } from "uuid";
import { alertTypes } from "../types";

export const setAlertAction = (msg, type, timeout = 5000) => {
  return (dispatch) => {
    const alert = {
      id: uuidv4(),
      msg,
      type,
    };

    dispatch({ type: alertTypes.SET_ALERT, payload: alert });

    setTimeout(() => {
      dispatch({ type: alertTypes.REMOVE_ALERT, payload: alert.id });
    }, timeout);
  };
};
