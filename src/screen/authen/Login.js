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
import {useDispatch, useSelector} from 'react-redux';
import {loadPostsLogIn} from '../../redux/actions/actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const checkLogin = useSelector(state => state.Authen.check_type);
  const Error = useSelector(state => state.Authen.message);
  const data = useSelector(state => state.Authen.data);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  console.log('>>>', data);
  console.log('<<<', Error);
  const err = () => {
    setModal(true);
    setError(Error);
  };
  const submit = () => {
    // if (!email || !pass) {
    //   setModal(true);
    //   setError('Các ô nhập là bắt buộc không được để trống! ');
    // } else if (!validateEmail(email)) {
    //   setModal(true);
    //   setError('Bạn nhập email không đúng định dạng. Vui lòng nhập lại ! ');
    // } else {
    //   dispatch(
    //     loadPostsLogIn(
    //       email,
    //       pass,
    //       checkLogin === 'flc' ? 'candidate' : 'employer',
    //     ),
    //   );
    //   data
    //     ? navigation.navigate(checkLogin !== 'flc' ? 'tabNTD' : 'BottomTabFlc')
    //     : null;
    // }
    navigation.navigate(checkLogin !== 'flc' ? 'tabNTD' : 'BottomTabFlc');
  };
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
              marginLeft: scale(250),
              fontSize: scale(13),
              fontWeight: '400',
            }}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: '15%', alignItems: 'center'}}>
          <ButtonStyle Title="Đăng nhập" onPress={submit} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Resgister')}>
              <Text style={styles.text2}>Đăng ký ngay</Text>
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
    fontWeight: '700',
    color: 'white',
    position: 'absolute',
    top: '10%',
    textAlign: 'center',
    left: getDeviceWidth / 3,
  },
  logo: {
    height: scale(173),
    width: getDeviceWidth,
    marginBottom: scale(20),
  },

  text1: {
    fontSize: scale(15),
    fontWeight: '400',
    marginTop: scale(15),
  },
  text2: {
    fontSize: scale(18),
    fontWeight: '400',
    color: '#307DF1',
    marginTop: scale(12),
  },
  fodter: {
    width: getDeviceWidth,
    height: scale(250),
  },
});