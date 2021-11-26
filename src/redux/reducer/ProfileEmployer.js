import {
  PROFILE_EPL_ERROR,
  PROFILE_EPL_REQUEST,
  PROFILE_EPL_SUCCESS,
} from '../actions/type/Type';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};
const ProfileEmployer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_EPL_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case PROFILE_EPL_SUCCESS:
      return {
        ...state,
        requesting: false,

        success: true,
        data: action.data,
        message: null,
      };
    case PROFILE_EPL_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };

    default:
      return state;
  }
};
export default ProfileEmployer;
