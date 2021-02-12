import { likeTypes } from "../types";

const initState = {
  likesLoading: [],
};

function likeReducer(state = initState, action) {
  switch (action.type) {
    case likeTypes.ADD_LIKE_REQUEST: {
      return {
        ...state,
        likesLoading: [...state.likesLoading, action.payload],
      };
    }
    case likeTypes.ADD_LIKE_SUCCESS: {
      return {
        ...state,
        likesLoading: state.likesLoading.filter((id) => id !== action.payload.id),
      };
    }
    case likeTypes.ADD_LIKE_FAILURE: {
      return {
        ...state,
        likesLoading: state.likesLoading.filter((id) => id !== action.payload),
      };
    }
    case likeTypes.DELETE_LIKE_REQUEST: {
      return {
        ...state,
        likesLoading: [...state.likesLoading, action.payload],
      };
    }
    case likeTypes.DELETE_LIKE_SUCCESS: {
      return {
        ...state,
        likesLoading: state.likesLoading.filter((id) => id !== action.payload.id),
      };
    }
    case likeTypes.DELETE_LIKE_FAILURE: {
      return {
        ...state,
        likesLoading: state.likesLoading.filter((id) => id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
}

export default likeReducer;
