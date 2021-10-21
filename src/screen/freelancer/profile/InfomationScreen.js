import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';

export default function InfomationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.txtProgress}>
            Họ và tên: <Text style={{color: '#307df1'}}>Ngô Văn Lộc</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Ngày sinh: <Text style={{color: '#307df1'}}>02/01/2001</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Giới tính: <Text style={{color: '#307df1'}}>Nam</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Hôn nhân: <Text style={{color: '#307df1'}}>Độc thân </Text>
          </Text>
          <Text style={styles.txtProgress}>
            Số điện thoại: <Text style={{color: '#307df1'}}>0123456789</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Email: <Text style={{color: '#307df1'}}>vanloc@gmail.com</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Tỉnh thành: <Text style={{color: '#307df1'}}>Hà Nội </Text>
          </Text>
          <Text style={styles.txtProgress}>
            Quận huyện: <Text style={{color: '#307df1'}}>Hoàng Mai</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Địa chỉ:{' '}
            <Text style={{color: '#307df1'}}>
              1 Định Công, Hoàng Mai, Hà Nội
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateInfomation')}>
            <Image
              style={{
                width: scale(20),
                height: scale(20),
                marginRight: scale(5),
                marginTop: scale(5),
              }}
              source={icons.pen}
            />
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
  },
  box: {
    width: scale(300),
    height: scale(300),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(10),
  },
});
