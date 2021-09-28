import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {validateEmail} from '../../../../base/Validate';
import {Modal, Portal} from 'react-native-paper';
import LogIn_NTD from '../../../../base/API/apiNTD/LogIn_NTD';
const InputEmail = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = useState('');

  const hideModal = () => setVisible(false);
  const submit = () => {
    if (!email) {
      setMessage('Tất cả các ô nhập là bắt buộc không được để trống');
      setVisible(true);
    } else if (!validateEmail(email)) {
      setMessage('Email không đúng định dạng');
      setVisible(true);
    } else {
      CallApi();
    }
  };
  const CallApi = async () => {
    try {
      var data = new FormData();
      data.append('email', email);
      const response = await LogIn_NTD.Email_API(data);
      if (response.data == null) {
        setMessage(response.error.message);
        setVisible(true);
      } else {
        navigation.navigate('InputOTP', {
          token_changePass: response.data.token,
          email_changePass: email,
        });
        console.log(response.data.token);
      }
    } catch (error) {
      console.log('Loxi rồi tuấn ơi' + error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/images/header.png')}
        style={styles.header}
      />
      <Text
        style={{
          fontSize: scale(30),
          fontWeight: '700',
          color: 'white',
          position: 'absolute',
          top: scale(20),
        }}>
        Lấy lại mật khẩu
      </Text>
      <View style={{marginTop: scale(-60)}}>
        <View style={[styles.boxInput, {marginTop: scale(90)}]}>
          <TextInput
            placeholder="Nhập email"
            value={email}
            onChangeText={input => setEmail(input)}
            style={styles.textInput}
          />
        </View>
      </View>
      <TouchableOpacity onPress={submit}>
        {/* () => navigation.navigate('InputOTP') */}
        <Text
          style={{
            fontSize: scale(16),
            fontWeight: '500',
            paddingHorizontal: scale(20),
            paddingVertical: scale(11),
            backgroundColor: '#307df1',
            color: 'white',
            borderRadius: scale(30),
            marginTop: scale(40),
            marginBottom: scale(35),
          }}>
          Xác nhận
        </Text>
      </TouchableOpacity>
      <Image
        source={require('../../../../../assets/images/bro.png')}
        style={styles.foodter}
      />
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

export default InputEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: scale(124),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',

    justifyContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
    marginTop: scale(-40),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(10),
  },
  foodter: {
    width: scale(200),
    height: scale(200),
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
