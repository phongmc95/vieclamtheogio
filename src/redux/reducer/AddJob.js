import {
  FETCH_POST_ADDJOB_REQUEST,
  FETCH_POST_ADDJOB_SUCCESS,
  FETCH_POST_ADDJOB_ERROR,
} from '../actions/type/Type';

const work_days = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};
const ListContactInfo = {
  records_include: String,
  contact_person: String,
  contact_address: String,
  contact_phone: String,
  contact_email: String,
};

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
  job_posting_position: String,
  career: String,
  quantity_recruited: String,
  work_location: String,
  working_form: String,
  salary: String,
  min_education: String,
  rose: String,
  experience: String,
  posting_date: String,
  last_date: String,
  shift: String,
  start_time: String,
  end_time: String,
  job_description: String,
  job_requirements: String,
  benefits_enjoyed: String,
  records_include: String,
  contact_person: String,
  contact_address: String,
  contact_phone: String,
  contact_email: String,
  createdBy: String,
};

const POSTJOB = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ADDJOB_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_ADDJOB_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case FETCH_POST_ADDJOB_ERROR:
      return {
        ...state,
        requesting: false,
        message: action.message,
      };
    default:
      return state;
  }
};
export default POSTJOB;
