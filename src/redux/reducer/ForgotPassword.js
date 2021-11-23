import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  FORGET_PASSWORD_ERROR,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
} from '../actions/type/Type';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
  isChange: false,
};
const ForgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        isChange: true,
      };
    case FORGET_PASSWORD_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        message: action.message,
      };

    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        requesting: false,
        isChange: true,
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        requesting: false,
        isChange: false,
        message: action.message,
      };
    default:
      return state;
  }
};

export default ForgotPassword;
