import {
  CREATE_BUSINESS,
  FETCH_BUSINESS,
  FETCH_BUSINESSES,
  EDIT_BUSINESS,
  DELETE_BUSINESS,
  SEARCH_BY_NAME,
  SORT_BY_FIELD,
} from "../actions/types";

const INITIAL_STATE = {
  businesses: [],
  business: [],
};

const businessReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES:
      return { ...state, businesses: action.payload };
    case CREATE_BUSINESS:
      return { ...state, business: action.payload };
    case FETCH_BUSINESS:
      return { ...state, business: [action.payload] };
    case EDIT_BUSINESS:
      return { ...state, business: [action.payload] };
    case DELETE_BUSINESS:
      return { ...state, business: [] };
    case SEARCH_BY_NAME:
      return { ...state, businesses: action.payload };
    case SORT_BY_FIELD:
      return { ...state, businesses: action.payload };
    default:
      return state;
  }
};

export default businessReducer;
