import { modalTypes } from "../types";

export const showLoginModal = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "LOGIN_MODAL" };
};

export const showSignUpModal = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "SIGN_UP_MODAL" };
};

export const showCreatePostModal = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "CREATE_POST_MODAL" };
};

export const hideCurrentModal = () => {
  return { type: modalTypes.HIDE_MODAL };
};
