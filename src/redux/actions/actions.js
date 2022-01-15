import axiosClient from '../../config/axios';
import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHECK_TYPE_LOGIN,
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
  PROFILE_EPL_ERROR,
  PROFILE_EPL_REQUEST,
  PROFILE_EPL_SUCCESS,
  PROFILE_UPDATE_EPL_REQUEST,
  PROFILE_UPDATE_EPL_SUCCESS,
  PROFILE_UPDATE_EPL__ERROR,
  LOGO_REQUEST,
  LOGO_SUCCESS,
  LOGO_ERROR,
  FETCH_POST_ADD_JOB_REQUEST,
  FETCH_POST_ADD_JOB_SUCCESS,
  FETCH_POST_ADD_JOB_ERROR,
  FETCH_GET_JOB_REQUEST,
  FETCH_GET_JOB_SUCCESS,
  FETCH_GET_JOB_ERROR,
  FETCH_POST_UPDATE_JOB_REQUEST,
  FETCH_POST_UPDATE_JOB_SUCCESS,
  FETCH_POST_UPDATE_JOB_ERROR,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_CLEAR,
} from './type/Type';

export const loadPostsLogIn = (email, pass) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_LOGIN_REQUEST});
    const url = 'auth/login';
    const data = JSON.stringify({
      email: email,
      password: pass,
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

export const search = data => {
  return {
    type: SEARCH_SUCCESS,
    search: data,
  };
};

export const clearSearch = () => {
  return {
    type: SEARCH_CLEAR,
    history: [],
  };
};

export const clearData = () => {
  return {
    type: FETCH_POST_ADD_JOB_SUCCESS,
    success: false,
    data: null,
  };
};
export const log_out = () => {
  return {
    type: LOG_OUT,
  };
};
export const loadRegisterEmployer =
  (email, pass, name, phone, address) => async dispatch => {
    try {
      dispatch({type: FETCH_POST_SIGNUP_REQUEST});
      const url = 'auth/register';
      const data = JSON.stringify({
        email: email,
        password: pass,
        role: 'employer',
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

export const loadRegisterFreelancer =
  (emailFLC, passFLC, nameFLC, phoneFLC, addressFLC, industry, job_adress) =>
  async dispatch => {
    try {
      dispatch({type: FETCH_POST_SIGNUP_REQUEST});
      const url = 'auth/register';
      const data = JSON.stringify({
        email: emailFLC,
        password: passFLC,
        role: 'candidate',
        name: nameFLC,
        phone: phoneFLC,
        address: addressFLC,
        industry: industry,
        job_adress: job_adress,
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

export const loadOTP = (email, otp) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_OTP_REQUEST});
    const url = 'auth/verify-email';
    const data = JSON.stringify({
      email: email,
      otp: otp,
    });

    const response = await axiosClient.post(url, data);

    dispatch({
      type: FETCH_POST_OTP_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_OTP_ERROR,
      message: error,
    });
  }
};

export const loadForgotOTP = (email, otp) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_OTP_REQUEST});
    const url = 'auth/verify-email';
    const data = JSON.stringify({
      email: email,
      otp: otp,
    });

    const response = await axiosClient.post(url, data);

    dispatch({
      type: FETCH_FORGOT_OTP_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_OTP_ERROR,
      message: error,
    });
  }
};

export const loadForgetPass = email => async dispatch => {
  try {
    dispatch({type: FORGET_PASSWORD_REQUEST});
    const url = 'auth/forgot-password';
    const data = JSON.stringify({
      email: email,
    });

    const response = await axiosClient.post(url, data);

    dispatch({
      type: FORGET_PASSWORD_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FORGET_PASSWORD_ERROR,
      message: error,
    });
  }
};

export const changePass = (email, password) => async dispatch => {
  try {
    dispatch({type: CHANGE_PASSWORD_REQUEST});
    const url = 'auth/reset-password';
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const response = await axiosClient.post(url, data);

    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: CHANGE_PASSWORD_ERROR,
      message: error,
    });
  }
};
export const ProfileEPl = params => async dispatch => {
  try {
    dispatch({type: PROFILE_EPL_REQUEST});
    const url = `users/${params}`;

    const response = await axiosClient.get(url);
    dispatch({type: PROFILE_EPL_SUCCESS, data: response});
  } catch (err) {
    dispatch({
      type: PROFILE_EPL_ERROR,
      message: err,
    });
  }
};
export const UpdateProfileEPl =
  (
    name,
    company_size,
    tax_code = '',
    address,
    city,
    website,
    description_company,
    phone,
    email,
    idEmp,
  ) =>
  async dispatch => {
    try {
      dispatch({type: PROFILE_UPDATE_EPL_REQUEST});
      const url = `users/updateUser/?${idEmp}`;
      const data = JSON.stringify({
        name,
        company_size,
        tax_code,
        address,
        city,
        website,
        description_company,
        phone,
        email,
      });
      console.log('data: ', data);

      const response = await axiosClient.patch(url, data);
      dispatch({type: PROFILE_UPDATE_EPL_SUCCESS, data: response});
    } catch (err) {
      dispatch({
        type: PROFILE_UPDATE_EPL__ERROR,
        message: err,
      });
    }
  };

export const PostLogo = (logo, email) => async dispatch => {
  try {
    dispatch({type: LOGO_REQUEST});
    const url = 'users/picture-upload';
    const data = new FormData();

    if (logo) {
      const file = {
        uri: logo.assets[0].uri,
        name: logo.assets[0].fileName,
        type: logo.assets[0].type,
      };
      console.log(file);
      data.append('photo', file);
    }
    data.append('email', email);

    const response = await axiosClient.post(url, data);

    dispatch({
      type: LOGO_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.log('KKKKK', error);
    dispatch({
      type: LOGO_ERROR,
      message: error,
    });
  }
};

export const AddPostJob =
  (
    job_posting_position,
    career,
    quantity_recruited,
    work_location,
    working_form,
    salary,
    min_education,
    probation,
    rose,
    experience,
    posting_date,
    last_date,
    work_schedule,
    job_description,
    job_requirements,
    benefits_enjoyed,
    records_include,
    contact_info,
    createdBy,
  ) =>
  async dispatch => {
    try {
      dispatch({type: FETCH_POST_ADD_JOB_REQUEST});
      const url = '/jobs';
      const data = JSON.stringify({
        job_posting_position,
        career,
        quantity_recruited,
        work_location,
        working_form,
        salary,
        min_education,
        probation,
        rose,
        experience,
        posting_date,
        last_date,
        work_schedule,
        job_description,
        job_requirements,
        benefits_enjoyed,
        records_include,
        contact_info,
        createdBy,
      });

      const response = await axiosClient.post(url, data);

      dispatch({
        type: FETCH_POST_ADD_JOB_SUCCESS,
        data: response,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: FETCH_POST_ADD_JOB_ERROR,
        message: error,
      });
    }
  };

export const GetJob = () => async dispatch => {
  try {
    dispatch({type: FETCH_GET_JOB_REQUEST});
    const url = '/jobs';
    const response = await axiosClient.get(url);
    console.log('Data >>>: ', response);
    dispatch({
      type: FETCH_GET_JOB_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.log('hhhh');
    dispatch({
      type: FETCH_GET_JOB_ERROR,
      message: error,
    });
  }
};
export const UpdateJob =
  (
    job_posting_position,
    career,
    quantity_recruited,
    work_location,
    working_form,
    salary,
    min_education,
    probation,
    rose,
    experience,
    posting_date,
    last_date,
    work_schedule,
    job_description,
    job_requirements,
    benefits_enjoyed,
    records_include,
    contact_info,
    createdBy,
    idJob,
  ) =>
  async dispatch => {
    try {
      dispatch({type: FETCH_POST_UPDATE_JOB_REQUEST});
      const url = `jobs/${idJob}`;
      console.log('data: ', data);
      const data = JSON.stringify({
        job_posting_position,
        career,
        quantity_recruited,
        work_location,
        working_form,
        salary,
        min_education,
        probation,
        rose,
        experience,
        posting_date,
        last_date,
        work_schedule,
        job_description,
        job_requirements,
        benefits_enjoyed,
        records_include,
        contact_info,
        createdBy,
      });

      const response = await axiosClient.patch(url, data);

      dispatch({
        type: FETCH_POST_UPDATE_JOB_SUCCESS,
        data: response,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: FETCH_POST_UPDATE_JOB_ERROR,
        message: error,
      });
    }
  };
