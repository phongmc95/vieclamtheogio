import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '@components/Button/Button';
import TitleBasic from '@components/title/TitleBasic';
import fonts from '../../../constant/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../constant/colors';

const UpdateWorkSession = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBasic title="buổi có thể đi làm" />
      <ScrollView style={{padding: scale(20)}}>
        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Thứ 2</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Thứ 3</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Thứ 4</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Thứ 5</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Thứ 6</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Thứ 7</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.txtProgress}>Chủ nhật</Text>
          <View style={styles.row}>
            <Text style={styles.button}>Sáng</Text>
            <Text style={styles.button}>Chiều</Text>
            <Text style={styles.button}>Tối</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(20)} />
          <Button title="Không lưu" color="#307df1" bg="#fff" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
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
  },
});

export default UpdateWorkSession;
