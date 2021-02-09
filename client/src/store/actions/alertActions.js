import { v4 as uuidv4 } from "uuid";
import { alertTypes } from "../types";

const addAlert = (payload) => ({
  type: alertTypes.ALERT_ADDED,
  payload,
});

const removeAlert = (id) => ({
  type: alertTypes.ALERT_REMOVED,
  payload: id,
});

export const createAlert = (message, isError, timeout = 3000) => {
  return (dispatch) => {
    const payload = {
      id: uuidv4(),
      message,
      isError,
    };

    dispatch(addAlert(payload));

    setTimeout(() => {
      dispatch(removeAlert(payload.id));
    }, timeout);
  };
};
