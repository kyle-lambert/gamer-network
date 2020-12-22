import { alertTypes } from "../types";

const initState = [{ msg: "Alert", type: "success", id: 12345 }];

function alertReducer(state = initState, action) {
  switch (action.type) {
    case alertTypes.SET_ALERT: {
      return [...state, action.payload];
    }
    case alertTypes.REMOVE_ALERT: {
      return state.filter((alert) => alert.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}

export default alertReducer;
