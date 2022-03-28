import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BUSINESS,
  FETCH_BUSINESS,
  FETCH_BUSINESSES,
  DELETE_BUSINESS,
  EDIT_BUSINESS,
  SEARCH_BY_NAME,
  SORT_BY_FIELD,
} from "./types";
import businesses from "../api/businesses";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = (userId) => {
  return {
    type: SIGN_OUT,
    payload: userId,
  };
};

export const fetchBusinesses = () => async (dispatch) => {
  try {
    const response = await businesses.get("/businesses");
    dispatch({ type: FETCH_BUSINESSES, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const createBusiness = (formValues) => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const response = await businesses.post("/businesses", {
      ...formValues,
      userId: userId,
    });
    dispatch({ type: CREATE_BUSINESS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchBusiness = (id) => async (dispatch) => {
  try {
    const response = await businesses.get(`/businesses/${id}`);
    dispatch({ type: FETCH_BUSINESS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const editBusiness = (id, formValues) => async (dispatch) => {
  try {
    const response = await businesses.put(`/businesses/${id}`, formValues);
    dispatch({ type: EDIT_BUSINESS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBusiness = (id) => async (dispatch) => {
  try {
    const response = await businesses.delete(`/businesses/${id}`);
    dispatch({ type: DELETE_BUSINESS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

// Action creators for functionalities like search and sorting

export const searchByName = (name) => async (dispatch) => {
  try {
    const response = await businesses.get(`/businesses?q=${name}`);
    dispatch({ type: SEARCH_BY_NAME, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const sortByField = (field) => async (dispatch) => {
  try {
    const response = await businesses.get(`/businesses`);
    switch (field) {
      case "year":
        const sortedYearData = response.data.sort((a, b) =>
          Number(a.year) > Number(b.year)
            ? 1
            : Number(b.year) < Number(a.year)
            ? -1
            : 0
        );
        dispatch({ type: SORT_BY_FIELD, payload: sortedYearData });
        break;
      case "dateAdded":
        const sortedDateAddedData = response.data.sort((a, b) =>
          new Date(a.dateAdded) > new Date(b.dateAdded)
            ? 1
            : new Date(b.dateAdded) < new Date(a.dateAdded)
            ? -1
            : 0
        );
        dispatch({ type: SORT_BY_FIELD, payload: sortedDateAddedData });
        break;
      default:
        const sortedData = response.data.sort((a, b) =>
          a[field].toLowerCase() > b[field].toLowerCase()
            ? 1
            : b[field].toLowerCase() > a[field].toLowerCase()
            ? -1
            : 0
        );
        dispatch({ type: SORT_BY_FIELD, payload: sortedData });
        break;
    }
  } catch (err) {
    console.log(err);
  }
};
