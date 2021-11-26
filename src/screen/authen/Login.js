import React, {useEffect, useState} from 'react';
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
import {getDeviceWidth, isIos} from '../../Utils/CheckDevice';
import ButtonStyle from '../../components/ButtonStyle';
import {validateEmail} from '../../base/Validate';
import ModalStyle from '../../components/ModalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {loadPostsLogIn, log_out} from '../../redux/actions/actions';

import fonts from '../../constant/fonts';
import LoadSreen from '../../components/loadScreen';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const checkLogin = useSelector(state => state.Authen.check_type);
  const Error = useSelector(state => state.Authen.message);
  const check = useSelector(state => state.Authen.success);
  const loading = useSelector(state => state.Authen.requesting);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');

  const err = () => {
    setModal(true);
    setError('Sai địa chỉ email hoặc mật khẩu');
  };
  const submit = () => {
    if (!email || !pass) {
      setModal(true);
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else if (!validateEmail(email)) {
      setModal(true);
      setError('Bạn nhập email không đúng định dạng. Vui lòng nhập lại ! ');
    } else {
      dispatch(
        loadPostsLogIn(
          email,
          pass,
          checkLogin === 'flc' ? 'candidate' : 'employer',
        ),
      );

    }
  };
  const navi = () => {
    if (check === true) {
      navigation.navigate(checkLogin !== 'flc' ? 'tabNTD' : 'BottomTabFlc');
      return;
    }
  };
  useEffect(() => {
    navi();

  }, [loading]);
  return (
    <View style={styles.contener}>
      <Image
        source={require('../../../assets/images/Bgheader.png')}
        style={styles.logo}
      />
      <Text style={styles.TitleLogin}>Đăng nhập</Text>
      <ScrollView style={styles.img}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
          <Text
            style={{
              marginLeft: isIos ? '60%' : '70%',
              fontSize: scale(13),
              fontFamily: fonts.NORMAL,
            }}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: '10%', alignItems: 'center'}}>
          <ButtonStyle
            Title="Đăng nhập"
            onPress={submit}
            styleBtn={{width: 150}}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(log_out());
                navigation.navigate('Resgister');
              }}>
              <Text style={styles.text2}>ĐĂNG KÝ NGAY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/hunting_job.png')}
          style={styles.fodter}
        />
      </ScrollView>
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
      <LoadSreen load={loading} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#F5F5FF',
    alignItems: 'center',
  },
  TitleLogin: {
    fontSize: scale(24),
    fontFamily: fonts.BOLD,
    color: 'white',
    position: 'absolute',
    top: '7%',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  logo: {
    height: scale(173),
    width: getDeviceWidth,
    marginBottom: scale(20),
  },

  text1: {
    fontSize: scale(15),
    fontFamily: fonts.NORMAL,
    marginTop: scale(15),
  },
  text2: {
    fontSize: scale(18),
    fontFamily: fonts.NORMAL,
    color: '#307DF1',
    marginTop: scale(12),
  },
  fodter: {
    width: getDeviceWidth,
    height: scale(250),
  },
});
