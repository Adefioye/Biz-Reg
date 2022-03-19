import {
  CREATE_BUSINESS,
  FETCH_BUSINESS,
  FETCH_BUSINESSES,
  EDIT_BUSINESS,
  DELETE_BUSINESS,
} from "../actions/types";

const businessReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BUSINESSES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default businessReducer;
