import { combineReducers } from "redux";

import authReducer from "./authReducer";
import businessReducer from "./businessReducer";

const reducers = combineReducers({
  auth: authReducer,
  businesses: businessReducer,
});

export default reducers;
