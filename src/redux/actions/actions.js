import axiosClient from '../../config/axios';
import {
  CHECK_TYPE_LOGIN,
  FETCH_POST_LOGIN_ERROR,
  FETCH_POST_LOGIN_REQUEST,
  FETCH_POST_LOGIN_SUCCESS,
} from './type/Type';

export const loadPostsLogIn = (email, pass) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_LOGIN_REQUEST});
    const url = 'auth/login';
    var data = new FormData();
    data.append('email', email);
    data.append('pass', pass);
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
