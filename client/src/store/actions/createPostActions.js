import { createPostTypes } from "../types";
import { batch } from "react-redux";
import { hideCurrentModalAction } from "../actions/modalActions";
import api from "../../data/api";

export const createNewPostAction = (form) => {
  return (dispatch) => {
    dispatch({ type: createPostTypes.CREATE_POST_REQUEST });

    setTimeout(() => {
      batch(() => {
        dispatch({ type: createPostTypes.CREATE_POST_SUCCESS });
        dispatch(hideCurrentModalAction());
      });
    }, 1500);
  };
};
