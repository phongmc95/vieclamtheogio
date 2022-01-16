import {
  FETCH_POST_UPDATE_JOB_ERROR,
  FETCH_POST_UPDATE_JOB_REQUEST,
  FETCH_POST_UPDATE_JOB_SUCCESS,
} from '../actions/type/Type';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};

const POSTUPDATEJOB = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_UPDATE_JOB_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_UPDATE_JOB_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case FETCH_POST_UPDATE_JOB_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };

    default:
      return state;
  }
};
export default POSTUPDATEJOB;
