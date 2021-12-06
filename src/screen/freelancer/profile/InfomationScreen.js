import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';

export default function InfomationScreen({item, type}) {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '90%'}}>
          <Text style={styles.txtProgress}>
            Họ và tên: <Text style={styles.blue}>{item.name}</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Ngày sinh:{' '}
            <Text style={styles.blue}>
              {item.birthday === null ? 'Chưa có' : item.birthday}
            </Text>
          </Text>
          <Text style={styles.txtProgress}>
            Giới tính: <Text style={styles.blue}>{item.gender}</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Hôn nhân:{' '}
            <Text style={styles.blue}>
              {item.marital_status === null ? 'Chưa có' : item.marital_status}
            </Text>
          </Text>
          <Text style={styles.txtProgress}>
            Số điện thoại: <Text style={styles.blue}>{item.phone}</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Email: <Text style={styles.blue}>{item.email}</Text>
          </Text>

          <Text style={styles.txtProgress}>
            Địa chỉ: <Text style={styles.blue}>{item.address}</Text>
          </Text>
        </View>
        {type === 'flc' && (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UpdateInfomation', {info: item})
              }>
              <Image style={styles.icon} source={icons.pen} />
            </TouchableOpacity>
          </View>
        )}
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
    marginTop: scale(5),
  },
});
