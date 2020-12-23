import { authTypes } from "../types";
import avatar from "../../assets/avatar.jpg";

const initState = {
  token: null,
  isAuthenticated: true,
  user: {
    id: 12345,
    firstName: "Troy",
    lastName: "Lambert",
    hexColor: "#3498DB",
    avatar: avatar,
  },
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case authTypes.USER_LOGIN_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        userLoading: false,
        user,
        token,
      };
    }
    case authTypes.USER_LOGIN_LOADING: {
      return {
        ...state,
        userLoading: action.payload,
      };
    }
    case authTypes.USER_LOGIN_FAILURE: {
      return {
        ...state,
        userLoading: false,
        userError: true,
      };
    }
    case authTypes.USER_LOGOUT: {
      return {
        token: null,
        isAuthenticated: false,
        user: null,
        userLoading: false,
        userError: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
