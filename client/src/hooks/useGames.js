import React from "react";
import axios from "axios";

const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const types = {
  GET_GAMES_REQUEST: "GET_GAMES_REQUEST",
  GET_GAMES_SUCCESS: "GET_GAMES_SUCCESS",
  GET_GAMES_FAILURE: "GET_GAMES_FAILURE",
  CHANGE_PLATFORM_FILTER: "CHANGE_PLATFORM_FILTER",
};

const initialState = {
  games: [],
  gamesLoading: false,
  gamesError: false,
  page: 1,
  hasNextPage: true,
};

function gamesReducer(state, action) {
  switch (action.type) {
    case types.GET_GAMES_REQUEST: {
      return {
        ...state,
        gamesLoading: true,
      };
    }
    case types.GET_GAMES_SUCCESS: {
      const { results, hasNextPage } = action.payload;

      if (state.page !== 1) {
        return {
          ...state,
          games: state.games.concat(results),
          hasNextPage: hasNextPage,
          gamesLoading: false,
        };
      } else {
        return {
          ...state,
          games: [...results],
          hasNextPage: hasNextPage,
          gamesLoading: false,
        };
      }
    }
    case types.GET_GAMES_FAILURE: {
      return {
        ...state,
        gamesLoading: false,
        gamesError: true,
      };
    }
    default: {
      return state;
    }
  }
}

function useGames() {
  const [state, dispatch] = React.useReducer(gamesReducer, initialState);

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const config = {
      method: "get",
      baseURL: `https://api.rawg.io/api/games`,
      cancelToken: source.token,
      params: {
        key: RAWG_API_KEY,
        page: state.page,
        page_size: 20,
      },
    };

    const fetchGames = async () => {
      dispatch({ type: types.GET_GAMES_REQUEST });
      try {
        const res = await axios(config);
        if (res.data && Array.isArray(res.data.results)) {
          const payload = {
            results: res.data.results,
            hasNextPage: res.data.next ? true : false,
          };
          dispatch({ type: types.GET_GAMES_SUCCESS, payload });
        } else {
          console.log("fetchGames error.");
        }
      } catch (error) {
        dispatch({ type: types.GET_GAMES_ERROR });
      }
    };

    if (state.hasNextPage) {
      console.log("fetch games called");
      fetchGames();
    }

    return () => {
      source.cancel("fetchGames request was cancelled.");
    };
  }, [state.page, state.hasNextPage]);

  return {
    state,
  };
}

export default useGames;
