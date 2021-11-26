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
  FETCH_POST_ADDJOB_REQUEST,
  FETCH_POST_ADDJOB_SUCCESS,
  FETCH_POST_ADDJOB_ERROR,
} from './type/Type';

export const addPostJob = (
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
  shift,
  start_time,
  end_time,
  job_description,
  job_requirements,
  benefits_enjoyed,
  records_include,
  contact_person,
  contact_address,
  contact_phone,
  contact_email,
  createdBy
) => async dispatch => {
  try {
    dispatch({type: FETCH_POST_ADDJOB_REQUEST});
    const url = '/jobs';
    const data = JSON.stringify({
      job_posting_position: job_posting_position,
      career: career,
      quantity_recruited: quantity_recruited,
      work_location: work_location,
      working_form: working_form,
      salary: salary,
      min_education: min_education,
      probation: probation,
      rose: rose,
      experience: experience,
      posting_date: posting_date,
      last_date: last_date,
      shift: shift,
      start_time: start_time,
      end_time: end_time,
      job_description: job_description,
      job_requirements: job_requirements,
      benefits_enjoyed: benefits_enjoyed,
      records_include: records_include,
      contact_person: contact_person,
      contact_address: contact_address,
      contact_phone: contact_phone,
      contact_email: contact_email,
      createdBy: createdBy,
    });
    const response = await axiosClient.post(url, data);
    dispatch({
      type: FETCH_POST_ADDJOB_SUCCESS,
      data: response,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_ADDJOB_ERROR,
      message: error,
    });
  }
};

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
  (emailFLC, passFLC, nameFLC, phoneFLC, addressFLC, industry, job_address) =>
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
        job_adress: job_address,
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
    console.log('data: ', data);

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
    console.log('data: ', data);

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
    console.log('data: ', data);

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
    console.log('data: ', data);

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
