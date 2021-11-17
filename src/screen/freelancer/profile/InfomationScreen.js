import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';

export default function InfomationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.txtProgress}>
            Họ và tên: <Text style={styles.blue}>Ngô Văn Lộc</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Ngày sinh: <Text style={styles.blue}>02/01/2001</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Giới tính: <Text style={styles.blue}>Nam</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Hôn nhân: <Text style={styles.blue}>Độc thân </Text>
          </Text>
          <Text style={styles.txtProgress}>
            Số điện thoại: <Text style={styles.blue}>0123456789</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Email: <Text style={styles.blue}>vanloc@gmail.com</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Tỉnh thành: <Text style={styles.blue}>Hà Nội </Text>
          </Text>
          <Text style={styles.txtProgress}>
            Quận huyện: <Text style={styles.blue}>Hoàng Mai</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Địa chỉ:{' '}
            <Text style={styles.blue}>1 Định Công, Hoàng Mai, Hà Nội</Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateInfomation')}>
            <Image style={styles.icon} source={icons.pen} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
    lineHeight: scale(20),
    marginBottom: scale(10),
    fontFamily: fonts.NORMAL,
  },
  box: {
    width: scale(300),
    height: scale(300),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(10),
  },
  blue: {color: colors.BLUE},
  icon: {
    width: scale(20),
    height: scale(20),
    marginRight: scale(5),
    marginTop: scale(5),
    right: scale(20),
  },
});
