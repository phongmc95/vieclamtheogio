import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import Button from '@components/Button/Button';

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{padding: scale(20), alignItems: 'center'}}>
          <Text
            style={{
              fontSize: scale(30),
              fontWeight: 'bold',
              color: '#307df1',
              marginVertical: scale(10),
            }}>
            Đăng ký ứng viên
          </Text>
          <Text
            style={{
              fontSize: scale(14),
              color: '#307df1',
              lineHeight: scale(16),
              textAlign: 'center',
            }}>
            Nhập đầy đủ thông tin để hoàn thành đăng ký
          </Text>
          <View style={{alignItems: 'center'}}>
            <View style={styles.avatar}>
              <Image source={icons.camera} />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput style={styles.textInput} placeholder="Họ và tên" />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput style={styles.textInput} placeholder="Số điện thoại" />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput style={styles.textInput} placeholder="Mật khẩu" />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập lại mật khẩu"
              />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput style={styles.textInput} placeholder="Địa chỉ" />
            </View>


            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Công việc mong muốn"
              />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Nơi làm việc mong muốn"
              />
            </View>

            <View style={styles.boxTextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Ngành nghề mong muốn"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('JobDesiedFlc')}>
                <Image style={styles.select} source={icons.select2} />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: scale(40)}}>
              <TouchableOpacity onPress={() => navigation.navigate('OTPFlc')}>
                <Button title="Xác nhận" color="#fff" bg="#307df1" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <View
              style={{
                marginTop: scale(20),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: scale(15),
                  color: '#000',
                }}>
                Bạn đã có tài khoản?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginFlc')}>
                <Text style={{fontSize: scale(15), color: '#307df1'}}>
                  ĐĂNG NHẬP NGAY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(100),
    marginVertical: scale(20),
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAvatar: {
    fontSize: scale(16),
    marginTop: scale(10),
    color: '#404040',
    marginBottom: scale(30),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '83%',
  },
  boxTextInput: {
    flexDirection: 'row',
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: '#307df1',
    borderRadius: scale(5),
    marginVertical: scale(5),
    borderWidth: 1,
  },
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
});
