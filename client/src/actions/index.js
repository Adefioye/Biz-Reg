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

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
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

export const createBusiness = (formValues) => async (dispatch) => {
  try {
    const response = await businesses.post("/businesses", formValues);
    dispatch({ type: CREATE_BUSINESS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
