import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../constant/colors';
import fonts from '../constant/fonts';
const AddcalendarAddd = ({
  shift,
  day,
  onPress2,
  onPress3,
  onPress4,
  value2,
  onPress5,
  onPress6,
  onPress7,
  onPressCN,
  value,
  onChangeText,
  onChangeText2,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: scale(16),
          marginLeft: scale(20),
          marginVertical: scale(10),
          fontFamily: fonts.NORMAL,
        }}>
        {shift}
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
        <View style={[styles.boxInput, {width: scale(125)}]}>
          <TextInput
            placeholder="VD 08:00"
            style={styles.textInput}
            keyboardType={'number-pad'}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <Text
          style={{
            marginTop: scale(15),
            fontFamily: fonts.NORMAL,
            marginHorizontal: scale(5),
          }}>
          Đến
        </Text>
        <View style={[styles.boxInput, {width: scale(125)}]}>
          <TextInput
            placeholder="VD 18:00"
            style={styles.textInput}
            keyboardType={'number-pad'}
            value={value2}
            onChangeText={onChangeText2}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <TouchableOpacity onPress={onPress2}>
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: day?.work_days?.monday
                    ? '#FFA800'
                    : '#EBEBEB',
                  color: day?.work_days?.monday ? 'white' : '#307DF1',
                },
              ]}>
              Thứ 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress3}>
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: day?.work_days?.tuesday
                    ? '#FFA800'
                    : '#EBEBEB',
                  color: day?.work_days?.tuesday ? 'white' : '#307DF1',
                },
              ]}>
              Thứ 3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress4}>
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: day?.work_days?.wednesday
                    ? '#FFA800'
                    : '#EBEBEB',
                  color: day?.work_days?.wednesday ? 'white' : '#307DF1',
                },
              ]}>
              Thứ 4
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={onPress5}>
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: day?.work_days?.thursday
                    ? '#FFA800'
                    : '#EBEBEB',
                  color: day?.work_days?.thursday ? 'white' : '#307DF1',
                },
              ]}>
              Thứ 5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress6}>
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: day?.work_days?.friday
                    ? '#FFA800'
                    : '#EBEBEB',
                  color: day?.work_days?.friday ? 'white' : '#307DF1',
                },
              ]}>
              Thứ 6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress7}>
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: day?.work_days?.saturday
                    ? '#FFA800'
                    : '#EBEBEB',
                  color: day?.work_days?.saturday ? 'white' : '#307DF1',
                },
              ]}>
              Thứ 7
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onPressCN}>
        <Text
          style={[
            styles.button,
            {
              backgroundColor: day?.work_days?.sunday ? '#FFA800' : '#EBEBEB',
              color: day?.work_days?.sunday ? 'white' : '#307DF1',
              marginLeft: scale(20),
            },
          ]}>
          Chủ nhật
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: 'black',
          marginVertical: scale(20),
          marginHorizontal: 20,
        }}
      />
    </View>
  );
};

export default AddcalendarAddd;

const styles = StyleSheet.create({
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.WHITE,
    margin: scale(5),
    borderRadius: scale(5),
  },
  textInput: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(14),
    marginLeft: scale(5),
  },
  Selecter: {
    width: scale(25),

    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {marginBottom: scale(20)},
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontFamily: fonts.BOLD,
  },
  row: {flexDirection: 'row', marginTop: scale(20), marginLeft: scale(20)},
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
