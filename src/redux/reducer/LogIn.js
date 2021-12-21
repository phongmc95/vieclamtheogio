import {
  CHECK_TYPE_LOGIN,
  CHECK_VERIFY,
  FETCH_FORGOT_OTP_SUCCESS,
  FETCH_POST_LOGIN_ERROR,
  FETCH_POST_LOGIN_REQUEST,
  FETCH_POST_LOGIN_SUCCESS,
  FETCH_POST_OTP_ERROR,
  FETCH_POST_OTP_REQUEST,
  FETCH_POST_OTP_SUCCESS,
  FETCH_POST_SIGNUP_ERROR,
  FETCH_POST_SIGNUP_REQUEST,
  FETCH_POST_SIGNUP_SUCCESS,
  FORGET_PASSWORD_ERROR,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  LOG_OUT,
} from '../actions/type/Type';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
  check_type: null,
  register: null,
  verify_email: false,
  verify_forgot: false,
  is_register: false,
  is_forget: false,
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
        message: null,
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
        is_register: true,
        register: action.data,
      };
    case FETCH_POST_SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };
    case FETCH_POST_OTP_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_OTP_SUCCESS:
      return {
        ...state,
        requesting: false,
        verify_email: true,
      };

    case FETCH_FORGOT_OTP_SUCCESS:
      return {
        ...state,
        requesting: false,
        verify_forgot: true,
      };

    case FETCH_POST_OTP_ERROR:
      return {
        ...state,
        requesting: false,
        verify_email: false,
        message: action.message,
      };

    case FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        requesting: false,
        is_forget: true,
      };
    case FORGET_PASSWORD_ERROR:
      return {
        ...state,
        requesting: false,
        is_forget: false,
        message: action.message,
      };

    case LOG_OUT:
      return {
        ...state,
        requesting: false,
        success: false,
        message: null,
        data: null,
        check_type: null,
      };

    case CHECK_VERIFY:
      return {
        ...state,
        isVerify: true,
      };
    default:
      return state;
  }
};

export default LogIn;
