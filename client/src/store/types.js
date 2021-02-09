export const modalTypes = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const authTypes = {
  REGISTER_USER_REQUEST: "REGISTER_USER_REQUEST",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAILURE: "REGISTER_USER_FAILURE",
  AUTHENTICATE_USER_REQUEST: "AUTHENTICATE_USER_REQUEST",
  AUTHENTICATE_USER_SUCCESS: "AUTHENTICATE_USER_SUCCESS",
  AUTHENTICATE_USER_FAILURE: "AUTHENTICATE_USER_FAILURE",
  LOAD_USER_REQUEST: "LOAD_USER_REQUEST",
  LOAD_USER_SUCCESS: "LOAD_USER_SUCCESS",
  LOAD_USER_FAILURE: "LOAD_USER_FAILURE",
  USER_LOGGED_OUT: "USER_LOGGED_OUT",
};

export const alertTypes = {
  ALERT_ADDED: "ALERT_ADDED",
  ALERT_REMOVED: "ALERT_REMOVED",
};

export const profileTypes = {
  LOAD_PROFILE_REQUEST: "LOAD_PROFILE_REQUEST",
  LOAD_PROFILE_SUCCESS: "LOAD_PROFILE_SUCCESS",
  LOAD_PROFILE_FAILURE: "LOAD_PROFILE_FAILURE",
  INITIALISE_PROFILE_REDUCER: "INITIALISE_PROFILE_REDUCER",
};

export const postTypes = {
  LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
  LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
  LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
  INITIALISE_POST_REDUCER: "INITIALISE_POST_REDUCER",
};

export const commentTypes = {
  ADD_COMMENT_REQUEST: "ADD_COMMENT_REQUEST",
  ADD_COMMENT_SUCCESS: "ADD_COMMENT_SUCCESS",
  ADD_COMMENT_FAILURE: "ADD_COMMENT_FAILURE",
  REMOVE_COMMENT_REQUEST: "REMOVE_COMMENT_REQUEST",
  REMOVE_COMMENT_SUCCESS: "REMOVE_COMMENT_SUCCESS",
  REMOVE_COMMENT_FAILURE: "REMOVE_COMMENT_FAILURE",
  RESET_COMMENT_REDUCER: "RESET_COMMENT_REDUCER",
};

export const createPostTypes = {
  CREATE_POST_REQUEST: "CREATE_POST_REQUEST",
  CREATE_POST_SUCCESS: "CREATE_POST_SUCCESS",
  CREATE_POST_FAILURE: "CREATE_POST_FAILURE",
  RESET_CREATE_POST_REDUCER: "RESET_CREATE_POST_REDUCER",
};
