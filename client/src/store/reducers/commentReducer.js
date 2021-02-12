import { commentTypes } from "../types";

const initState = {
  commentsLoading: [],
  deleteCommentLoading: [],
};

function commentReducer(state = initState, action) {
  switch (action.type) {
    case commentTypes.ADD_COMMENT_REQUEST: {
      return {
        ...state,
        commentsLoading: [...state.commentsLoading, action.payload],
      };
    }
    case commentTypes.ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        commentsLoading: state.commentsLoading.filter((id) => id !== action.payload.id),
      };
    }
    case commentTypes.ADD_COMMENT_FAILURE: {
      return {
        ...state,
        commentsLoading: state.commentsLoading.filter((id) => id !== action.payload),
      };
    }
    case commentTypes.DELETE_COMMENT_REQUEST: {
      return {
        ...state,
        deleteCommentLoading: [...state.deleteCommentLoading, action.payload],
      };
    }
    case commentTypes.DELETE_COMMENT_SUCCESS: {
      return {
        ...state,
        deleteCommentLoading: state.deleteCommentLoading.filter(
          (id) => id !== action.payload.commentId
        ),
      };
    }
    case commentTypes.DELETE_COMMENT_FAILURE: {
      return {
        ...state,
        deleteCommentLoading: state.deleteCommentLoading.filter((id) => id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
}

export default commentReducer;
