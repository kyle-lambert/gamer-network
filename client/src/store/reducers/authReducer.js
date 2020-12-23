import { authTypes } from "../types";

const initState = {
  token: null,
  user: null,
  isAuthenticated: false,
  authenticationLoading: false,
  registerLoading: false,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case authTypes.REGISTER_USER_REQUEST: {
      return {
        ...state,
        registerLoading: true,
      };
    }
    case authTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerLoading: false,
      };
    }
    case authTypes.REGISTER_USER_FAILURE: {
      return {
        ...state,
        registerLoading: false,
      };
    }
    case authTypes.AUTHENTICATE_USER_REQUEST: {
      return {
        ...state,
        authenticationLoading: true,
      };
    }
    case authTypes.AUTHENTICATE_USER_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        authenticationLoading: false,
        user,
        token,
      };
    }
    case authTypes.AUTHENTICATE_USER_FAILURE: {
      return {
        ...state,
        authenticationLoading: false,
      };
    }
    case authTypes.USER_LOGOUT: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
