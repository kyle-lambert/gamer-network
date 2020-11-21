import React from "react";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const initState = {
  userLoggedIn: false,
};

function authReducer(state, action) {
  switch (action.type) {
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

  return {
    userLoggedIn: state.userLoggedIn,
  };
}

export { AuthContextProvider, useAuthContext };
