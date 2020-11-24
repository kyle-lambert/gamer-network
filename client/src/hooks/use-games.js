import React from "react";

import rawgInstance from "../api/rawgInstance";

const types = {
  GET_GAMES_SUCCESS: "GET_GAMES_SUCCESS",
  GET_GAMES_LOADING: "GET_GAMES_LOADING",
  GET_GAMES_ERROR: "GET_GAMES_ERROR",
  SET_NEXT_PAGE: "SET_NEXT_PAGE",
};

const initialState = {
  results: [],
  resultsLoading: false,
  resultsError: false,
  firstPage: 1,
  nextPage: null,
};

function gamesReducer(state, action) {
  switch (action.type) {
    case types.GET_GAMES_SUCCESS: {
      const { results, nextPage, resultsLoading } = action.payload;

      return {
        ...state,
        results: state.results.concat(results),
        resultsLoading,
        nextPage,
      };
    }
    case types.GET_GAMES_LOADING: {
      return {
        ...state,
        resultsLoading: action.payload,
      };
    }
    case types.GET_GAMES_ERROR: {
      const { resultsLoading, resultsError } = action.payload;
      return {
        ...state,
        resultsLoading,
        resultsError,
      };
    }
    case types.SET_NEXT_PAGE: {
      return {
        ...state,
        nextPage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

function useGames() {
  const [state, dispatch] = React.useReducer(gamesReducer, initialState);

  const getGamesByPage = React.useCallback(
    (page, source) => {
      dispatch({ type: types.GET_GAMES_LOADING, payload: true });
      rawgInstance({
        method: "get",
        cancelToken: source ? source.cancelToken : null,
        params: {
          page: page,
          page_size: 20,
        },
      })
        .then((res) => {
          if (res.data && Array.isArray(res.data.results)) {
            dispatch({
              type: types.GET_GAMES_SUCCESS,
              payload: {
                results: res.data.results,
                resultsLoading: false,
                nextPage: res.data.next ? page + 1 : null,
              },
            });
          } else {
            dispatch({
              type: types.GET_GAMES_ERROR,
              payload: {
                resultsLoading: false,
                resultsError: true,
              },
            });
          }
        })
        .catch(() => {
          dispatch({
            type: types.GET_GAMES_ERROR,
            payload: {
              resultsLoading: false,
              resultsError: true,
            },
          });
        });
    },
    [dispatch]
  );

  return {
    state,
    getGamesByPage,
  };
}

export default useGames;
