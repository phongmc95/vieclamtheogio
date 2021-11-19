import axiosClient from '../../config/axios';
import {
  CHECK_TYPE_LOGIN,
  FETCH_POST_LOGIN_ERROR,
  FETCH_POST_LOGIN_REQUEST,
  FETCH_POST_LOGIN_SUCCESS,
  FETCH_POST_SIGNUP_ERROR,
  FETCH_POST_SIGNUP_REQUEST,
  FETCH_POST_SIGNUP_SUCCESS,
  LOG_OUT,
} from './type/Type';

export const loadPostsLogIn = (email, pass, role) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_LOGIN_REQUEST});
    const url = 'auth/login';
    const data = JSON.stringify({
      email: email,
      password: pass,
      role: role,
    });
    const response = await axiosClient.post(url, data);

    dispatch({
      type: FETCH_POST_LOGIN_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_LOGIN_ERROR,
      message: error,
    });
  }
};
export const checkLogin = data => {
  return {
    type: CHECK_TYPE_LOGIN,
    data: data,
  };
};
export const log_out = () => {
  return {
    type: LOG_OUT,
  };
};
export const loadRegister =
  (email, pass, role, address, phone, name) => async dispatch => {
    try {
      dispatch({type: FETCH_POST_SIGNUP_REQUEST});
      const url = 'auth/register';
      const data = JSON.stringify({
        email: email,
        password: pass,
        role: role,
        name: name,
        phone: phone,
        address: address,

      });

      const response = await axiosClient.post(url, data);

      dispatch({
        type: FETCH_POST_SIGNUP_SUCCESS,
        data: response,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: FETCH_POST_SIGNUP_ERROR,
        message: error,
      });
    }
  };
