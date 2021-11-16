import {
  CHECK_TYPE_LOGIN,
  FETCH_POST_LOGIN_ERROR,
  FETCH_POST_LOGIN_REQUEST,
  FETCH_POST_LOGIN_SUCCESS,
  FETCH_POST_SIGNUP_ERROR,
  FETCH_POST_SIGNUP_REQUEST,
  FETCH_POST_SIGNUP_SUCCESS,
} from '../actions/type/Type';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
  check_type: null,
  register: null,
};
const LogIn = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_LOGIN_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case FETCH_POST_LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };
    case CHECK_TYPE_LOGIN:
      return {
        ...state,
        check_type: action.data,
      };
    case FETCH_POST_SIGNUP_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        register: action.data,
      };
    case FETCH_POST_SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export default LogIn;
