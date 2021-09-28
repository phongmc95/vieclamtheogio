import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import images from '../../../constant/images';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../../../components/Button/Button';
import NotifiSuccess from '../../../components/NotifiSuccess';
import axios from 'axios';

const width = Dimensions.get('window').width;

export default function OTPScreen({route}) {
  const [modal, setModal] = useState(false);
  const [otp, setOtp] = useState('');
  const toggleModal = () => {
    setModal(!modal);
  };
  const {token, email} = route.params;
  console.log(token);

  const _submit = () => {
    var data = new FormData();
    data.append('token', token);
    data.append('otp', otp);
    var config = {
      method: 'post',
      url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/uv_dky_xacthucOTP.php',
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.error == null) {
          setModal(!modal);
          setTimeout(() => {
            navigation.navigate('LoginFlc');
          }, 3000);
        } else if (response.data.data == null) {
          Alert.alert(response.data.error.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%', height: scale(173)}}
        source={images.tabBar}
      />
      <View style={{padding: scale(20), alignItems: 'center'}}>
        <Text style={{fontSize: scale(16), color: '#404040'}}>
          Nhập mã xác thực được gửi tới email :
        </Text>
        <Text style={{fontSize: scale(16), color: '#307df1'}}>{email}</Text>
        <OTPTextView
          inputCount={7}
          keyboardType="numeric"
          tintColor="#307df1"
          textInputStyle={{color: '#307df1'}}
          containerStyle={{marginTop: scale(40), marginBottom: scale(10)}}
          defaultValue={otp}
          handleTextChange={text => setOtp(text)}
        />
        <Text
          style={{
            fontSize: scale(16),
            color: '#404040',
            marginBottom: scale(30),
          }}>
          Mã khả dụng trong 60s
        </Text>

        <TouchableOpacity onPress={_submit}>
          <Button title="Xác nhận" color="#fff" bg="#307df1" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: scale(10)}}>
          <Text style={{fontSize: scale(16), color: '#404040'}}>
            Bạn chưa nhận được mã?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: scale(16), color: '#307df1'}}>Gửi lại</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NotifiSuccess
        on={modal}
        off={toggleModal}
        title="Đăng ký thành công"
        content="Chúc bạn có những trải nghiệm tốt nhất với dịch vụ của chúng tôi "
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
