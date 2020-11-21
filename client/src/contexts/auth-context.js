import React from "react";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const initState = {
  userLoggedIn: true,
};

const types = {
  LOGOUT_USER: "LOGOUT_USER",
};

function authReducer(state, action) {
  switch (action.type) {
    case types.LOGOUT_USER: {
      return {
        ...state,
        userLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, initState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthContext() {
  const state = React.useContext(AuthStateContext);
  const dispatch = React.useContext(AuthDispatchContext);

  const logoutUser = () => dispatch({ type: types.LOGOUT_USER });

  return {
    userLoggedIn: state.userLoggedIn,
    logoutUser,
  };
}

export { AuthContextProvider, useAuthContext };
