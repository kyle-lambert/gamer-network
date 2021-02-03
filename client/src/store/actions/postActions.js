import { postTypes } from "../types";

export const resetPostReducerAction = () => {
  return (dispatch) => {
    dispatch({ type: postTypes.RESET_POST_REDUCER });
  };
};
