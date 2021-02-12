import { postTypes, commentTypes, likeTypes } from "../types";

const initState = {
  posts: [],
  postsLoading: false,
  postsError: false,
  addPostLoading: false,
  deletePostLoading: [],
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
    case postTypes.ADD_POST_REQUEST: {
      return {
        ...state,
        addPostLoading: true,
      };
    }
    case postTypes.ADD_POST_SUCCESS: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        addPostLoading: false,
      };
    }
    case postTypes.ADD_POST_FAILURE: {
      return {
        ...state,
        addPostLoading: false,
      };
    }
    case postTypes.DELETE_POST_REQUEST: {
      return {
        ...state,
        deletePostLoading: [...state.deletePostLoading, action.payload],
      };
    }
    case postTypes.DELETE_POST_SUCCESS: {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload.id),
        deletePostLoading: state.deletePostLoading.filter((id) => id !== action.payload.id),
      };
    }
    case postTypes.DELETE_POST_FAILURE: {
      return {
        ...state,
        deletePostLoading: state.deletePostLoading.filter((id) => id !== action.payload),
      };
    }
    case likeTypes.ADD_LIKE_SUCCESS: {
      const updatedPosts = state.posts.reduce((acc, post) => {
        if (post._id === action.payload.id) {
          post.likes = action.payload.likes;
        }
        return acc.concat(post);
      }, []);
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case likeTypes.DELETE_LIKE_SUCCESS: {
      const updatedPosts = state.posts.reduce((acc, post) => {
        if (post._id === action.payload.id) {
          post.likes = action.payload.likes;
        }
        return acc.concat(post);
      }, []);
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case commentTypes.ADD_COMMENT_SUCCESS: {
      const updatedPosts = state.posts.reduce((acc, post) => {
        if (post._id === action.payload.id) {
          post.comments = action.payload.comments;
        }
        return acc.concat(post);
      }, []);

      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case commentTypes.DELETE_COMMENT_SUCCESS: {
      const updatedPosts = state.posts.reduce((acc, post) => {
        if (post._id === action.payload.postId) {
          post.comments = action.payload.comments;
        }
        return acc.concat(post);
      }, []);
      return {
        ...state,
        posts: updatedPosts,
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
