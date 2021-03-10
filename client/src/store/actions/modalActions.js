import { modalTypes } from "../types";

export const toggleLandingModal = () => {
  return { type: modalTypes.TOGGLE_LANDING_MODAL };
};

export const showCreatePostModal = () => {
  return { type: modalTypes.SHOW_MODAL, payload: "CREATE_POST_MODAL" };
};

export const hideCurrentModal = () => {
  return { type: modalTypes.HIDE_MODAL };
};

export const initialiseModalReducer = () => {
  return { type: modalTypes.INITIALISE_MODAL_REDUCER };
};
