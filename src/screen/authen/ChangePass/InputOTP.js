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
import {getDeviceWidth} from '../../../Utils/CheckDevice';
import ButtonStyle from '../../../components/ButtonStyle';

const InputOTP = ({navigation, route}) => {
  const [timerCount, setTimer] = useState(300);
  const [otp, setOtp] = useState('');

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
    navigation.navigate('NewPass', {token_pass: ''});
  };

  return (
    <View style={{backgroundColor: '#F5F5FF', flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../../assets/images/Bgheader.png')}
            style={styles.logo}
          />
          <Image
            source={require('../../../../assets/images/logoapp.png')}
            style={styles.logoapp}
          />
          <Text style={styles.title}>
            Nhập mã xác thực được gửi tới email :
          </Text>
          <View style={{width: '100%'}}>
            <Text style={styles.email}>email_changePass</Text>
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
          <ButtonStyle
            Title="Xác nhận"
            onPress={submit}
            styleBtn={{width: scale(120)}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
  },
  logo: {
    height: scale(173),
    width: getDeviceWidth,
    marginBottom: scale(10),
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

  logoapp: {
    height: scale(100),
    width: scale(165),
    position: 'absolute',
    top: scale(50),
  },
});
