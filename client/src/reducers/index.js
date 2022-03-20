import { combineReducers } from "redux";

import authReducer from "./authReducer";
import businessReducer from "./businessReducer";

const reducers = combineReducers({
  auth: authReducer,
  business: businessReducer,
});

export default reducers;
