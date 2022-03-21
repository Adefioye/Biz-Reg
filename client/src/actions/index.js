import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BUSINESS,
  FETCH_BUSINESS,
  FETCH_BUSINESSES,
  DELETE_BUSINESS,
  EDIT_BUSINESS,
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
