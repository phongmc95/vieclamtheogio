import LogIn_NTD from '../../base/API/apiNTD/LogIn_NTD';
import {
  FETCH_POST_LOGIN_ERROR,
  FETCH_POST_LOGIN_REQUEST,
  FETCH_POST_LOGIN_SUCCESS,
} from './type/Type';

export const loadPosts = (email, pass) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_LOGIN_REQUEST});

    var data = new FormData();
    data.append('email', email);
    data.append('pass', pass);
    const response = await LogIn_NTD.LogIn_API(data);
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
