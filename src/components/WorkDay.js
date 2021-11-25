import React, {useReducer} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {scale} from 'react-native-size-matters';
import fonts from '../constant/fonts';

const WorkDay = ({title, onPressM, onPressA, onPressE, day}) => {
  return (
    <View style={styles.bottom}>
      <Text style={styles.txtProgress}>{title}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={onPressM}>
          <Text
            style={[
              styles.button,
              {
                backgroundColor: day.morning ? '#FFA800' : '#EBEBEB',
                color: day.morning ? 'white' : '#307DF1',
              },
            ]}>
            Sáng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressA}>
          <Text
            style={[
              styles.button,
              {
                backgroundColor: day.afternoon ? '#FFA800' : '#EBEBEB',
                color: day.afternoon ? 'white' : '#307DF1',
              },
            ]}>
            Chiều
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressE}>
          <Text
            style={[
              styles.button,
              {
                backgroundColor: day.evening ? '#FFA800' : '#EBEBEB',
                color: day.evening ? 'white' : '#307DF1',
              },
            ]}>
            Tối
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WorkDay;
const styles = StyleSheet.create({
  bottom: {marginBottom: scale(20)},
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontFamily: fonts.BOLD,
  },
  row: {flexDirection: 'row'},
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
});
