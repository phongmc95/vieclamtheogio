import React from 'react';

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
import fonts from '@constant/fonts';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.alignItems}>
        <View style={styles.header}>
          <Image style={styles.imgWave} source={images.wave} />

          <Text style={styles.txtTitle}>Đăng nhập</Text>
        </View>
        <View style={styles.boxTextInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập số điện thoại"
          />
        </View>
        <View style={styles.boxTextInput}>
          <TextInput style={styles.textInput} placeholder="Mật khẩu" pla />
        </View>
        <Text style={styles.txtPass}>Quên mật khẩu</Text>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabFlc')}>
          <Text style={styles.btnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.alignItems}>
          <Image style={styles.imgFooter} source={images.hunting_job} />
          <View style={styles.footer}>
            <Text style={styles.txtFooter}>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterFlc')}>
              <Text style={styles.txtRegister}>ĐĂNG KÝ NGAY</Text>
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
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: scale(10),
  },
  textInput: {
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    fontFamily: fonts.NORMAL,
  },
  boxTextInput: {
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderRadius: 1,
    marginBottom: scale(10),
    borderColor: '#307df1',
    borderWidth: 1,
  },
  btnLogin: {
    backgroundColor: '#307df1',
    borderRadius: scale(5),
    fontSize: scale(16),
    color: '#fff',
    textAlign: 'center',
    paddingVertical: scale(10),
    marginVertical: scale(15),
    fontFamily: fonts.NORMAL,
    paddingHorizontal: scale(10),
  },
  txtTitle: {
    fontSize: scale(30),
    color: '#fff',
    position: 'absolute',
    marginTop: scale(50),
    fontFamily: fonts.BOLD,
  },
  imgWave: {width: scale(375), height: scale(175)},
  alignItems: {alignItems: 'center'},
  header: {
    alignItems: 'center',
    marginBottom: scale(20),
  },
  txtPass: {
    fontSize: scale(13),
    color: '#404040',
    marginLeft: '60%',
    fontFamily: fonts.NORMAL,
  },
  imgFooter: {
    width: scale(375),
    height: scale(294),
  },
  footer: {
    position: 'absolute',
    marginTop: scale(10),
    flexDirection: 'row',
  },
  txtFooter: {
    fontSize: scale(15),
    color: '#000',
    fontFamily: fonts.NORMAL,
  },
  txtRegister: {
    fontSize: scale(15),
    color: '#307df1',
    fontFamily: fonts.NORMAL,
  },
});
