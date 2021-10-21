import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import images from '../../../constant/images';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../../../components/Button/Button';
import NotifiSuccess from '../../../components/NotifiSuccess';

const width = Dimensions.get('window').width;

export default function OTPScreen() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
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
        <Text style={{fontSize: scale(16), color: '#307df1'}}>
          lululu@gmail.com
        </Text>
        <OTPTextView
          inputCount={6}
          keyboardType="numeric"
          tintColor="#307df1"
          textInputStyle={{color: '#307df1'}}
          containerStyle={{marginTop: scale(40), marginBottom: scale(10)}}
        />
        <Text
          style={{
            fontSize: scale(16),
            color: '#404040',
            marginBottom: scale(30),
          }}>
          Mã khả dụng trong 60s
        </Text>

        <TouchableOpacity onPress={toggleModal}>
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
