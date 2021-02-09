import { createPostTypes } from "../types";
import { batch } from "react-redux";
import { hideCurrentModal } from "../actions/modalActions";
import { createAlert } from "../actions/alertActions";
import api from "../../data/api";
import { getPostsByPage } from "./postActions";

export const createNewPostAction = (form, token) => {
  return (dispatch) => {
    // const { text, image } = form;
    // dispatch({ type: createPostTypes.CREATE_POST_REQUEST });
    // api
    //   .post("/posts", { text, image }, { cancelToken: token })
    //   .then((res) => {
    //     batch(() => {
    //       dispatch({ type: createPostTypes.CREATE_POST_SUCCESS });
    //       dispatch(publishAlertAction("Post created", "success"));
    //       dispatch(hideCurrentModal());
    //       // dispatch(getPostsByPage(token));
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({ type: createPostTypes.CREATE_POST_FAILURE });
    //     if (Array.isArray(err?.response?.data?.errors)) {
    //       err.response.data.errors.forEach((error) => {
    //         return dispatch(publishAlertAction(error.msg, "error"));
    //       });
    //     } else {
    //       dispatch(publishAlertAction("Request error", "error"));
    //     }
    //   });
  };
};
