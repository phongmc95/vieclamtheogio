import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {EyeIconPass} from '../../../../assets/icon';
import {Modal, Portal} from 'react-native-paper';
import {validateEmail} from '../../../base/Validate';
import LogIn_NTD from '../../../base/API/apiNTD/LogIn_NTD';
import {useDispatch, useSelector} from 'react-redux';
import {TOKEN_LoginNTD} from '../../../redux/actions/actions';
const LoginNTD = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = useState('');

  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();
  const get_token = useSelector(state => state.LOGIN.tokenlogin);
  const submit = () => {
    if (!email || !pass) {
      setMessage('Tất cả các ô nhập là bắt buộc không được để trống');
      setVisible(true);
    } else if (!validateEmail(email)) {
      setMessage('Email không đúng định dạng');
      setVisible(true);
    } else {
      callAPi();
    }
  };
  const callAPi = async () => {
    try {
      var data = new FormData();
      data.append('email', email);
      data.append('pass', pass);
      const response = await LogIn_NTD.LogIn_API(data);
      if (response.data == null) {
        setMessage(response.error.message);
        setVisible(true);
      } else {
        const dptk = TOKEN_LoginNTD(response.data.token);
        dispatch(dptk);
        navigation.navigate('tabNTD');

        console.log('>>>>>>' + get_token);
      }
    } catch (error) {
      console.log('Lỗi rồi Tuấn ơi' + error);
    }
  };
  return (
    <View style={styles.contener}>
      <ImageBackground
        style={styles.img}
        source={require('../../../../assets/img/LogInBG.png')}>
        <Text style={styles.TitleLogin}>Đăng nhập</Text>
        <View style={[styles.boxInput, {marginTop: scale(90)}]}>
          <TextInput
            placeholder="Nhập email"
            value={email}
            onChangeText={input => setEmail(input)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.boxRow}>
          <TextInput
            secureTextEntry={show}
            placeholder="Nhập mật khẩu"
            value={pass}
            onChangeText={input => setPass(input)}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={{marginRight: scale(10)}}
            onPress={() => setShow(!show)}>
            <EyeIconPass color="#808080" />
          </TouchableOpacity>
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

        <TouchableOpacity onPress={submit}>
          <Text style={styles.btnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignInNTD', {
                item: {cit_name: '', cit_id: ''},
              })
            }>
            <Text style={styles.text2}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    </View>
  );
};

export default LoginNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    width: windowWidth,
    height: windowHeight,
    alignContent: 'center',
    alignItems: 'center',
  },
  TitleLogin: {
    fontWeight: '700',
    fontSize: scale(30),
    textAlign: 'center',
    color: 'white',
    marginTop: scale(10),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',

    justifyContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(10),
  },
  btnLogin: {
    fontWeight: '500',

    fontSize: scale(16),
    textAlign: 'center',
    backgroundColor: '#307DF1',
    paddingHorizontal: scale(12),
    paddingVertical: scale(11),
    borderRadius: scale(5),
    color: 'white',
    marginTop: scale(10),
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
  boxRow: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',

    margin: scale(5),
    borderRadius: scale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewModal: {
    height: scale(200),
    backgroundColor: 'white',
    width: scale(300),

    margin: scale(25),
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
