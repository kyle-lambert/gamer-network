import { postTypes } from "../types";

const initState = {
  posts: [],
  postsLoading: false,
  postsError: false,
};

function postReducer(state = initState, action) {
  switch (action.type) {
    case postTypes.LOAD_POSTS_REQUEST: {
      return {
        ...state,
        postsLoading: true,
      };
    }
    case postTypes.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      };
    }
    case postTypes.LOAD_POSTS_FAILURE: {
      return {
        ...state,
        postsLoading: false,
        postsError: true,
      };
    }
    case postTypes.INITIALISE_POST_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default postReducer;
