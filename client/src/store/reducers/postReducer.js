import { postTypes } from "../types";

const initState = {
  posts: [],
  postsLoading: false,
  postsError: false,
  commentsLoading: [],
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
    case postTypes.ADD_COMMENT_REQUEST: {
      return {
        ...state,
        commentsLoading: [...state.commentsLoading, action.payload],
      };
    }
    case postTypes.ADD_COMMENT_SUCCESS: {
      const updatedPosts = state.posts.reduce((acc, post) => {
        if (post._id === action.payload.id) {
          post.comments = action.payload.comments;
        }
        return acc.concat(post);
      }, []);

      return {
        ...state,
        posts: updatedPosts,
        commentsLoading: state.commentsLoading.filter((id) => id !== action.payload.id),
      };
    }
    case postTypes.ADD_COMMENT_FAILURE: {
      return {
        ...state,
        commentsLoading: state.commentsLoading.filter((id) => id !== action.payload),
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
