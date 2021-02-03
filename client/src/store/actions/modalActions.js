import { modalTypes } from "../types";

export const showLoginModalAction = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "LOGIN_MODAL" };
};

export const showSignUpModalAction = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "SIGN_UP_MODAL" };
};

export const showCreatePostModalAction = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "CREATE_POST_MODAL" };
};

export const hideCurrentModalAction = () => {
  return { type: modalTypes.HIDE_MODAL };
};
