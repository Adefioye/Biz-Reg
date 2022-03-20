import {
  CREATE_BUSINESS,
  FETCH_BUSINESS,
  FETCH_BUSINESSES,
  EDIT_BUSINESS,
  DELETE_BUSINESS,
} from "../actions/types";

const INITIAL_STATE = {
  businesses: [],
  business: [],
  isLoading: true,
};

const businessReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES:
      return {...state, businesses: action.payload, isLoading: false}
    case CREATE_BUSINESS:
      return {...state, businesses: action.payload, isLoading: false}
    default:
      return state;
  }
};

export default businessReducer;
