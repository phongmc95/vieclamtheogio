import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {scale} from 'react-native-size-matters';
import {Modal, Portal} from 'react-native-paper';
const OTP_Confirm = ({navigation, route}) => {
  const {token, email_otp} = route.params;
  const [timerCount, setTimer] = useState(300);
  const [otp, setOtp] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [visible_logIn, setVisible_logIn] = React.useState(false);
  const [message, setMessage] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const submit = () => {
    if (!otp) {
      setMessage('Bạn chưa nhập mã OTP ');
      setVisible(true);
    } else {
    }
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/logoBG.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Nhập mã xác thực được gửi tới email :
          </Text>
          <View style={{width: '100%'}}>
            <Text style={styles.email}>{email_otp}</Text>
          </View>
          <OTPInputView
            style={{width: '80%', height: scale(100)}}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              setOtp(code);
            }}
          />
          <Text style={styles.title}>Mã khả dụng trong {timerCount}s </Text>
          <View style={{width: '100%'}}>
            <Text style={[styles.title, {marginLeft: scale(20)}]}>
              Bạn chưa nhận được mã:
            </Text>
            <TouchableOpacity>
              <Text style={styles.email}>Gửi lại</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={submit}>
            <Text style={styles.btn}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.viewModal}>
          <View style={styles.viewContent}>
            <Text style={styles.tbmd}>Thông báo</Text>
            <Text style={styles.content}>{message}.</Text>
          </View>
          <TouchableOpacity
            style={styles.btntb}
            onPress={() => setVisible(false)}>
            <Text style={styles.confirm}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal visible={visible_logIn}>
        <View style={styles.viewModal}>
          <View style={styles.viewContent}>
            <Text style={styles.tbmd}>Đăng ký thành công</Text>
            <Text style={styles.content}>
              Chúc bạn có những trải nghiệm tốt nhất với dịch vụ của chúng tôi.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btntb}
            onPress={() => navigation.navigate('LoginNTD')}>
            <Text style={styles.confirm}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default OTP_Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: scale(144),
    width: '100%',
  },
  underlineStyleBase: {
    color: '#404040',
    width: scale(40),
    height: scale(45),
    borderWidth: 0,
    borderBottomWidth: scale(1),
    borderColor: '#404040',
    fontSize: scale(18),
    fontWeight: '600',
  },

  underlineStyleHighLighted: {
    borderColor: '#307df1',
  },
  title: {
    fontSize: scale(18),
    fontWeight: '400',
    color: '#404040',
    marginTop: scale(10),
  },
  email: {
    fontSize: scale(20),
    fontWeight: '400',
    color: '#307df1',
    marginTop: scale(10),
    marginLeft: scale(20),
  },
  btn: {
    fontSize: scale(16),
    fontWeight: '500',
    color: 'white',
    paddingHorizontal: scale(17),
    paddingVertical: scale(11),
    backgroundColor: '#307df1',
    overflow: 'hidden',
    borderRadius: scale(30),
    marginTop: scale(20),
  },
  viewModal: {
    height: scale(200),
    backgroundColor: 'white',
    width: scale(300),

    margin: scale(25),
    overflow: 'hidden',
    borderRadius: scale(30),
    marginTop: scale(-50),
  },
  tbmd: {
    fontSize: scale(24),
    fontWeight: '700',
    color: '#307df1',
    marginTop: scale(15),
  },
  content: {
    fontSize: scale(18),
    fontWeight: '600',
    color: '#404040',
    margin: scale(15),
    textAlign: 'center',
  },
  confirm: {
    color: '#307df1',
    fontSize: scale(24),
    marginTop: scale(8),
  },
  btntb: {
    borderTopWidth: scale(0.3),
    borderColor: '#404040',
    width: scale(300),

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  viewContent: {
    alignItems: 'center',
    height: scale(130),
  },
});
