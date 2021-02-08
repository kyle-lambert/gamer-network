import { postTypes } from "../types";

const initState = {
  posts: [],
  postsLoading: false,
  postsError: false,
  createPostLoading: false,
  createPostError: false,
  page: 1,
};

function postReducer(state = initState, action) {
  switch (action.type) {
    case postTypes.POSTS_BY_PAGE_REQUEST: {
      return {
        ...state,
        postsLoading: true,
      };
    }
    case postTypes.POSTS_BY_PAGE_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      };
    }
    case postTypes.POSTS_BY_PAGE_FAILURE: {
      return {
        ...state,
        postsLoading: false,
        postsError: true,
      };
    }
    case postTypes.RESET_POST_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default postReducer;
