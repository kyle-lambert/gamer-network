import { postTypes, commentTypes, likeTypes } from "../types";

const initState = {
  posts: [],
  postsLoading: false,
  postsError: false,
  createPostLoading: false,
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
    case postTypes.CREATE_POST_REQUEST: {
      return {
        ...state,
        createPostLoading: true,
      };
    }
    case postTypes.CREATE_POST_SUCCESS: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        createPostLoading: false,
      };
    }
    case postTypes.CREATE_POST_FAILURE: {
      return {
        ...state,
        createPostLoading: false,
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
