import { combineReducers } from "redux";

import authReducer from "../reducers/authReducer";
import modalReducer from "../reducers/modalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export default rootReducer;
