import { createPostTypes } from "../types";

const initState = {
  createPostLoading: false,
};

function createPostReducer(state = initState, action) {
  switch (action.type) {
    case createPostTypes.CREATE_POST_REQUEST: {
      return {
        ...state,
        createPostLoading: true,
      };
    }
    case createPostTypes.CREATE_POST_SUCCESS: {
      return {
        ...state,
        createPostLoading: false,
      };
    }
    case createPostTypes.CREATE_POST_FAILURE: {
      return {
        ...state,
        createPostLoading: false,
      };
    }
    case createPostTypes.RESET_CREATE_POST_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default createPostReducer;
