import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';

export default function WorkSessionScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('UpdateWork')}>
        <Image style={styles.pen} source={icons.pen} />
      </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
    overflow: 'hidden',
    borderRadius: scale(5),
    marginRight: scale(20),
    fontFamily: fonts.NORMAL,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  row: {flexDirection: 'row'},
  bottom: {marginBottom: scale(20)},
});
