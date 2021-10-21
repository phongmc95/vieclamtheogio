import React, {useRef, useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import images from '@constant/images';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: scale(20),
          }}>
          <Image
            style={{width: scale(375), height: scale(175)}}
            source={images.wave}
          />

          <Text style={styles.txtTitle}>Đăng nhập</Text>
        </View>
        <View style={styles.boxTextInput}>
          <TextInput
            style={[styles.textInput, {textAlign: 'center'}]}
            placeholder="Nhập số điện thoại"
          />
        </View>
        <View style={styles.boxTextInput}>
          <TextInput
            style={[styles.textInput, {textAlign: 'center'}]}
            placeholder="Mật khẩu"
          />
        </View>
        <Text
          style={{fontSize: scale(13), color: '#404040', marginLeft: '60%'}}>
          Quên mật khẩu
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabFlc')}>
          <Text style={styles.btnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              width: scale(375),
              height: scale(294),
            }}
            source={images.hunting_job}
          />
          <View
            style={{
              position: 'absolute',
              marginTop: scale(10),
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: scale(15),
                color: '#000',
              }}>
              Bạn chưa có tài khoản?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterFlc')}>
              <Text style={{fontSize: scale(15), color: '#307df1'}}>
                ĐĂNG KÝ NGAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#e5e5e5'
  },
  buttonText: {
    fontSize: scale(20),
    color: '#307DF1',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(328),
    height: scale(36),
    borderColor: '#307DF1',
    borderWidth: scale(1),
    borderRadius: scale(4),
    marginBottom: scale(5),
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: scale(10),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
  },
  boxTextInput: {
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderRadius: 1,
    borderRadius: scale(5),
    marginBottom: scale(10),
    borderColor: '#307df1',
    borderWidth: 1,
  },
  btnLogin: {
    width: scale(100),
    height: scale(40),
    backgroundColor: '#307df1',
    borderRadius: scale(5),
    fontSize: scale(16),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: scale(10),
    marginVertical: scale(15),
  },
  txtTitle: {
    fontSize: scale(30),
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: scale(50),
  },
});
