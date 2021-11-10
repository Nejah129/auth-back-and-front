import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const userSignUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGNUP });
  try {
    const res = await axios.post("/user/signup", newUser);
    console.log("res", res.data);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response.data,
    });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    let res = await axios.post("/user/login", user);
    localStorage.setItem("token", res.data.token);
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
export const getProfilepage = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    },
  };
  try {
    let res = await axios.get("/user/get", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
