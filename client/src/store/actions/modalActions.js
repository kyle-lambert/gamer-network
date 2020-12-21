import { modalTypes } from "../types";

export const setLoginModalAction = (bool) => {
  return {
    type: modalTypes.SET_LOGIN_MODAL,
    payload: bool,
  };
};

export const setSignUpModalAction = (bool) => {
  return {
    type: modalTypes.SET_SIGN_UP_MODAL,
    payload: bool,
  };
};
