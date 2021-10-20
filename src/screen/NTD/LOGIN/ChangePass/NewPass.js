import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {EyeIconPass} from '../../../../../assets/icon';
import {Modal, Portal} from 'react-native-paper';
import LogIn_NTD from '../../../../base/API/apiNTD/LogIn_NTD';
import {data} from 'browserslist';
import {getDeviceWidth} from '../../../../Utils/CheckDevice';
import TextInputPassword from '../../../../components/TextInputPassword';
import ButtonStyle from '../../../../components/ButtonStyle';
const NewPass = ({navigation, route}) => {
  const {token_pass} = route.params;
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [show, setShow] = useState(true);
  const [visible, setVisible] = React.useState(false);
  const [visible_logIn, setVisible_logIn] = React.useState(false);
  const [message, setMessage] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const submit = () => {
    // if (!pass || !pass1) {
    //   setMessage('Các ô nhập là bắt buộc không được để trống');
    //   setVisible(true);
    // } else if (reg.test(pass) === false) {
    //   setMessage(
    //     'Mật khẩu cần có ít nhất 8 ký tự, ít nhất một chữ cái và một số và không có dấu cách',
    //   );
    //   setVisible(true);
    // } else if (pass1 != pass) {
    //   setMessage('Nhập lại mật khẩu không trùng khớp ');
    //   setVisible(true);
    // } else {
    //   callApi();
    // }
    navigation.navigate('LoginNTD');
  };
  const callApi = async () => {
    try {
      var data = new FormData();
      data.append('token', token_pass),
        data.append('pass', pass),
        data.append('re_pass', pass1);
      const response = await LogIn_NTD.ChangePass(data);
      if (response.data == null) {
        setMessage(response.error.message);
        setVisible(true);
      } else {
        setVisible_logIn(true);
      }
    } catch (error) {
      console.log('Lỗi rồi tuấn ơi' + error);
    }
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../../../../assets/images/Bgheader.png')}
            style={styles.logo}
          />
          <Image
            source={require('../../../../../assets/images/logoapp.png')}
            style={styles.logoapp}
          />
          <View style={{marginBottom: '10%'}}>
            <TextInputPassword
              Label="Password"
              value={pass}
              onChangeText={text => setPass(text)}
            />
            <TextInputPassword
              Label="Confirm Password"
              value={pass1}
              onChangeText={text => setPass1(text)}
            />
          </View>

          <ButtonStyle
            Title="Xác nhận"
            onPress={submit}
            styleBtn={{width: scale(120), marginBottom: '30%'}}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Image
              source={require('../../../../../assets/images/bro.png')}
              style={styles.foodter}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewPass;

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
  foodter: {
    width: scale(200),
    height: scale(200),
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
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(10),
  },
  logoapp: {
    height: scale(100),
    width: scale(165),
    position: 'absolute',
    top: scale(50),
  },
});
