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
import ModalStyle from '../../components/ModalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {loadOTP} from '../../redux/actions/actions';
import fonts from '../../constant/fonts';

const OTP_Confirm = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {email_otp} = route.params;
  const verify = useSelector(state => state.Authen.verify_email);
  const [timerCount, setTimer] = useState(300);
  const [otp, setOtp] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('verify: ', verify);
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submit = () => {
    if (!otp) {
      setMessage('Bạn chưa nhập mã OTP ');
      handleModal();
    } else {
      dispatch(loadOTP(email_otp, otp));

      if (verify === true) {
        navigation.navigate('Login');
      }
    }
  };

  const handleModal = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/Bgheader.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            Nhập mã xác thực được gửi tới email :
          </Text>
          <View>
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
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.title, {marginLeft: scale(20)}]}>
              Bạn chưa nhận được mã?
            </Text>
            <TouchableOpacity>
              <Text style={[styles.email, {textTransform: 'uppercase'}]}>
                Gửi lại
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={submit}>
            <Text style={styles.btn}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ModalStyle
        isVisible={visible}
        onBackdropPress={handleModal}
        content={message}
      />
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
    height: scale(204),
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
    color: '#404040',
    marginTop: scale(10),
    fontFamily: fonts.NORMAL,
  },
  email: {
    fontSize: scale(20),
    color: '#307df1',
    marginTop: scale(10),
    marginLeft: scale(20),
    fontFamily: fonts.NORMAL,
  },
  btn: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    color: 'white',
    paddingHorizontal: scale(17),
    paddingVertical: scale(11),
    backgroundColor: '#307df1',
    borderRadius: scale(30),
    marginTop: scale(20),
  },
  viewModal: {
    height: scale(200),
    backgroundColor: 'white',
    width: scale(300),
    margin: scale(25),
    borderRadius: scale(30),
  },
  tbmd: {
    fontSize: scale(24),
    fontWeight: '700',
    color: '#307df1',
    marginTop: scale(15),
  },
  content: {
    fontSize: scale(18),
    fontFamily: fonts.NORMAL,
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
