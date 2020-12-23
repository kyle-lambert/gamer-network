import { authTypes } from "../types";
import avatar from "../../assets/avatar.jpg";

const user = {
  id: 12345,
  firstName: "Troy",
  lastName: "Lambert",
  hexColor: "#3498DB",
  avatar: avatar,
};

const initState = {
  token: null,
  user: null,
  isAuthenticated: false,
  authenticationLoading: false,
  authenticationFailure: false,
  registerLoading: false,
  registerFailure: false,
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
        registerFailure: true,
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
        authenticationFailure: true,
      };
    }
    case authTypes.USER_LOGOUT: {
      return {
        token: null,
        user: null,
        isAuthenticated: false,
        authenticationLoading: false,
        authenticationFailure: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
