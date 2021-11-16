import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';

export default function ExperienceScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={{width: '85%'}}>
        <Text style={styles.txtProgress}>SUZUKIVIVU</Text>
        <Text style={styles.txtDetail}>Thực tập bán hàng</Text>
        <Text style={[styles.txtDetail, {marginBottom: scale(15)}]}>
          20/01/2021 - 20/10/2021
        </Text>
        <Text style={styles.txtProgress}>
          Bán nhiều hàng nhất tháng 1 đạt giải nhân viên trẻ của tháng
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateExperience')}>
          <Image style={styles.pen} source={icons.pen} />
        </TouchableOpacity>
        <Image style={styles.trash} source={icons.trash_black} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontFamily: fonts.BOLD,
  },
  txtDetail: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontFamily: fonts.NORMAL,
  },
  box: {
    width: scale(300),
    height: scale(160),
    overflow: 'hidden',
    borderRadius: scale(20),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(10),
    flexDirection: 'row',
  },
  trash: {
    width: scale(20),
    height: scale(20),
    marginLeft: scale(20),
    top: scale(20),
  },
  pen: {
    width: scale(20),
    height: scale(20),
    marginVertical: scale(5),
    marginLeft: scale(20),
  },
});
