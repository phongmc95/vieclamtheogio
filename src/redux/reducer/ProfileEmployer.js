import {
  PROFILE_EPL_ERROR,
  PROFILE_EPL_REQUEST,
  PROFILE_EPL_SUCCESS,
  PROFILE_UPDATE_EPL_REQUEST,
  PROFILE_UPDATE_EPL_SUCCESS,
  PROFILE_UPDATE_EPL__ERROR,
  LOGO_REQUEST,
  LOGO_SUCCESS,
  LOGO_ERROR,
} from '../actions/type/Type';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
  name: '',
  company_size: '',
  tax_code: '',
  address: '',
  city: '',
  district: '',
  website: '',
  description_company: '',
  phone: '',
  logo: '',
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
    case PROFILE_UPDATE_EPL_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case PROFILE_UPDATE_EPL_SUCCESS:
      return {
        ...state,
        requesting: false,
        data: action.data,
      };
    case PROFILE_UPDATE_EPL__ERROR:
      return {
        ...state,
        requesting: false,
        isChange: false,
        message: action.message,
      };
    case LOGO_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case LOGO_SUCCESS:
      return {
        ...state,
        requesting: false,
        data: action.data,
      };
    case LOGO_ERROR:
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

export default ProfileEmployer;
