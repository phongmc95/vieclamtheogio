import React, {useReducer} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '@components/Button/Button';
import TitleBasic from '@components/title/TitleBasic';
import fonts from '../../../constant/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../constant/colors';
import WorkDay from '../../../components/WorkDay';
const reducer = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const reducer1 = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const reducer2 = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const reducer3 = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const reducer4 = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const reducer5 = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const reducer6 = (state, action) => {
  switch (action.type) {
    case 'morning':
      return {
        ...state,
        morning: !state.morning,
      };
    case 'afternoon':
      return {
        ...state,
        afternoon: !state.afternoon,
      };
    case 'evening':
      return {
        ...state,
        evening: !state.evening,
      };
    default:
      return state;
  }
};
const UpdateWorkSession = () => {
  const initialState = {morning: false, afternoon: false, evening: false};
  const initialState1 = {morning: false, afternoon: false, evening: false};
  const initialState2 = {morning: false, afternoon: false, evening: false};
  const initialState3 = {morning: false, afternoon: false, evening: false};
  const initialState4 = {morning: false, afternoon: false, evening: false};
  const initialState5 = {morning: false, afternoon: false, evening: false};
  const initialState6 = {morning: false, afternoon: false, evening: false};
  const [day, dispatch] = useReducer(reducer, initialState);
  const [day1, dispatch1] = useReducer(reducer1, initialState1);
  const [day2, dispatch2] = useReducer(reducer2, initialState2);
  const [day3, dispatch3] = useReducer(reducer3, initialState3);
  const [day4, dispatch4] = useReducer(reducer4, initialState4);
  const [day5, dispatch5] = useReducer(reducer5, initialState5);
  const [day6, dispatch6] = useReducer(reducer6, initialState6);

  return (
    <View style={styles.container}>
      <TitleBasic title="buổi có thể đi làm" />
      <ScrollView style={{padding: scale(20), paddingBottom: scale(60)}}>
        <WorkDay
          title={'Thứ 2'}
          onPressM={() => dispatch({type: 'morning'})}
          onPressA={() => dispatch({type: 'afternoon'})}
          onPressE={() => dispatch({type: 'evening'})}
          day={day}
        />
        <WorkDay
          title={'Thứ 3'}
          onPressM={() => dispatch1({type: 'morning'})}
          onPressA={() => dispatch1({type: 'afternoon'})}
          onPressE={() => dispatch1({type: 'evening'})}
          day={day1}
        />
        <WorkDay
          title={'Thứ 4'}
          onPressM={() => dispatch2({type: 'morning'})}
          onPressA={() => dispatch2({type: 'afternoon'})}
          onPressE={() => dispatch2({type: 'evening'})}
          day={day2}
        />
        <WorkDay
          title={'Thứ 5'}
          onPressM={() => dispatch3({type: 'morning'})}
          onPressA={() => dispatch3({type: 'afternoon'})}
          onPressE={() => dispatch3({type: 'evening'})}
          day={day3}
        />
        <WorkDay
          title={'Thứ 6'}
          onPressM={() => dispatch4({type: 'morning'})}
          onPressA={() => dispatch4({type: 'afternoon'})}
          onPressE={() => dispatch4({type: 'evening'})}
          day={day4}
        />
        <WorkDay
          title={'Thứ 7'}
          onPressM={() => dispatch5({type: 'morning'})}
          onPressA={() => dispatch5({type: 'afternoon'})}
          onPressE={() => dispatch5({type: 'evening'})}
          day={day5}
        />
        <WorkDay
          title={'Chủ nhật'}
          onPressM={() => dispatch6({type: 'morning'})}
          onPressA={() => dispatch6({type: 'afternoon'})}
          onPressE={() => dispatch6({type: 'evening'})}
          day={day6}
        />
        <View style={styles.buttonView}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(20)} />
          <Button title="Không lưu" color="#307df1" bg="#fff" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.LIGHT_WHITE},
  pen: {
    height: scale(20),
    width: scale(20),
    marginLeft: '90%',
    marginTop: scale(10),
  },
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontFamily: fonts.BOLD,
  },
  button: {
    fontSize: scale(16),
    color: '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    fontFamily: fonts.NORMAL,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {flexDirection: 'row'},
  bottom: {marginBottom: scale(20)},
  buttonView: {
    height: scale(110),
    width: '100%',
    backgroundColor: colors.LIGHT_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scale(10),
    paddingBottom: scale(60)
  },
});

export default UpdateWorkSession;
