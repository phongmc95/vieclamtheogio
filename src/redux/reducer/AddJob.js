import {
  FETCH_POST_ADD_JOB_REQUEST,
  FETCH_POST_ADD_JOB_SUCCESS,
  FETCH_POST_ADD_JOB_ERROR,
} from '../actions/type/Type';

const contact_info = {
  contact_person: '',
  contact_address: '',
  contact_phone: '',
  contact_email: '',
};
const work_days = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};
const work_schedule_list = {
  shift: String,
  start_time: String,
  end_time: String,
  work_days: work_days,
};

const work_schedule = [work_schedule_list];

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
  job_posting_position: '',
  career: '',
  quantity_recruited: '',
  work_location: '',
  working_form: '',
  salary: '',
  min_education: '',
  probation: '',
  rose: '',
  experience: '',
  posting_date: '',
  last_date: '',
  work_schedule: [],
  contact_info: {},
  job_description: String,
  job_requirements: String,
  benefits_enjoyed: String,
  records_include: String,
  createdBy: String,
};

const POSTJOB = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ADD_JOB_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_POST_ADD_JOB_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: action.data,
      };
    case FETCH_POST_ADD_JOB_ERROR:
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
