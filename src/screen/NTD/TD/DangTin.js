import React, {useState, useEffect, useReducer} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, Selecter, DateIcon} from '../../../../assets/icon';
import TextInputStyle from '../../../components/TextInputStyle';
import ButtonStyle from '../../../components/ButtonStyle';
import AddcalendarAddd from '../../../components/AddcalendarAddd';
import TextInputSelected from '../../../components/TextInputSelected';
import SelectModal from '../../../components/SelectModal';
import {useSelector} from 'react-redux';
import ModalStyle from '../../../components/ModalStyle';
import {validateEmail, isVietnamesePhoneNumber} from '../../../base/Validate';
import {isIos} from '../../../Utils/CheckDevice';
import colors from '../../../constant/colors';

import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import fonts from '../../../constant/fonts';
import LoadSreen from '../../../components/loadScreen';
import axios from 'axios';
import {
  jobs,
  literacy,
  workingForm,
  salary as salarys,
} from '../../../data/Jobs';
const reducer = (state, action) => {
  switch (action.type) {
    case 'START_TIME':
      return {
        ...state,
        start_time: action.start_time,
      };
    case 'END_TIME':
      return {
        ...state,

        end_time: action.end_time,
      };
    case 'THU2':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          monday: !state.work_days.monday,
        },
      };
    case 'THU3':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          tuesday: !state.work_days.tuesday,
        },
      };
    case 'THU4':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          wednesday: !state.work_days.wednesday,
        },
      };
    case 'THU5':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          thursday: !state.work_days.thursday,
        },
      };
    case 'THU6':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          friday: !state.work_days.friday,
        },
      };
    case 'THU7':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          saturday: !state.work_days.saturday,
        },
      };

    case 'CHU_NHAT':
      return {
        ...state,
        work_days: {
          ...state.work_days,
          sunday: !state.work_days.sunday,
        },
      };
    default:
      return state;
  }
};
const reducerContactInfo = (state, action) => {
  switch (action.type) {
    case 'CONTACT_PERSON':
      return {
        ...state,
        contact_person: action.contact_person,
      };
    case 'CONTACT_ADDRESS':
      return {
        ...state,
        contact_address: action.contact_address,
      };
    case 'CONTACT_PHONE':
      return {
        ...state,
        contact_phone: action.contact_phone,
      };
    case 'CONTACT_EMAIL':
      return {
        ...state,
        contact_email: action.contact_email,
      };
    default:
      return state;
  }
};

const initialState = {
  shift: 'Thời gian làm một ngày',
  start_time: null,
  end_time: null,
  work_days: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
};
const initialStateContactInfo = {
  contact_person: '',
  contact_address: '',
  contact_phone: '',
  contact_email: '',
};

const DangTin = ({navigation}) => {
  const _id = useSelector(state => state.Authen.data);
  const [work_schedule, dispatch] = useReducer(reducer, initialState);
  const [job_posting_position, setJob_posting_position] = useState('');
  const [visible, setVisible] = useState(false);
  const [work_location, setwork_location] = useState('');
  const [career, setCareer] = useState({id: null, title: ''});
  const [quantity_recruited, setQuantity_recruited] = useState('');
  const [working_form, setworking_form] = useState('');
  const [salary, setsalary] = useState('');
  const [min_education, setmin_education] = useState('');
  const [probation, setprobation] = useState('');
  const [rose, setrose] = useState('');
  const [posting_date, set_posting_date] = useState('');
  const [last_date, set_last_date] = useState('');
  const [job_description, set_job_description] = useState('');
  const [job_requirements, set_job_requirements] = useState('');
  const [benefits_enjoyed, set_benefits_enjoyed] = useState('');
  const [records_include, set_records_include] = useState('');
  const [work_schedule_list, set_work_schedule_list] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const [dateVisibel, setDateVisibel] = useState(false);
  const [type, settype] = useState('');
  const [date, setDate] = useState(new Date());
  const [isSalary, setIsSalary] = useState(false);
  const [isWorkingForm, setIsWorkingForm] = useState(false);
  const [isLiteracy, setIsLiteracy] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    set_work_schedule_list([work_schedule]);
  }, [work_schedule]);

  const selectItem = item => {
    setCareer(item);
    setVisible(false);
  };

  const selectSalary = item => {
    setsalary(item.title);
    setIsSalary(false);
  };

  const selectLiteracy = item => {
    setmin_education(item.title);
    setIsLiteracy(false);
  };

  const selectWorkingForm = item => {
    setworking_form(item.title);
    setIsWorkingForm(false);
  };

  const [contact_info, dispatchContactInfo] = useReducer(
    reducerContactInfo,
    initialStateContactInfo,
  );

  const onAddJob = () => {
    if (
      !job_posting_position ||
      !work_schedule ||
      !work_location ||
      !working_form ||
      !quantity_recruited ||
      !salary ||
      !min_education ||
      !probation ||
      !posting_date ||
      !last_date ||
      !job_description ||
      !job_requirements ||
      !benefits_enjoyed ||
      !records_include ||
      !contact_info ||
      !career
    ) {
      setModal(true);
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else if (!validateEmail(contact_info.contact_email)) {
      setModal(true);
      setError('Email không đúng định dạng. Vui lòng nhập lại !');
    } else if (!isVietnamesePhoneNumber(contact_info.contact_phone)) {
      setModal(true);
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại !');
    } else {
      addJob();
    }
  };

  const addJob = () => {
    var data = JSON.stringify({
      job_posting_position: job_posting_position,
      career: career.title,
      quantity_recruited: quantity_recruited,
      work_location: work_location,
      working_form: working_form,
      salary: salary,
      min_education: min_education,
      probation: probation,
      rose: rose,
      posting_date: posting_date,
      last_date: last_date,
      work_schedule: work_schedule_list,
      job_description: job_description,
      job_requirements: job_requirements,
      benefits_enjoyed: benefits_enjoyed,
      records_include: records_include,
      contact_info: contact_info,
      createdBy: _id?.user?.userId,
    });

    var config = {
      method: 'post',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setSuccess(true);
        setModal(true);
        setError('Đăng tin thành công!!!');
      })
      .catch(function (error) {
        setSuccess(false);
        setModal(true);
        setError('Đăng tin không thành công. Vui lòng đăng nhập lại!');
        console.log(error);
      });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateVisibel(Platform.OS === 'ios');
    if (type !== 'last') {
      set_posting_date(moment(currentDate).format('DD/MM/YYYY'));
      setDateVisibel(false);
    } else {
      set_last_date(moment(currentDate).format('DD/MM/YYYY'));
      setDateVisibel(false);
    }
  };

  // const onChangeTime = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setTimeVisibel(Platform.OS === 'ios');
  //   if (type !== 'last') {
  //     dispatch({
  //       type: 'START_TIME',
  //       start_time: moment(currentDate).format('HH:mm'),
  //     });
  //     setTimeVisibel(false);
  //   } else {
  //     dispatch({
  //       type: 'END_TIME',
  //       end_time: moment(currentDate).format('HH:mm'),
  //     });
  //     setDateVisibel(false);
  //   }
  // };

  const closeModal = () => {
    if (success === true) {
      if (navigation.canGoBack) {
        navigation.goBack();
      }
    } else {
      setModal(false);
    }
  };

  return (
    <View style={styles.contener}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Đăng tin</Text>
      </View>
      {/* main */}
      <ScrollView style={{marginBottom: scale(50)}}>
        <View style={styles.main}>
          <TextInputStyle
            Label="Tiêu đề"
            value={job_posting_position}
            onChangeText={text => setJob_posting_position(text)}
          />
          <TextInputSelected
            Label="Ngành nghề"
            value={career.title}
            onChangeText={text => setCareer(text)}
            onPress={() => setVisible(true)}
          />
          {/* selcter */}
          <TextInputStyle
            Label="Số lượng cần tuyển"
            value={quantity_recruited}
            keyboardType={'number-pad'}
            onChangeText={text => setQuantity_recruited(text)}
          />
          <TextInputStyle
            Label="Địa điểm làm việc"
            value={work_location}
            onChangeText={text => setwork_location(text)}
          />
          <TextInputSelected
            Label="Hình thức làm việc"
            value={working_form}
            onChangeText={text => setworking_form(text)}
            onPress={() => setIsWorkingForm(true)}
          />
          <TextInputSelected
            Label="Mức lương"
            value={salary}
            keyboardType={'number-pad'}
            onChangeText={text => setsalary(text)}
            onPress={() => setIsSalary(true)}
          />
          <TextInputSelected
            Label="Trình độ học vấn"
            value={min_education}
            onChangeText={text => setmin_education(text)}
            onPress={() => setIsLiteracy(true)}
          />
          <TextInputStyle
            Label="Thời gian thử việc"
            value={probation}
            onChangeText={text => setprobation(text)}
          />
          <TextInputStyle
            Label="Hoa hồng (Nếu có)"
            value={rose}
            onChangeText={text => setrose(text)}
          />

          <Text
            style={{
              fontSize: scale(16),
              fontFamily: fonts.BOLD,
              marginVertical: scale(20),
            }}>
            LỊCH LÀM VIỆC
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                marginTop: scale(15),
                fontFamily: fonts.NORMAL,
                marginHorizontal: scale(5),
              }}>
              Từ
            </Text>
            <View
              style={[
                styles.boxInput,
                {flexDirection: 'row', width: scale(125)},
              ]}>
              <TextInput
                placeholder="dd/mm/yyyy"
                style={styles.textInput}
                keyboardType={'phone-pad'}
                value={posting_date}
                onChangeText={text => set_posting_date(text)}
              />
              <TouchableOpacity
                style={styles.Selecter}
                onPress={() => {
                  setDateVisibel(!dateVisibel);
                  settype('fist');
                }}>
                <DateIcon />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginTop: scale(15),
                fontFamily: fonts.NORMAL,
                marginHorizontal: scale(5),
              }}>
              Đến
            </Text>
            <View
              style={[
                styles.boxInput,
                {flexDirection: 'row', width: scale(125)},
              ]}>
              <TextInput
                placeholder="dd/mm/yyyy"
                style={styles.textInput}
                keyboardType={'phone-pad'}
                value={last_date}
                onChangeText={text => set_last_date(text)}
              />

              <TouchableOpacity
                style={styles.Selecter}
                onPress={() => {
                  setDateVisibel(!dateVisibel);
                  settype('last');
                }}>
                <DateIcon />
              </TouchableOpacity>
            </View>
          </View>

          <AddcalendarAddd
            shift={work_schedule?.shift}
            onPress2={() => dispatch({type: 'THU2'})}
            onPress3={() => dispatch({type: 'THU3'})}
            onPress4={() => dispatch({type: 'THU4'})}
            onPress5={() => dispatch({type: 'THU5'})}
            onPress6={() => dispatch({type: 'THU6'})}
            onPress7={() => dispatch({type: 'THU7'})}
            onPressCN={() => dispatch({type: 'CHU_NHAT'})}
            day={work_schedule}
            value={work_schedule.start_time}
            onChangeText={text =>
              dispatch({type: 'START_TIME', start_time: text})
            }
            value1={work_schedule.end_time}
            onChangeText2={text => dispatch({type: 'END_TIME', end_time: text})}
          />

          <Text
            style={{
              fontSize: scale(16),
              fontFamily: fonts.BOLD,
              marginVertical: scale(20),
            }}>
            MÔ TẢ CÔNG VIỆC
          </Text>

          <TextInputStyle
            Label="Mô tả"
            value={job_description}
            onChangeText={text => set_job_description(text)}
            multiline={true}
          />
          <TextInputStyle
            Label="Yêu cầu công việc"
            value={job_requirements}
            onChangeText={text => set_job_requirements(text)}
            multiline={true}
          />
          <TextInputStyle
            Label="Quyền lợi được hưởng"
            value={benefits_enjoyed}
            onChangeText={text => set_benefits_enjoyed(text)}
            multiline={true}
          />
          <TextInputStyle
            Label="Hồ sơ bao gồm"
            value={records_include}
            onChangeText={text => set_records_include(text)}
            multiline={true}
          />
          <Text
            style={{
              fontSize: scale(16),
              fontFamily: fonts.BOLD,
              marginVertical: scale(20),
            }}>
            THÔNG TIN LIÊN HỆ
          </Text>
          <TextInputStyle
            Label="Tên liên hệ"
            value={contact_info.contact_person}
            onChangeText={text =>
              dispatchContactInfo({
                type: 'CONTACT_PERSON',
                contact_person: text,
              })
            }
          />
          <TextInputStyle
            Label="Địa chỉ liên hệ"
            value={contact_info.contact_address}
            onChangeText={text =>
              dispatchContactInfo({
                type: 'CONTACT_ADDRESS',
                contact_address: text,
              })
            }
          />
          <TextInputStyle
            Label="Số điện thoại liên hệ"
            value={contact_info.contact_phone}
            keyboardType={'number-pad'}
            onChangeText={text =>
              dispatchContactInfo({type: 'CONTACT_PHONE', contact_phone: text})
            }
          />
          <TextInputStyle
            Label="Email liên hệ"
            value={contact_info.contact_email}
            onChangeText={text =>
              dispatchContactInfo({type: 'CONTACT_EMAIL', contact_email: text})
            }
          />

          <ButtonStyle
            styleBtn={{width: 150, margin: scale(30)}}
            Title={'Đăng tin'}
            onPress={onAddJob}
          />
        </View>
      </ScrollView>
      <SelectModal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        label={'Ngành nghề mong muốn'}
        onPress={item => selectItem(item)}
        data={jobs}
      />

      <SelectModal
        isVisible={isSalary}
        onBackdropPress={() => setIsSalary(false)}
        label={'Mức lương'}
        onPress={item => selectSalary(item)}
        data={salarys}
      />

      <SelectModal
        isVisible={isWorkingForm}
        onBackdropPress={() => setIsWorkingForm(false)}
        label={'Hình thức làm việc'}
        onPress={item => selectWorkingForm(item)}
        data={workingForm}
      />

      <SelectModal
        isVisible={isLiteracy}
        onBackdropPress={() => setIsLiteracy(false)}
        label={'Trình độ học vấn'}
        onPress={item => selectLiteracy(item)}
        data={literacy}
      />

      <ModalStyle
        isVisible={modal}
        onBackdropPress={closeModal}
        content={error}
      />

      {dateVisibel && (
        <DateTimePicker value={date} mode={'date'} onChange={onChange} />
      )}
    </View>
  );
};

export default DangTin;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(isIos ? 100 : 50),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: scale(15),
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontFamily: fonts.BOLD,
    lineHeight: scale(20),
    marginLeft: scale(20),
    top: scale(2),
    textTransform: 'uppercase',
  },
  goback: {
    marginLeft: scale(10),
  },
  main: {
    alignItems: 'center',
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderColor: 'black',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
    backgroundColor: colors.WHITE,
  },
  textInput: {
    fontSize: scale(14),
    marginLeft: scale(5),
  },
  TextTitle: {
    fontFamily: fonts.BOLD,
    fontSize: scale(16),
    marginLeft: scale(-210),
    marginTop: scale(10),
  },
  Selecter: {
    width: scale(25),

    alignItems: 'center',
    justifyContent: 'center',
  },

  btnDay: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scale(20),
  },
});
