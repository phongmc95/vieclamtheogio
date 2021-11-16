import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextInputStyle from '../../components/TextInputStyle';
import TextInputPassword from '../../components/TextInputPassword';
import {getDeviceWidth} from '../../Utils/CheckDevice';
import ButtonStyle from '../../components/ButtonStyle';
import {validateEmail} from '../../base/Validate';
import ModalStyle from '../../components/ModalStyle';
import {useSelector} from 'react-redux';
import fonts from '../../constant/fonts';

const Login = ({navigation}) => {
  const checkLogin = useSelector(state => state.LOGIN.check_type);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const submit = () => {
    // if (!email || !pass) {
    //   setModal(true);
    //   setError('Các ô nhập là bắt buộc không được để trống! ');
    // } else if (!validateEmail(email)) {
    //   setModal(true);
    //   setError('Bạn nhập email không đúng định dạng . Vui  lòng nhập lại ! ');
    // }
    if (checkLogin === 'flc') {
      navigation.navigate('BottomTabFlc');
    } else {
      navigation.navigate('tabNTD');
    }
  };
  return (
    <View style={styles.contener}>
      <Image
        source={require('../../../assets/images/Bgheader.png')}
        style={styles.logo}
      />
      <Text style={styles.TitleLogin}>Đăng nhập</Text>
      <ScrollView style={styles.img}>
        <View style={styles.form}>
          <TextInputStyle
            Label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInputPassword
            Label="Password"
            value={pass}
            onChangeText={text => setPass(text)}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('InputEmail')}>
          <Text style={styles.forgetPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <ButtonStyle Title="Đăng nhập" onPress={submit} />
        </View>
        <View>
          <View style={styles.row}>
            <Text style={styles.text1}>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Resgister')}>
              <Text style={styles.text2}>ĐĂNG KÝ NGAY</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../../assets/images/hunting_job.png')}
            style={styles.fodter}
          />
        </View>
      </ScrollView>
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
  TitleLogin: {
    fontSize: scale(24),
    color: 'white',
    position: 'absolute',
    left: getDeviceWidth / 3,
    fontFamily: fonts.BOLD,
    top: scale(40),
  },
  logo: {
    height: scale(165),
    width: getDeviceWidth,
    marginBottom: scale(10),
  },

  text1: {
    fontSize: scale(15),
    fontFamily: fonts.NORMAL,
    marginTop: scale(15),
  },
  text2: {
    fontSize: scale(18),
    color: '#307DF1',
    marginTop: scale(12),
    fontFamily: fonts.NORMAL,
  },
  fodter: {
    width: getDeviceWidth,
    height: scale(250),
  },
  forgetPassword: {
    marginLeft: '60%',
    fontSize: scale(13),
    fontFamily: fonts.NORMAL,
  },
  form: {justifyContent: 'center', alignItems: 'center'},
  button: {marginTop: scale(20), alignItems: 'center'},
  row: {flexDirection: 'row', justifyContent: 'center'},
});
