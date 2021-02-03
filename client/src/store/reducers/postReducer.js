import { postTypes } from "../types";

const initState = {
  posts: [],
  postsLoading: false,
  postsError: false,
};

function postReducer(state = initState, action) {
  switch (action.type) {
    case postTypes.RESET_POST_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default postReducer;
